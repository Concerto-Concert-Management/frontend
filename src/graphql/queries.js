/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getORGANIZATION = /* GraphQL */ `
  query GetORGANIZATION($id: ID!) {
    getORGANIZATION(id: $id) {
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
export const listORGANIZATIONs = /* GraphQL */ `
  query ListORGANIZATIONs(
    $filter: ModelORGANIZATIONFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listORGANIZATIONs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncORGANIZATIONS = /* GraphQL */ `
  query SyncORGANIZATIONS(
    $filter: ModelORGANIZATIONFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncORGANIZATIONS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getEMPLOYEEE = /* GraphQL */ `
  query GetEMPLOYEEE($id: ID!) {
    getEMPLOYEEE(id: $id) {
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
export const listEMPLOYEEEs = /* GraphQL */ `
  query ListEMPLOYEEEs(
    $filter: ModelEMPLOYEEEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEMPLOYEEEs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEMPLOYEEES = /* GraphQL */ `
  query SyncEMPLOYEEES(
    $filter: ModelEMPLOYEEEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEMPLOYEEES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
