import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Role {
  CONCERTMANAGER = "CONCERTMANAGER",
  STAGEMANAGER = "STAGEMANAGER",
  MUSICDIRECTOR = "MUSICDIRECTOR",
  TOURMANAGER = "TOURMANAGER",
  PRODUCTIONMANAGER = "PRODUCTIONMANAGER",
  COMPANYMANAGER = "COMPANYMANAGER",
  LIBRARIAN = "LIBRARIAN",
  CONCERTMASTER = "CONCERTMASTER",
  PRINCIPAL = "PRINCIPAL",
  VICEPRINCIPAL = "VICEPRINCIPAL",
  SECTION = "SECTION",
  GUESTARTIST = "GUESTARTIST",
  VIDEOGRAPHER = "VIDEOGRAPHER",
  SOUNDENGINEER = "SOUNDENGINEER",
  USHER = "USHER",
  STAGECREW = "STAGECREW",
  LIGHTING = "LIGHTING",
  CEO = "CEO",
  COO = "COO",
  CTO = "CTO",
  DEVELOPMENT = "DEVELOPMENT"
}

export enum Sections {
  SOPRANO = "SOPRANO",
  ALTO = "ALTO",
  TENOR = "TENOR",
  BASS = "BASS",
  CONDUCTOR = "CONDUCTOR",
  COMPOSER = "COMPOSER",
  PICCOLO = "PICCOLO",
  FLUTE = "FLUTE",
  CLARINET = "CLARINET",
  OBOE = "OBOE",
  BASSOON = "BASSOON",
  HORN = "HORN",
  SOPRANOSAXOPHONE = "SOPRANOSAXOPHONE",
  TRUMPET = "TRUMPET",
  TROMBONE = "TROMBONE",
  BASSTROMBONE = "BASSTROMBONE",
  TUBA = "TUBA",
  VIOLINI = "VIOLINI",
  VIOLA = "VIOLA",
  CELLO = "CELLO",
  CONTRABASS = "CONTRABASS",
  PERCUSSION = "PERCUSSION",
  VIOLINII = "VIOLINII",
  PIANO = "PIANO",
  HARP = "HARP",
  ENGLISHHORN = "ENGLISHHORN",
  BASSCLARINET = "BASSCLARINET",
  EBCLARINET = "EBCLARINET",
  ALTOSAXOPHONE = "ALTOSAXOPHONE",
  TENORSAXOPHONE = "TENORSAXOPHONE",
  BARITONESAXOPHONE = "BARITONESAXOPHONE",
  SAXOPHONE = "SAXOPHONE",
  NONMUSICIAN = "NONMUSICIAN",
  EUPHONIUM = "EUPHONIUM"
}



export declare class ORGANIZATION {
  readonly id: string;
  readonly NAME: string;
  readonly CONTACT_NAME: string;
  readonly CONTACT_EMAIL: string;
  readonly EMPLOYEEES?: (EMPLOYEEE | null)[];
  readonly ADDRESS: string;
  readonly PHONE: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ORGANIZATION>);
  static copyOf(source: ORGANIZATION, mutator: (draft: MutableModel<ORGANIZATION>) => MutableModel<ORGANIZATION> | void): ORGANIZATION;
}

export declare class EMPLOYEEE {
  readonly id: string;
  readonly FULL_NAME: string;
  readonly PHONE: string;
  readonly SSN: number;
  readonly PASSPORT?: number;
  readonly AMERICAN_FREQUENT_FLYER?: string;
  readonly DELTA_FREQUENT_FLYER?: string;
  readonly UNITED_FREQUENT_FLYER?: string;
  readonly BIRTHDATE: string;
  readonly PASSPORT_EXPIRATION?: string;
  readonly ROLE: Role | keyof typeof Role;
  readonly UNIONDESIGNEE: boolean;
  readonly organizationID?: string;
  readonly SECTION: Sections | keyof typeof Sections;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EMPLOYEEE>);
  static copyOf(source: EMPLOYEEE, mutator: (draft: MutableModel<EMPLOYEEE>) => MutableModel<EMPLOYEEE> | void): EMPLOYEEE;
}