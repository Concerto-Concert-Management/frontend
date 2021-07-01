import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createOrganizationMutation, deleteOrganization as deleteOrganizationMutation } from './graphql/mutations';

const initialFormState = { name: '', contact_name: '', contact_email: '', address: '', phone: '' }

function App() {
  const [organizations, setOrganizations] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listOrganizations });
    setNotes(apiData.data.listNotes.items);
  }

  async function createOrganization() {
    if (!formData.name || !formData.contact_name || !formData.contact_email || !formData.address || !formData.phone) return;
    await API.graphql({ query: createOrganizationMutation, variables: { input: formData } });
    setOrganizations([ ...organizations, formData ]);
    setFormData(initialFormState);
  }

  async function deleteOrganization({ id }) {
    const newOrganizationsArray = organizations.filter(organization => organization.id !== id);
    setOrganizations(newOrganizationsArray);
    await API.graphql({ query: deleteOrganizationMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Resonant Horizon</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Organization name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'contact_name': e.target.value})}
        placeholder="Contact Name"
        value={formData.contact_name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'contact_email': e.target.value})}
        placeholder="Contact email"
        value={formData.contact_email}
      />
      <input
        onChange={e => setFormData({ ...formData, 'address': e.target.value})}
        placeholder="Address"
        value={formData.address}
      />
      <input
        onChange={e => setFormData({ ...formData, 'phone': e.target.value})}
        placeholder="Phone Number"
        value={formData.phone}
      />
      <button onClick={createOrganization}>Create Organization</button>
      <div style={{marginBottom: 30}}>
        {
          organization.map(note => (
            <div key={organization.id || organization.name}>
              <h2>{note.name}</h2>
              <p>{note.contact_name}</p>
              <p>{note.contact_email}</p>
              <p>{note.address}</p>
              <p>{note.phone}</p>
              <button onClick={() => deleteOrganization(note)}>Delete organization</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
