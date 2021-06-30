export const schema = {
    "models": {
        "ORGANIZATION": {
            "name": "ORGANIZATION",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "NAME": {
                    "name": "NAME",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CONTACT_NAME": {
                    "name": "CONTACT_NAME",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CONTACT_EMAIL": {
                    "name": "CONTACT_EMAIL",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "EMPLOYEEES": {
                    "name": "EMPLOYEEES",
                    "isArray": true,
                    "type": {
                        "model": "EMPLOYEEE"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "organizationID"
                    }
                },
                "ADDRESS": {
                    "name": "ADDRESS",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PHONE": {
                    "name": "PHONE",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ORGANIZATIONS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EMPLOYEEE": {
            "name": "EMPLOYEEE",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "FULL_NAME": {
                    "name": "FULL_NAME",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PHONE": {
                    "name": "PHONE",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": true,
                    "attributes": []
                },
                "SSN": {
                    "name": "SSN",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "PASSPORT": {
                    "name": "PASSPORT",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "AMERICAN_FREQUENT_FLYER": {
                    "name": "AMERICAN_FREQUENT_FLYER",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DELTA_FREQUENT_FLYER": {
                    "name": "DELTA_FREQUENT_FLYER",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "UNITED_FREQUENT_FLYER": {
                    "name": "UNITED_FREQUENT_FLYER",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "BIRTHDATE": {
                    "name": "BIRTHDATE",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "PASSPORT_EXPIRATION": {
                    "name": "PASSPORT_EXPIRATION",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "ROLE": {
                    "name": "ROLE",
                    "isArray": false,
                    "type": {
                        "enum": "Role"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "UNIONDESIGNEE": {
                    "name": "UNIONDESIGNEE",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "organizationID": {
                    "name": "organizationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "SECTION": {
                    "name": "SECTION",
                    "isArray": false,
                    "type": {
                        "enum": "Sections"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EMPLOYEEES",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byORGANIZATION",
                        "fields": [
                            "organizationID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Role": {
            "name": "Role",
            "values": [
                "CONCERTMANAGER",
                "STAGEMANAGER",
                "MUSICDIRECTOR",
                "TOURMANAGER",
                "PRODUCTIONMANAGER",
                "COMPANYMANAGER",
                "LIBRARIAN",
                "CONCERTMASTER",
                "PRINCIPAL",
                "VICEPRINCIPAL",
                "SECTION",
                "GUESTARTIST",
                "VIDEOGRAPHER",
                "SOUNDENGINEER",
                "USHER",
                "STAGECREW",
                "LIGHTING",
                "CEO",
                "COO",
                "CTO",
                "DEVELOPMENT"
            ]
        },
        "Sections": {
            "name": "Sections",
            "values": [
                "SOPRANO",
                "ALTO",
                "TENOR",
                "BASS",
                "CONDUCTOR",
                "COMPOSER",
                "PICCOLO",
                "FLUTE",
                "CLARINET",
                "OBOE",
                "BASSOON",
                "HORN",
                "SOPRANOSAXOPHONE",
                "TRUMPET",
                "TROMBONE",
                "BASSTROMBONE",
                "TUBA",
                "VIOLINI",
                "VIOLA",
                "CELLO",
                "CONTRABASS",
                "PERCUSSION",
                "VIOLINII",
                "PIANO",
                "HARP",
                "ENGLISHHORN",
                "BASSCLARINET",
                "EBCLARINET",
                "ALTOSAXOPHONE",
                "TENORSAXOPHONE",
                "BARITONESAXOPHONE",
                "SAXOPHONE",
                "NONMUSICIAN",
                "EUPHONIUM"
            ]
        }
    },
    "nonModels": {},
    "version": "7e37bc05ff21fc6fcaa3898fa64a9f23"
};