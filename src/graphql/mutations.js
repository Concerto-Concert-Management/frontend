/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createORGANIZATION = /* GraphQL */ `
  mutation CreateORGANIZATION(
    $input: CreateORGANIZATIONInput!
    $condition: ModelORGANIZATIONConditionInput
  ) {
    createORGANIZATION(input: $input, condition: $condition) {
      id
      NAME
      CONTACT_NAME
      CONTACT_EMAIL
      ADDRESS
      PHONE
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EMPLOYEEES {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateORGANIZATION = /* GraphQL */ `
  mutation UpdateORGANIZATION(
    $input: UpdateORGANIZATIONInput!
    $condition: ModelORGANIZATIONConditionInput
  ) {
    updateORGANIZATION(input: $input, condition: $condition) {
      id
      NAME
      CONTACT_NAME
      CONTACT_EMAIL
      ADDRESS
      PHONE
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EMPLOYEEES {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteORGANIZATION = /* GraphQL */ `
  mutation DeleteORGANIZATION(
    $input: DeleteORGANIZATIONInput!
    $condition: ModelORGANIZATIONConditionInput
  ) {
    deleteORGANIZATION(input: $input, condition: $condition) {
      id
      NAME
      CONTACT_NAME
      CONTACT_EMAIL
      ADDRESS
      PHONE
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EMPLOYEEES {
        nextToken
        startedAt
      }
    }
  }
`;
export const createEMPLOYEEE = /* GraphQL */ `
  mutation CreateEMPLOYEEE(
    $input: CreateEMPLOYEEEInput!
    $condition: ModelEMPLOYEEEConditionInput
  ) {
    createEMPLOYEEE(input: $input, condition: $condition) {
      id
      FULL_NAME
      PHONE
      SSN
      PASSPORT
      AMERICAN_FREQUENT_FLYER
      DELTA_FREQUENT_FLYER
      UNITED_FREQUENT_FLYER
      BIRTHDATE
      PASSPORT_EXPIRATION
      ROLE
      UNIONDESIGNEE
      organizationID
      SECTION
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEMPLOYEEE = /* GraphQL */ `
  mutation UpdateEMPLOYEEE(
    $input: UpdateEMPLOYEEEInput!
    $condition: ModelEMPLOYEEEConditionInput
  ) {
    updateEMPLOYEEE(input: $input, condition: $condition) {
      id
      FULL_NAME
      PHONE
      SSN
      PASSPORT
      AMERICAN_FREQUENT_FLYER
      DELTA_FREQUENT_FLYER
      UNITED_FREQUENT_FLYER
      BIRTHDATE
      PASSPORT_EXPIRATION
      ROLE
      UNIONDESIGNEE
      organizationID
      SECTION
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEMPLOYEEE = /* GraphQL */ `
  mutation DeleteEMPLOYEEE(
    $input: DeleteEMPLOYEEEInput!
    $condition: ModelEMPLOYEEEConditionInput
  ) {
    deleteEMPLOYEEE(input: $input, condition: $condition) {
      id
      FULL_NAME
      PHONE
      SSN
      PASSPORT
      AMERICAN_FREQUENT_FLYER
      DELTA_FREQUENT_FLYER
      UNITED_FREQUENT_FLYER
      BIRTHDATE
      PASSPORT_EXPIRATION
      ROLE
      UNIONDESIGNEE
      organizationID
      SECTION
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
