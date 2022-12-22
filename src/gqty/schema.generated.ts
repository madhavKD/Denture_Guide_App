/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
}

export enum Area {
  TOOTH = "TOOTH",
  TOOTH__BONE = "TOOTH__BONE",
  TOOTH__BONE__DISTAL = "TOOTH__BONE__DISTAL",
  TOOTH__BONE__FACIAL = "TOOTH__BONE__FACIAL",
  TOOTH__BONE__HORICONTAL = "TOOTH__BONE__HORICONTAL",
  TOOTH__BONE__MESIAL = "TOOTH__BONE__MESIAL",
  TOOTH__BONE__ORAL = "TOOTH__BONE__ORAL",
  TOOTH__BONE__VERTICAL = "TOOTH__BONE__VERTICAL",
  TOOTH__CROWN = "TOOTH__CROWN",
  TOOTH__CROWN__CERVICAL = "TOOTH__CROWN__CERVICAL",
  TOOTH__CROWN__DISTAL = "TOOTH__CROWN__DISTAL",
  TOOTH__CROWN__FACIAL = "TOOTH__CROWN__FACIAL",
  TOOTH__CROWN__MESIAL = "TOOTH__CROWN__MESIAL",
  TOOTH__CROWN__ORAL = "TOOTH__CROWN__ORAL",
  TOOTH__CROWN__TOP = "TOOTH__CROWN__TOP",
  TOOTH__GUM = "TOOTH__GUM",
  TOOTH__GUM__DISTAL = "TOOTH__GUM__DISTAL",
  TOOTH__GUM__FACIAL = "TOOTH__GUM__FACIAL",
  TOOTH__GUM__MESIAL = "TOOTH__GUM__MESIAL",
  TOOTH__GUM__ORAL = "TOOTH__GUM__ORAL",
  TOOTH__ROOT = "TOOTH__ROOT",
  TOOTH__ROOT__APICAL = "TOOTH__ROOT__APICAL",
  TOOTH__ROOT__DISTAL = "TOOTH__ROOT__DISTAL",
  TOOTH__ROOT__DISTO_BUCCAL = "TOOTH__ROOT__DISTO_BUCCAL",
  TOOTH__ROOT__MESIAL = "TOOTH__ROOT__MESIAL",
  TOOTH__ROOT__MESIO_BUCCAL = "TOOTH__ROOT__MESIO_BUCCAL",
  TOOTH__ROOT__ORAL = "TOOTH__ROOT__ORAL",
}

/** 'CLS_Address_E' input values */
export interface CLS_Address_EInput {
  city: Scalars["String"];
  country: Scalars["String"];
  postalCode: Scalars["String"];
  street: Scalars["String"];
  streetNo: Scalars["String"];
}

export interface CLS_Address_Input_E {
  city: Scalars["String"];
  country: Scalars["String"];
  postalCode: Scalars["String"];
  street: Scalars["String"];
  streetNo: Scalars["String"];
}

/** 'CLS_AssignedOrganizationalUnit' input values */
export interface CLS_AssignedOrganizationalUnitInput {
  organizationalUnits?: InputMaybe<
    Array<InputMaybe<CLS_OrganizationalUnits_EInput>>
  >;
  tenant?: InputMaybe<CLS_AssignedOrganizationalUnitTenantRelation>;
  user?: InputMaybe<CLS_AssignedOrganizationalUnitUserRelation>;
}

/** Allow manipulating the relationship between the types 'CLS_AssignedOrganizationalUnit' and 'CLS_OrganizationalUnit' using the field 'CLS_AssignedOrganizationalUnit.tenant'. */
export interface CLS_AssignedOrganizationalUnitTenantRelation {
  /** Connect a document of type 'CLS_OrganizationalUnit' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'CLS_OrganizationalUnit' and associate it with the current document. */
  create?: InputMaybe<CLS_OrganizationalUnitInput>;
  /** If true, disconnects this document from 'CLS_OrganizationalUnit' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

/** Allow manipulating the relationship between the types 'CLS_AssignedOrganizationalUnit' and 'USR_User' using the field 'CLS_AssignedOrganizationalUnit.user'. */
export interface CLS_AssignedOrganizationalUnitUserRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
  /** If true, disconnects this document from 'USR_User' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

/** 'CLS_InsuranceAlliance' input values */
export interface CLS_InsuranceAllianceInput {
  address?: InputMaybe<CLS_Address_EInput>;
  email?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  name: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
}

export interface CLS_InsuranceAlliance_Input {
  address?: InputMaybe<CLS_Address_Input_E>;
  email?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  name: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
}

/** 'CLS_LegalEntityMasterData_E' input values */
export interface CLS_LegalEntityMasterData_EInput {
  insuranceAlliance?: InputMaybe<Scalars["ID"]>;
  settlementNumber?: InputMaybe<Scalars["String"]>;
  taxID?: InputMaybe<Scalars["String"]>;
}

/** Allow manipulating the relationship between the types 'CLS_LegalEntityMasterData_E' and 'CLS_InsuranceAlliance' using the field 'CLS_LegalEntityMasterData_E.insuranceAlliance'. */
export interface CLS_LegalEntityMasterData_EInsuranceAllianceRelation {
  /** Connect a document of type 'CLS_InsuranceAlliance' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'CLS_InsuranceAlliance' and associate it with the current document. */
  create?: InputMaybe<CLS_InsuranceAllianceInput>;
  /** If true, disconnects this document from 'CLS_InsuranceAlliance' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

export interface CLS_LegalEntityMasterData_Input_E {
  insuranceAlliance?: InputMaybe<CLS_InsuranceAlliance_Input>;
  settlementNumber?: InputMaybe<Scalars["String"]>;
  taxID?: InputMaybe<Scalars["String"]>;
}

/** 'CLS_OrganizationalUnit' input values */
export interface CLS_OrganizationalUnitInput {
  address?: InputMaybe<CLS_Address_EInput>;
  childOrganizationalUnits?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  isLegalEntity: Scalars["Boolean"];
  legalEntityMasterData?: InputMaybe<CLS_LegalEntityMasterData_EInput>;
  name: Scalars["String"];
  parentOrganizationalUnit?: InputMaybe<CLS_OrganizationalUnitParentOrganizationalUnitRelation>;
  patientServing?: InputMaybe<CLS_PatientServing>;
  phone?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<CLS_Type>;
}

/** Allow manipulating the relationship between the types 'CLS_OrganizationalUnit' and 'CLS_OrganizationalUnit' using the field 'CLS_OrganizationalUnit.parentOrganizationalUnit'. */
export interface CLS_OrganizationalUnitParentOrganizationalUnitRelation {
  /** Connect a document of type 'CLS_OrganizationalUnit' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'CLS_OrganizationalUnit' and associate it with the current document. */
  create?: InputMaybe<CLS_OrganizationalUnitInput>;
  /** If true, disconnects this document from 'CLS_OrganizationalUnit' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

export interface CLS_OrganizationalUnit_Input {
  address?: InputMaybe<CLS_Address_Input_E>;
  childOrganizationalUnits?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  isLegalEntity: Scalars["Boolean"];
  legalEntityMasterData?: InputMaybe<CLS_LegalEntityMasterData_Input_E>;
  name: Scalars["String"];
  parentOrganizationalUnit?: InputMaybe<CLS_OrganizationalUnit_Input>;
  patientServing?: InputMaybe<CLS_PatientServing>;
  phone?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<CLS_Type>;
}

/** 'CLS_OrganizationalUnits_E' input values */
export interface CLS_OrganizationalUnits_EInput {
  auth0InvitationId?: InputMaybe<Scalars["String"]>;
  organizationalUnit?: InputMaybe<Scalars["ID"]>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
}

/** Allow manipulating the relationship between the types 'CLS_OrganizationalUnits_E' and 'CLS_OrganizationalUnit' using the field 'CLS_OrganizationalUnits_E.organizationalUnit'. */
export interface CLS_OrganizationalUnits_EOrganizationalUnitRelation {
  /** Connect a document of type 'CLS_OrganizationalUnit' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'CLS_OrganizationalUnit' and associate it with the current document. */
  create?: InputMaybe<CLS_OrganizationalUnitInput>;
  /** If true, disconnects this document from 'CLS_OrganizationalUnit' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

export enum CLS_PatientServing {
  LEGAL_AND_PRIVATE = "LEGAL_AND_PRIVATE",
  NONE = "NONE",
  PRIVATE = "PRIVATE",
}

/** 'CLS_Role' input values */
export interface CLS_RoleInput {
  auth0Id: Scalars["String"];
  organizationalUnitE?: InputMaybe<CLS_OrganizationalUnits_EInput>;
  type: CLS_RoleType;
}

export enum CLS_RoleType {
  ADMINISTRATOR = "ADMINISTRATOR",
  ANALYST = "ANALYST",
  ASSISTANT = "ASSISTANT",
  DOCTOR = "DOCTOR",
  OWNER = "OWNER",
  RECEPTIONIST = "RECEPTIONIST",
  TRAINEE = "TRAINEE",
}

export enum CLS_Type {
  LOCATION = "LOCATION",
  ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT",
  PRACTICE = "PRACTICE",
}

export enum Depth {
  DEPTH__LVL_1 = "DEPTH__LVL_1",
  DEPTH__LVL_2 = "DEPTH__LVL_2",
  DEPTH__LVL_3 = "DEPTH__LVL_3",
  DEPTH__LVL_4 = "DEPTH__LVL_4",
  DEPTH__LVL_5 = "DEPTH__LVL_5",
  DEPTH__LVL_6 = "DEPTH__LVL_6",
  DEPTH__LVL_7 = "DEPTH__LVL_7",
  DEPTH__LVL_8 = "DEPTH__LVL_8",
  DEPTH__LVL_9 = "DEPTH__LVL_9",
  DEPTH__LVL_10 = "DEPTH__LVL_10",
  DEPTH__LVL_11 = "DEPTH__LVL_11",
  DEPTH__LVL_12 = "DEPTH__LVL_12",
  DEPTH__LVL_13 = "DEPTH__LVL_13",
}

export interface HES_AddMedicalFindingToDentalStatusInput {
  createdBy: Scalars["ID"];
  findings: Array<InputMaybe<HES_Findings_EInput>>;
  patient: Scalars["ID"];
}

export interface HES_CreateMedicalFindingInput {
  airtableId: Scalars["String"];
  availableAreas: Array<InputMaybe<Scalars["String"]>>;
  availableMaterials?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availablePositions: Array<InputMaybe<Scalars["String"]>>;
  complements?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  criticality?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  replaces?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  zIndex: Scalars["String"];
}

/** Allow manipulating the relationship between the types 'HES_DentalStatus' and 'USR_User' using the field 'HES_DentalStatus.createdBy'. */
export interface HES_DentalStatusCreatedByRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
}

/** Allow manipulating the relationship between the types 'HES_DentalStatus' and 'USR_User' using the field 'HES_DentalStatus.editedBy'. */
export interface HES_DentalStatusEditedByRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
  /** If true, disconnects this document from 'USR_User' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

/** 'HES_DentalStatus' input values */
export interface HES_DentalStatusInput {
  createdAt?: InputMaybe<Scalars["Time"]>;
  createdBy?: InputMaybe<HES_DentalStatusCreatedByRelation>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  editedAt?: InputMaybe<Scalars["Time"]>;
  editedBy?: InputMaybe<HES_DentalStatusEditedByRelation>;
  findings: Array<InputMaybe<HES_Findings_EInput>>;
  patient?: InputMaybe<HES_DentalStatusPatientRelation>;
}

/** Allow manipulating the relationship between the types 'HES_DentalStatus' and 'USR_User' using the field 'HES_DentalStatus.patient'. */
export interface HES_DentalStatusPatientRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
}

/** 'HES_Findings_E' input values */
export interface HES_Findings_EInput {
  area?: InputMaybe<Scalars["String"]>;
  areaPrefixes?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  material?: InputMaybe<Scalars["String"]>;
  medicalFinding: Scalars["ID"];
  modifiers?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  note?: InputMaybe<HES_Note_EInput>;
  position?: InputMaybe<Scalars["String"]>;
  values?: InputMaybe<Scalars["String"]>;
}

/** Allow manipulating the relationship between the types 'HES_Findings_E' and 'HES_MedicalFinding' using the field 'HES_Findings_E.medicalFinding'. */
export interface HES_Findings_EMedicalFindingRelation {
  /** Connect a document of type 'HES_MedicalFinding' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'HES_MedicalFinding' and associate it with the current document. */
  create?: InputMaybe<HES_MedicalFindingInput>;
}

/** 'HES_MedicalFinding' input values */
export interface HES_MedicalFindingInput {
  airtableId?: InputMaybe<Scalars["String"]>;
  availableAreas?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availableLocations: Array<InputMaybe<Scalars["String"]>>;
  availableMaterials?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availableModifiers?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availablePositions: Array<InputMaybe<Scalars["String"]>>;
  criticality: Scalars["Int"];
  name: Scalars["String"];
  zIndex: Scalars["String"];
}

/** Allow manipulating the relationship between the types 'HES_Note_E' and 'USR_User' using the field 'HES_Note_E.createdBy'. */
export interface HES_Note_ECreatedByRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
}

/** Allow manipulating the relationship between the types 'HES_Note_E' and 'USR_User' using the field 'HES_Note_E.editedBy'. */
export interface HES_Note_EEditedByRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
  /** If true, disconnects this document from 'USR_User' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

/** 'HES_Note_E' input values */
export interface HES_Note_EInput {
  createdAt?: InputMaybe<Scalars["Time"]>;
  createdBy: Scalars["ID"];
  deletedAt?: InputMaybe<Scalars["Time"]>;
  description: Scalars["String"];
  editedAt?: InputMaybe<Scalars["Time"]>;
  editedBy?: InputMaybe<Scalars["ID"]>;
}

export enum Locale {
  DE = "DE",
  EN = "EN",
}

export enum ORC_History {
  CREATED_AT = "CREATED_AT",
  CREATED_BY = "CREATED_BY",
  DELETED_AT = "DELETED_AT",
  DELETED_BY = "DELETED_BY",
  UPDATED_AT = "UPDATED_AT",
  UPDATED_BY = "UPDATED_BY",
}

/** Allow manipulating the relationship between the types 'ORC_History_E' and 'USR_User' using the field 'ORC_History_E.createdBy'. */
export interface ORC_History_ECreatedByRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
}

/** Allow manipulating the relationship between the types 'ORC_History_E' and 'USR_User' using the field 'ORC_History_E.deletedBy'. */
export interface ORC_History_EDeletedByRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
  /** If true, disconnects this document from 'USR_User' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

/** 'ORC_History_E' input values */
export interface ORC_History_EInput {
  createdAt: Scalars["Time"];
  createdBy: Scalars["ID"];
  deletedAt?: InputMaybe<Scalars["Time"]>;
  deletedBy?: InputMaybe<Scalars["ID"]>;
  updatedAt?: InputMaybe<Scalars["Time"]>;
  updatedBy?: InputMaybe<Scalars["ID"]>;
}

/** Allow manipulating the relationship between the types 'ORC_History_E' and 'USR_User' using the field 'ORC_History_E.updatedBy'. */
export interface ORC_History_EUpdatedByRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
  /** If true, disconnects this document from 'USR_User' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

/** 'CLS_Address_E' input values */
export interface PartialUpdateCLS_Address_EInput {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
  streetNo?: InputMaybe<Scalars["String"]>;
}

/** 'CLS_AssignedOrganizationalUnit' input values */
export interface PartialUpdateCLS_AssignedOrganizationalUnitInput {
  organizationalUnits?: InputMaybe<
    Array<InputMaybe<PartialUpdateCLS_OrganizationalUnits_EInput>>
  >;
  tenant?: InputMaybe<CLS_AssignedOrganizationalUnitTenantRelation>;
  user?: InputMaybe<CLS_AssignedOrganizationalUnitUserRelation>;
}

/** 'CLS_InsuranceAlliance' input values */
export interface PartialUpdateCLS_InsuranceAllianceInput {
  address?: InputMaybe<PartialUpdateCLS_Address_EInput>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
}

/** 'CLS_LegalEntityMasterData_E' input values */
export interface PartialUpdateCLS_LegalEntityMasterData_EInput {
  insuranceAlliance?: InputMaybe<Scalars["ID"]>;
  settlementNumber?: InputMaybe<Scalars["String"]>;
  taxID?: InputMaybe<Scalars["String"]>;
}

/** 'CLS_OrganizationalUnit' input values */
export interface PartialUpdateCLS_OrganizationalUnitInput {
  address?: InputMaybe<PartialUpdateCLS_Address_EInput>;
  childOrganizationalUnits?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  isLegalEntity?: InputMaybe<Scalars["Boolean"]>;
  legalEntityMasterData?: InputMaybe<PartialUpdateCLS_LegalEntityMasterData_EInput>;
  name?: InputMaybe<Scalars["String"]>;
  parentOrganizationalUnit?: InputMaybe<CLS_OrganizationalUnitParentOrganizationalUnitRelation>;
  patientServing?: InputMaybe<CLS_PatientServing>;
  phone?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<CLS_Type>;
}

/** 'CLS_OrganizationalUnits_E' input values */
export interface PartialUpdateCLS_OrganizationalUnits_EInput {
  auth0InvitationId?: InputMaybe<Scalars["String"]>;
  organizationalUnit?: InputMaybe<Scalars["ID"]>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
}

/** 'CLS_Role' input values */
export interface PartialUpdateCLS_RoleInput {
  auth0Id?: InputMaybe<Scalars["String"]>;
  organizationalUnitE?: InputMaybe<PartialUpdateCLS_OrganizationalUnits_EInput>;
  type?: InputMaybe<CLS_RoleType>;
}

/** 'HES_DentalStatus' input values */
export interface PartialUpdateHES_DentalStatusInput {
  createdAt?: InputMaybe<Scalars["Time"]>;
  createdBy?: InputMaybe<HES_DentalStatusCreatedByRelation>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  editedAt?: InputMaybe<Scalars["Time"]>;
  editedBy?: InputMaybe<HES_DentalStatusEditedByRelation>;
  findings?: InputMaybe<Array<InputMaybe<PartialUpdateHES_Findings_EInput>>>;
  patient?: InputMaybe<HES_DentalStatusPatientRelation>;
}

/** 'HES_Findings_E' input values */
export interface PartialUpdateHES_Findings_EInput {
  area?: InputMaybe<Scalars["String"]>;
  areaPrefixes?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  material?: InputMaybe<Scalars["String"]>;
  medicalFinding?: InputMaybe<Scalars["ID"]>;
  modifiers?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  note?: InputMaybe<PartialUpdateHES_Note_EInput>;
  position?: InputMaybe<Scalars["String"]>;
  values?: InputMaybe<Scalars["String"]>;
}

/** 'HES_MedicalFinding' input values */
export interface PartialUpdateHES_MedicalFindingInput {
  airtableId?: InputMaybe<Scalars["String"]>;
  availableAreas?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availableLocations?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availableMaterials?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availableModifiers?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availablePositions?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  criticality?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  zIndex?: InputMaybe<Scalars["String"]>;
}

/** 'HES_Note_E' input values */
export interface PartialUpdateHES_Note_EInput {
  createdAt?: InputMaybe<Scalars["Time"]>;
  createdBy?: InputMaybe<Scalars["ID"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  description?: InputMaybe<Scalars["String"]>;
  editedAt?: InputMaybe<Scalars["Time"]>;
  editedBy?: InputMaybe<Scalars["ID"]>;
}

/** 'ORC_History_E' input values */
export interface PartialUpdateORC_History_EInput {
  createdAt?: InputMaybe<Scalars["Time"]>;
  createdBy?: InputMaybe<Scalars["ID"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  deletedBy?: InputMaybe<Scalars["ID"]>;
  updatedAt?: InputMaybe<Scalars["Time"]>;
  updatedBy?: InputMaybe<Scalars["ID"]>;
}

/** 'TRP_TreatmentPlans' input values */
export interface PartialUpdateTRP_TreatmentPlansInput {
  history?: InputMaybe<PartialUpdateORC_History_EInput>;
  name?: InputMaybe<Scalars["String"]>;
  patient?: InputMaybe<TRP_TreatmentPlansPatientRelation>;
  treatments?: InputMaybe<
    Array<InputMaybe<PartialUpdateTRP_Treatments_EInput>>
  >;
}

/** 'TRP_Treatments' input values */
export interface PartialUpdateTRP_TreatmentsInput {
  airtableId?: InputMaybe<Scalars["String"]>;
  availableAreas?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  availablePositions?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  depth?: InputMaybe<Depth>;
  localizations?: InputMaybe<
    Array<InputMaybe<PartialUpdateTRP_Treatments_Localizations_EInput>>
  >;
  name?: InputMaybe<Scalars["String"]>;
}

/** 'TRP_Treatments_E' input values */
export interface PartialUpdateTRP_Treatments_EInput {
  area?: InputMaybe<Area>;
  position?: InputMaybe<Position>;
  treatment?: InputMaybe<Scalars["ID"]>;
}

/** 'TRP_Treatments_Localizations_E' input values */
export interface PartialUpdateTRP_Treatments_Localizations_EInput {
  locale?: InputMaybe<Locale>;
  name?: InputMaybe<Scalars["String"]>;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** 'USR_Address' input values */
export interface PartialUpdateUSR_AddressInput {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
  streetNo?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<USR_AddressUserRelation>;
}

/** 'USR_CoPaymentStatus_E' input values */
export interface PartialUpdateUSR_CoPaymentStatus_EInput {
  status?: InputMaybe<Scalars["Boolean"]>;
  validTo?: InputMaybe<Scalars["Time"]>;
}

/** 'USR_CostReimbursement_E' input values */
export interface PartialUpdateUSR_CostReimbursement_EInput {
  someField?: InputMaybe<Scalars["String"]>;
}

/** 'USR_DormantEntitlement_E' input values */
export interface PartialUpdateUSR_DormantEntitlement_EInput {
  end?: InputMaybe<Scalars["Time"]>;
  start?: InputMaybe<Scalars["Time"]>;
  type?: InputMaybe<USR_DormantType>;
}

/** 'USR_Employee' input values */
export interface PartialUpdateUSR_EmployeeInput {
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  licenceId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<USR_EmployeeStatus>;
  user?: InputMaybe<USR_EmployeeUserRelation>;
}

/** 'USR_ExaminationCertificate' input values */
export interface PartialUpdateUSR_ExaminationCertificateInput {
  /** Error codes */
  error?: InputMaybe<USR_ExaminationCertificationResult>;
  /** Available as 'pz' in examination certificate object */
  hash?: InputMaybe<Scalars["String"]>;
  insuranceContract?: InputMaybe<USR_ExaminationCertificateInsuranceContractRelation>;
  /** Time when certificate was generated */
  ts?: InputMaybe<Scalars["Time"]>;
}

/** 'USR_InsuranceCompany' input values */
export interface PartialUpdateUSR_InsuranceCompanyInput {
  country?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  /** Insurance company id */
  id?: InputMaybe<Scalars["String"]>;
  /** Name of insurance company */
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<USR_InsuranceType>;
  wop?: InputMaybe<USR_WOP>;
}

/** 'USR_InsuranceContract' input values */
export interface PartialUpdateUSR_InsuranceContractInput {
  coPaymentStatus?: InputMaybe<PartialUpdateUSR_CoPaymentStatus_EInput>;
  company?: InputMaybe<USR_InsuranceContractCompanyRelation>;
  costReimbursement?: InputMaybe<PartialUpdateUSR_CostReimbursement_EInput>;
  coverageEnd?: InputMaybe<Scalars["Time"]>;
  coverageStart?: InputMaybe<Scalars["Time"]>;
  dormantEntitlement?: InputMaybe<PartialUpdateUSR_DormantEntitlement_EInput>;
  examinationCertificates?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id?: InputMaybe<Scalars["String"]>;
  patient?: InputMaybe<USR_InsuranceContractPatientRelation>;
  selectiveContract?: InputMaybe<PartialUpdateUSR_SelectiveContract_EInput>;
  settlingCostBearer?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<USR_LegalInsuredType>;
}

/** 'USR_Patient' input values */
export interface PartialUpdateUSR_PatientInput {
  careLevel?: InputMaybe<Scalars["Int"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  familyDoctor?: InputMaybe<Scalars["String"]>;
  isWard?: InputMaybe<Scalars["Boolean"]>;
  lastAnamnesisAt?: InputMaybe<Scalars["Time"]>;
  nextAppointment?: InputMaybe<Scalars["Time"]>;
  primaryInsurance?: InputMaybe<USR_PatientPrimaryInsuranceRelation>;
  status?: InputMaybe<USR_PatientStatus>;
  user?: InputMaybe<USR_PatientUserRelation>;
}

/** 'USR_SelectiveContract_E' input values */
export interface PartialUpdateUSR_SelectiveContract_EInput {
  dentist?: InputMaybe<Scalars["Int"]>;
  medical?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<Scalars["String"]>;
}

/** 'USR_User' input values */
export interface PartialUpdateUSR_UserInput {
  addresses?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  auth0Id?: InputMaybe<Scalars["String"]>;
  birthdate?: InputMaybe<Scalars["Time"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  email?: InputMaybe<Scalars["String"]>;
  employee?: InputMaybe<USR_UserEmployeeRelation>;
  firstName?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  patient?: InputMaybe<USR_UserPatientRelation>;
  phone?: InputMaybe<Scalars["String"]>;
  profession?: InputMaybe<Scalars["String"]>;
}

export enum Position {
  TEETH__11 = "TEETH__11",
  TEETH__12 = "TEETH__12",
  TEETH__13 = "TEETH__13",
  TEETH__14 = "TEETH__14",
  TEETH__15 = "TEETH__15",
  TEETH__16 = "TEETH__16",
  TEETH__17 = "TEETH__17",
  TEETH__18 = "TEETH__18",
  TEETH__21 = "TEETH__21",
  TEETH__22 = "TEETH__22",
  TEETH__23 = "TEETH__23",
  TEETH__24 = "TEETH__24",
  TEETH__25 = "TEETH__25",
  TEETH__26 = "TEETH__26",
  TEETH__27 = "TEETH__27",
  TEETH__28 = "TEETH__28",
  TEETH__31 = "TEETH__31",
  TEETH__32 = "TEETH__32",
  TEETH__33 = "TEETH__33",
  TEETH__34 = "TEETH__34",
  TEETH__35 = "TEETH__35",
  TEETH__36 = "TEETH__36",
  TEETH__37 = "TEETH__37",
  TEETH__38 = "TEETH__38",
  TEETH__41 = "TEETH__41",
  TEETH__42 = "TEETH__42",
  TEETH__43 = "TEETH__43",
  TEETH__44 = "TEETH__44",
  TEETH__45 = "TEETH__45",
  TEETH__46 = "TEETH__46",
  TEETH__47 = "TEETH__47",
  TEETH__48 = "TEETH__48",
}

export interface TRP_AddTreatmentsToPlan_Data_Input {
  history: TRP_AddTreatmentsToPlan_History_Input;
  name: Scalars["String"];
  patient: Scalars["ID"];
  treatments?: InputMaybe<Array<InputMaybe<TRP_Treatments_EInput>>>;
}

export interface TRP_AddTreatmentsToPlan_History_Input {
  createdBy: Scalars["ID"];
}

/** 'TRP_TreatmentPlans' input values */
export interface TRP_TreatmentPlansInput {
  history: ORC_History_EInput;
  name: Scalars["String"];
  patient?: InputMaybe<TRP_TreatmentPlansPatientRelation>;
  treatments?: InputMaybe<Array<InputMaybe<TRP_Treatments_EInput>>>;
}

/** Allow manipulating the relationship between the types 'TRP_TreatmentPlans' and 'USR_User' using the field 'TRP_TreatmentPlans.patient'. */
export interface TRP_TreatmentPlansPatientRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
}

/** 'TRP_Treatments' input values */
export interface TRP_TreatmentsInput {
  airtableId: Scalars["String"];
  availableAreas: Array<InputMaybe<Scalars["String"]>>;
  availablePositions: Array<InputMaybe<Scalars["String"]>>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  depth: Depth;
  localizations: Array<InputMaybe<TRP_Treatments_Localizations_EInput>>;
  name: Scalars["String"];
}

/** 'TRP_Treatments_E' input values */
export interface TRP_Treatments_EInput {
  area: Area;
  position: Position;
  treatment: Scalars["ID"];
}

/** Allow manipulating the relationship between the types 'TRP_Treatments_E' and 'TRP_Treatments' using the field 'TRP_Treatments_E.treatment'. */
export interface TRP_Treatments_ETreatmentRelation {
  /** Connect a document of type 'TRP_Treatments' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'TRP_Treatments' and associate it with the current document. */
  create?: InputMaybe<TRP_TreatmentsInput>;
}

/** 'TRP_Treatments_Localizations_E' input values */
export interface TRP_Treatments_Localizations_EInput {
  locale: Locale;
  name: Scalars["String"];
  synonyms?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** 'USR_Address' input values */
export interface USR_AddressInput {
  city: Scalars["String"];
  country: Scalars["String"];
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  postalCode: Scalars["String"];
  street: Scalars["String"];
  streetNo: Scalars["String"];
  user?: InputMaybe<USR_AddressUserRelation>;
}

/** Allow manipulating the relationship between the types 'USR_Address' and 'USR_User' using the field 'USR_Address.user'. */
export interface USR_AddressUserRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
}

export interface USR_Address_Input {
  city: Scalars["String"];
  country: Scalars["String"];
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  postalCode: Scalars["String"];
  street: Scalars["String"];
  streetNo: Scalars["String"];
  user: USR_User_Input;
}

/** 'USR_CoPaymentStatus_E' input values */
export interface USR_CoPaymentStatus_EInput {
  status: Scalars["Boolean"];
  validTo?: InputMaybe<Scalars["Time"]>;
}

export interface USR_CoPaymentStatus_Input_E {
  status: Scalars["Boolean"];
  validTo?: InputMaybe<Scalars["Time"]>;
}

/** 'USR_CostReimbursement_E' input values */
export interface USR_CostReimbursement_EInput {
  someField?: InputMaybe<Scalars["String"]>;
}

export interface USR_CostReimbursement_Input_E {
  someField?: InputMaybe<Scalars["String"]>;
}

/** 'USR_DormantEntitlement_E' input values */
export interface USR_DormantEntitlement_EInput {
  end?: InputMaybe<Scalars["Time"]>;
  start?: InputMaybe<Scalars["Time"]>;
  type?: InputMaybe<USR_DormantType>;
}

export interface USR_DormantEntitlement_Input_E {
  end?: InputMaybe<Scalars["Time"]>;
  start?: InputMaybe<Scalars["Time"]>;
  type?: InputMaybe<USR_DormantType>;
}

export enum USR_DormantType {
  /** Code: 1 */
  COMPLETE = "COMPLETE",
  /** Code: 2 */
  PARTIAL = "PARTIAL",
}

/** 'USR_Employee' input values */
export interface USR_EmployeeInput {
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  licenceId?: InputMaybe<Scalars["String"]>;
  status: USR_EmployeeStatus;
  user?: InputMaybe<USR_EmployeeUserRelation>;
}

export enum USR_EmployeeStatus {
  APPROVED = "APPROVED",
  DEACTIVATED = "DEACTIVATED",
  PENDING = "PENDING",
}

/** Allow manipulating the relationship between the types 'USR_Employee' and 'USR_User' using the field 'USR_Employee.user'. */
export interface USR_EmployeeUserRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
  /** If true, disconnects this document from 'USR_User' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

export interface USR_Employee_Input {
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  licenceId?: InputMaybe<Scalars["String"]>;
  status: USR_EmployeeStatus;
  user: USR_User_Input;
}

export interface USR_Employee_Update_Input {
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  licenceId?: InputMaybe<Scalars["String"]>;
  status: USR_EmployeeStatus;
  user: USR_User_Input;
}

/** 'USR_ExaminationCertificate' input values */
export interface USR_ExaminationCertificateInput {
  /** Error codes */
  error?: InputMaybe<USR_ExaminationCertificationResult>;
  /** Available as 'pz' in examination certificate object */
  hash?: InputMaybe<Scalars["String"]>;
  insuranceContract?: InputMaybe<USR_ExaminationCertificateInsuranceContractRelation>;
  /** Time when certificate was generated */
  ts?: InputMaybe<Scalars["Time"]>;
}

/** Allow manipulating the relationship between the types 'USR_ExaminationCertificate' and 'USR_InsuranceContract' using the field 'USR_ExaminationCertificate.insuranceContract'. */
export interface USR_ExaminationCertificateInsuranceContractRelation {
  /** Connect a document of type 'USR_InsuranceContract' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_InsuranceContract' and associate it with the current document. */
  create?: InputMaybe<USR_InsuranceContractInput>;
  /** If true, disconnects this document from 'USR_InsuranceContract' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

export interface USR_ExaminationCertificate_Input {
  /** Error codes */
  error?: InputMaybe<USR_ExaminationCertificationResult>;
  /** Available as 'pz' in examination certificate object */
  hash?: InputMaybe<Scalars["String"]>;
  insuranceContract?: InputMaybe<USR_InsuranceContract_Input>;
  /** Time when certificate was generated */
  ts?: InputMaybe<Scalars["Time"]>;
}

export enum USR_ExaminationCertificationResult {
  /** Code: 4 */
  AUTHENTICATION_CERTIFICATE_NOT_VALID = "AUTHENTICATION_CERTIFICATE_NOT_VALID",
  /**
   * Code: 3
   * Update orders for the eGK could not be successfully determined or executed, because e.g. the specialist service of the is not available
   */
  NO_ONLINE_CONNECTION = "NO_ONLINE_CONNECTION",
  /**
   * Code: 6
   * maximum offline period of the connector exceeded
   */
  REQUEST_TIMEOUT = "REQUEST_TIMEOUT",
  /**
   * Code: 5
   * Online verification of the certificate is not technically possible
   */
  UNSUPPORTED_CERTIFICATE = "UNSUPPORTED_CERTIFICATE",
  /**
   * Code: 2
   * Data on your insurance card is already up to date with insurance company server
   */
  UPDATE_NOT_REQUIRED = "UPDATE_NOT_REQUIRED",
  /**
   * Code: 1
   * Update successful with latest data from insurance company's server
   */
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/** 'USR_InsuranceCompany' input values */
export interface USR_InsuranceCompanyInput {
  country?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  /** Insurance company id */
  id: Scalars["String"];
  /** Name of insurance company */
  name: Scalars["String"];
  type: USR_InsuranceType;
  wop: USR_WOP;
}

export interface USR_InsuranceCompany_Input {
  country?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  /** Insurance company id */
  id: Scalars["String"];
  /** Name of insurance company */
  name: Scalars["String"];
  type: USR_InsuranceType;
  wop: USR_WOP;
}

/** Allow manipulating the relationship between the types 'USR_InsuranceContract' and 'USR_InsuranceCompany' using the field 'USR_InsuranceContract.company'. */
export interface USR_InsuranceContractCompanyRelation {
  /** Connect a document of type 'USR_InsuranceCompany' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_InsuranceCompany' and associate it with the current document. */
  create?: InputMaybe<USR_InsuranceCompanyInput>;
}

/** 'USR_InsuranceContract' input values */
export interface USR_InsuranceContractInput {
  coPaymentStatus?: InputMaybe<USR_CoPaymentStatus_EInput>;
  company?: InputMaybe<USR_InsuranceContractCompanyRelation>;
  costReimbursement?: InputMaybe<USR_CostReimbursement_EInput>;
  coverageEnd?: InputMaybe<Scalars["Time"]>;
  coverageStart?: InputMaybe<Scalars["Time"]>;
  dormantEntitlement?: InputMaybe<USR_DormantEntitlement_EInput>;
  examinationCertificates?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id: Scalars["String"];
  patient?: InputMaybe<USR_InsuranceContractPatientRelation>;
  selectiveContract?: InputMaybe<USR_SelectiveContract_EInput>;
  settlingCostBearer?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<USR_LegalInsuredType>;
}

/** Allow manipulating the relationship between the types 'USR_InsuranceContract' and 'USR_Patient' using the field 'USR_InsuranceContract.patient'. */
export interface USR_InsuranceContractPatientRelation {
  /** Connect a document of type 'USR_Patient' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_Patient' and associate it with the current document. */
  create?: InputMaybe<USR_PatientInput>;
  /** If true, disconnects this document from 'USR_Patient' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

export interface USR_InsuranceContract_Input {
  coPaymentStatus?: InputMaybe<USR_CoPaymentStatus_Input_E>;
  company: USR_InsuranceCompany_Input;
  costReimbursement?: InputMaybe<USR_CostReimbursement_Input_E>;
  coverageEnd?: InputMaybe<Scalars["Time"]>;
  coverageStart?: InputMaybe<Scalars["Time"]>;
  dormantEntitlement?: InputMaybe<USR_DormantEntitlement_Input_E>;
  examinationCertificates?: InputMaybe<
    Array<InputMaybe<USR_ExaminationCertificate_Input>>
  >;
  id: Scalars["String"];
  patient: USR_Patient_Input;
  selectiveContract?: InputMaybe<USR_SelectiveContract_Input_E>;
  settlingCostBearer?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<USR_LegalInsuredType>;
}

export enum USR_InsuranceType {
  LEGAL = "LEGAL",
  PRIVATE = "PRIVATE",
}

export enum USR_LegalInsuredType {
  /** Insurance contract code: 3 */
  FAMILY_INSURED = "FAMILY_INSURED",
  /** Insurance contract code: 1 */
  MEMBER = "MEMBER",
  /** Insurance contract code: 5 */
  PENSIONERS_AND_FAMILY = "PENSIONERS_AND_FAMILY",
}

/** 'USR_Patient' input values */
export interface USR_PatientInput {
  careLevel?: InputMaybe<Scalars["Int"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  familyDoctor?: InputMaybe<Scalars["String"]>;
  isWard?: InputMaybe<Scalars["Boolean"]>;
  lastAnamnesisAt?: InputMaybe<Scalars["Time"]>;
  nextAppointment?: InputMaybe<Scalars["Time"]>;
  primaryInsurance?: InputMaybe<USR_PatientPrimaryInsuranceRelation>;
  status: USR_PatientStatus;
  user?: InputMaybe<USR_PatientUserRelation>;
}

/** Allow manipulating the relationship between the types 'USR_Patient' and 'USR_InsuranceContract' using the field 'USR_Patient.primaryInsurance'. */
export interface USR_PatientPrimaryInsuranceRelation {
  /** Connect a document of type 'USR_InsuranceContract' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_InsuranceContract' and associate it with the current document. */
  create?: InputMaybe<USR_InsuranceContractInput>;
}

export enum USR_PatientStatus {
  NOTIFIED_DELAY = "NOTIFIED_DELAY",
  NOT_ARRIVED = "NOT_ARRIVED",
  NOT_PRESENT = "NOT_PRESENT",
  TREATMENT = "TREATMENT",
  WAITROOM = "WAITROOM",
}

/** Allow manipulating the relationship between the types 'USR_Patient' and 'USR_User' using the field 'USR_Patient.user'. */
export interface USR_PatientUserRelation {
  /** Connect a document of type 'USR_User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_User' and associate it with the current document. */
  create?: InputMaybe<USR_UserInput>;
  /** If true, disconnects this document from 'USR_User' */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

export interface USR_Patient_Input {
  careLevel?: InputMaybe<Scalars["Int"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  familyDoctor?: InputMaybe<Scalars["String"]>;
  isWard?: InputMaybe<Scalars["Boolean"]>;
  lastAnamnesisAt?: InputMaybe<Scalars["Time"]>;
  nextAppointment?: InputMaybe<Scalars["Time"]>;
  primaryInsurance?: InputMaybe<USR_InsuranceContract_Input>;
  status: USR_PatientStatus;
  user: USR_User_Input;
}

export interface USR_Patient_Update_Input {
  careLevel?: InputMaybe<Scalars["Int"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  familyDoctor?: InputMaybe<Scalars["String"]>;
  isWard?: InputMaybe<Scalars["Boolean"]>;
  lastAnamnesisAt?: InputMaybe<Scalars["Time"]>;
  nextAppointment?: InputMaybe<Scalars["Time"]>;
  primaryInsurance?: InputMaybe<USR_InsuranceContract_Input>;
  status: USR_PatientStatus;
  user: USR_User_Input;
}

/** 'USR_SelectiveContract_E' input values */
export interface USR_SelectiveContract_EInput {
  dentist?: InputMaybe<Scalars["Int"]>;
  medical?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<Scalars["String"]>;
}

export interface USR_SelectiveContract_Input_E {
  dentist?: InputMaybe<Scalars["Int"]>;
  medical?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<Scalars["String"]>;
}

/** Allow manipulating the relationship between the types 'USR_User' and 'USR_Employee' using the field 'USR_User.employee'. */
export interface USR_UserEmployeeRelation {
  /** Connect a document of type 'USR_Employee' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_Employee' and associate it with the current document. */
  create?: InputMaybe<USR_EmployeeInput>;
}

/** 'USR_User' input values */
export interface USR_UserInput {
  addresses?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  auth0Id?: InputMaybe<Scalars["String"]>;
  birthdate?: InputMaybe<Scalars["Time"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  email?: InputMaybe<Scalars["String"]>;
  employee?: InputMaybe<USR_UserEmployeeRelation>;
  firstName: Scalars["String"];
  gender?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName: Scalars["String"];
  patient?: InputMaybe<USR_UserPatientRelation>;
  phone?: InputMaybe<Scalars["String"]>;
  profession?: InputMaybe<Scalars["String"]>;
}

/** Allow manipulating the relationship between the types 'USR_User' and 'USR_Patient' using the field 'USR_User.patient'. */
export interface USR_UserPatientRelation {
  /** Connect a document of type 'USR_Patient' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'USR_Patient' and associate it with the current document. */
  create?: InputMaybe<USR_PatientInput>;
}

export interface USR_User_Input {
  addresses?: InputMaybe<Array<InputMaybe<USR_Address_Input>>>;
  auth0Id?: InputMaybe<Scalars["String"]>;
  birthdate?: InputMaybe<Scalars["Time"]>;
  createdAt?: InputMaybe<Scalars["Time"]>;
  deletedAt?: InputMaybe<Scalars["Time"]>;
  email?: InputMaybe<Scalars["String"]>;
  employee?: InputMaybe<USR_Employee_Input>;
  firstName: Scalars["String"];
  gender?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName: Scalars["String"];
  patient?: InputMaybe<USR_Patient_Input>;
  phone?: InputMaybe<Scalars["String"]>;
  profession?: InputMaybe<Scalars["String"]>;
}

/** Residence registration number */
export enum USR_WOP {
  /** Code: 52 */
  BADEN_WUERTTEMBERG = "BADEN_WUERTTEMBERG",
  /** Code: 71 */
  BAYERNS = "BAYERNS",
  /** Code: 72 */
  BERLIN = "BERLIN",
  /** Code: 02 */
  HAMBURG = "HAMBURG",
  /** Code: 46 */
  HESSEN = "HESSEN",
  /** Code: 83 */
  LAND_BRANDENBURG = "LAND_BRANDENBURG",
  /** Code: 03 */
  LAND_BREMEN = "LAND_BREMEN",
  /** Code: 78 */
  MECKLENBURG_VORPOMMERN = "MECKLENBURG_VORPOMMERN",
  /** Code: 17 */
  NIEDERSACHSEN = "NIEDERSACHSEN",
  /** Code: 38 */
  NORDRHEIN = "NORDRHEIN",
  /** Code: 51 */
  RHEINLAND_PFALZ = "RHEINLAND_PFALZ",
  /** Code: 73 */
  SAARLAND = "SAARLAND",
  /** Code: 98 */
  SACHSEN = "SACHSEN",
  /** Code: 88 */
  SACHSEN_ANHALT = "SACHSEN_ANHALT",
  /** Code: 01 */
  SCHLESWIG_HOLSTEIN = "SCHLESWIG_HOLSTEIN",
  /** Code: 93 */
  THUERINGEN = "THUERINGEN",
  /** Code: 20 */
  WESTFALEN_LIPPE = "WESTFALEN_LIPPE",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Area: true,
  Boolean: true,
  CLS_PatientServing: true,
  CLS_RoleType: true,
  CLS_Type: true,
  Date: true,
  Depth: true,
  ID: true,
  Int: true,
  Locale: true,
  Long: true,
  ORC_History: true,
  Position: true,
  String: true,
  Time: true,
  USR_DormantType: true,
  USR_EmployeeStatus: true,
  USR_ExaminationCertificationResult: true,
  USR_InsuranceType: true,
  USR_LegalInsuredType: true,
  USR_PatientStatus: true,
  USR_WOP: true,
};
export const generatedSchema = {
  CLS_Address_E: {
    __typename: { __type: "String!" },
    city: { __type: "String!" },
    country: { __type: "String!" },
    postalCode: { __type: "String!" },
    street: { __type: "String!" },
    streetNo: { __type: "String!" },
  },
  CLS_Address_EInput: {
    city: { __type: "String!" },
    country: { __type: "String!" },
    postalCode: { __type: "String!" },
    street: { __type: "String!" },
    streetNo: { __type: "String!" },
  },
  CLS_Address_Input_E: {
    city: { __type: "String!" },
    country: { __type: "String!" },
    postalCode: { __type: "String!" },
    street: { __type: "String!" },
    streetNo: { __type: "String!" },
  },
  CLS_AssignedOrganizationalUnit: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    organizationalUnits: { __type: "[CLS_OrganizationalUnits_E]" },
    tenant: { __type: "CLS_OrganizationalUnit" },
    user: { __type: "USR_User" },
  },
  CLS_AssignedOrganizationalUnitInput: {
    organizationalUnits: { __type: "[CLS_OrganizationalUnits_EInput]" },
    tenant: { __type: "CLS_AssignedOrganizationalUnitTenantRelation" },
    user: { __type: "CLS_AssignedOrganizationalUnitUserRelation" },
  },
  CLS_AssignedOrganizationalUnitTenantRelation: {
    connect: { __type: "ID" },
    create: { __type: "CLS_OrganizationalUnitInput" },
    disconnect: { __type: "Boolean" },
  },
  CLS_AssignedOrganizationalUnitUserRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
    disconnect: { __type: "Boolean" },
  },
  CLS_InsuranceAlliance: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    address: { __type: "CLS_Address_E" },
    email: { __type: "String" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    phone: { __type: "String" },
  },
  CLS_InsuranceAllianceInput: {
    address: { __type: "CLS_Address_EInput" },
    email: { __type: "String" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    phone: { __type: "String" },
  },
  CLS_InsuranceAlliance_Input: {
    address: { __type: "CLS_Address_Input_E" },
    email: { __type: "String" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    phone: { __type: "String" },
  },
  CLS_LegalEntityMasterData_E: {
    __typename: { __type: "String!" },
    insuranceAlliance: { __type: "CLS_InsuranceAlliance" },
    settlementNumber: { __type: "String" },
    taxID: { __type: "String" },
  },
  CLS_LegalEntityMasterData_EInput: {
    insuranceAlliance: { __type: "ID" },
    settlementNumber: { __type: "String" },
    taxID: { __type: "String" },
  },
  CLS_LegalEntityMasterData_EInsuranceAllianceRelation: {
    connect: { __type: "ID" },
    create: { __type: "CLS_InsuranceAllianceInput" },
    disconnect: { __type: "Boolean" },
  },
  CLS_LegalEntityMasterData_Input_E: {
    insuranceAlliance: { __type: "CLS_InsuranceAlliance_Input" },
    settlementNumber: { __type: "String" },
    taxID: { __type: "String" },
  },
  CLS_OrganizationalUnit: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    address: { __type: "CLS_Address_E" },
    childOrganizationalUnits: { __type: "String" },
    email: { __type: "String" },
    isLegalEntity: { __type: "Boolean!" },
    legalEntityMasterData: { __type: "CLS_LegalEntityMasterData_E" },
    name: { __type: "String!" },
    parentOrganizationalUnit: { __type: "CLS_OrganizationalUnit" },
    patientServing: { __type: "CLS_PatientServing" },
    phone: { __type: "String" },
    type: { __type: "CLS_Type" },
  },
  CLS_OrganizationalUnitInput: {
    address: { __type: "CLS_Address_EInput" },
    childOrganizationalUnits: { __type: "String" },
    email: { __type: "String" },
    isLegalEntity: { __type: "Boolean!" },
    legalEntityMasterData: { __type: "CLS_LegalEntityMasterData_EInput" },
    name: { __type: "String!" },
    parentOrganizationalUnit: {
      __type: "CLS_OrganizationalUnitParentOrganizationalUnitRelation",
    },
    patientServing: { __type: "CLS_PatientServing" },
    phone: { __type: "String" },
    type: { __type: "CLS_Type" },
  },
  CLS_OrganizationalUnitPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[CLS_OrganizationalUnit]!" },
  },
  CLS_OrganizationalUnitParentOrganizationalUnitRelation: {
    connect: { __type: "ID" },
    create: { __type: "CLS_OrganizationalUnitInput" },
    disconnect: { __type: "Boolean" },
  },
  CLS_OrganizationalUnit_Input: {
    address: { __type: "CLS_Address_Input_E" },
    childOrganizationalUnits: { __type: "String" },
    email: { __type: "String" },
    isLegalEntity: { __type: "Boolean!" },
    legalEntityMasterData: { __type: "CLS_LegalEntityMasterData_Input_E" },
    name: { __type: "String!" },
    parentOrganizationalUnit: { __type: "CLS_OrganizationalUnit_Input" },
    patientServing: { __type: "CLS_PatientServing" },
    phone: { __type: "String" },
    type: { __type: "CLS_Type" },
  },
  CLS_OrganizationalUnits_E: {
    __typename: { __type: "String!" },
    auth0InvitationId: { __type: "String" },
    organizationalUnit: { __type: "CLS_OrganizationalUnit" },
    roles: { __type: "[CLS_Role]" },
  },
  CLS_OrganizationalUnits_EInput: {
    auth0InvitationId: { __type: "String" },
    organizationalUnit: { __type: "ID" },
    roles: { __type: "[ID]" },
  },
  CLS_OrganizationalUnits_EOrganizationalUnitRelation: {
    connect: { __type: "ID" },
    create: { __type: "CLS_OrganizationalUnitInput" },
    disconnect: { __type: "Boolean" },
  },
  CLS_Role: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    auth0Id: { __type: "String!" },
    organizationalUnitE: { __type: "CLS_OrganizationalUnits_E" },
    type: { __type: "CLS_RoleType!" },
  },
  CLS_RoleInput: {
    auth0Id: { __type: "String!" },
    organizationalUnitE: { __type: "CLS_OrganizationalUnits_EInput" },
    type: { __type: "CLS_RoleType!" },
  },
  CLS_RolePage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[CLS_Role]!" },
  },
  HES_AddMedicalFindingToDentalStatusInput: {
    createdBy: { __type: "ID!" },
    findings: { __type: "[HES_Findings_EInput]!" },
    patient: { __type: "ID!" },
  },
  HES_CreateMedicalFindingInput: {
    airtableId: { __type: "String!" },
    availableAreas: { __type: "[String]!" },
    availableMaterials: { __type: "[String]" },
    availablePositions: { __type: "[String]!" },
    complements: { __type: "[ID]" },
    criticality: { __type: "Int" },
    name: { __type: "String!" },
    replaces: { __type: "[ID]" },
    zIndex: { __type: "String!" },
  },
  HES_DentalStatus: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    createdAt: { __type: "Time" },
    createdBy: { __type: "USR_User!" },
    deletedAt: { __type: "Time" },
    editedAt: { __type: "Time" },
    editedBy: { __type: "USR_User" },
    findings: { __type: "[HES_Findings_E]!" },
    patient: { __type: "USR_User!" },
  },
  HES_DentalStatusCreatedByRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
  },
  HES_DentalStatusEditedByRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
    disconnect: { __type: "Boolean" },
  },
  HES_DentalStatusInput: {
    createdAt: { __type: "Time" },
    createdBy: { __type: "HES_DentalStatusCreatedByRelation" },
    deletedAt: { __type: "Time" },
    editedAt: { __type: "Time" },
    editedBy: { __type: "HES_DentalStatusEditedByRelation" },
    findings: { __type: "[HES_Findings_EInput]!" },
    patient: { __type: "HES_DentalStatusPatientRelation" },
  },
  HES_DentalStatusPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[HES_DentalStatus]!" },
  },
  HES_DentalStatusPatientRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
  },
  HES_Findings_E: {
    __typename: { __type: "String!" },
    area: { __type: "String" },
    areaPrefixes: { __type: "[String]" },
    material: { __type: "String" },
    medicalFinding: { __type: "HES_MedicalFinding!" },
    modifiers: { __type: "[String]" },
    note: { __type: "HES_Note_E" },
    position: { __type: "String" },
    values: { __type: "String" },
  },
  HES_Findings_EInput: {
    area: { __type: "String" },
    areaPrefixes: { __type: "[String]" },
    material: { __type: "String" },
    medicalFinding: { __type: "ID!" },
    modifiers: { __type: "[String]" },
    note: { __type: "HES_Note_EInput" },
    position: { __type: "String" },
    values: { __type: "String" },
  },
  HES_Findings_EMedicalFindingRelation: {
    connect: { __type: "ID" },
    create: { __type: "HES_MedicalFindingInput" },
  },
  HES_MedicalFinding: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    airtableId: { __type: "String" },
    availableAreas: { __type: "[String]" },
    availableLocations: { __type: "[String]!" },
    availableMaterials: { __type: "[String]" },
    availableModifiers: { __type: "[String]" },
    availablePositions: { __type: "[String]!" },
    criticality: { __type: "Int!" },
    name: { __type: "String!" },
    zIndex: { __type: "String!" },
  },
  HES_MedicalFindingInput: {
    airtableId: { __type: "String" },
    availableAreas: { __type: "[String]" },
    availableLocations: { __type: "[String]!" },
    availableMaterials: { __type: "[String]" },
    availableModifiers: { __type: "[String]" },
    availablePositions: { __type: "[String]!" },
    criticality: { __type: "Int!" },
    name: { __type: "String!" },
    zIndex: { __type: "String!" },
  },
  HES_MedicalFindingPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[HES_MedicalFinding]!" },
  },
  HES_Note_E: {
    __typename: { __type: "String!" },
    createdAt: { __type: "Time" },
    createdBy: { __type: "USR_User!" },
    deletedAt: { __type: "Time" },
    description: { __type: "String!" },
    editedAt: { __type: "Time" },
    editedBy: { __type: "USR_User" },
  },
  HES_Note_ECreatedByRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
  },
  HES_Note_EEditedByRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
    disconnect: { __type: "Boolean" },
  },
  HES_Note_EInput: {
    createdAt: { __type: "Time" },
    createdBy: { __type: "ID!" },
    deletedAt: { __type: "Time" },
    description: { __type: "String!" },
    editedAt: { __type: "Time" },
    editedBy: { __type: "ID" },
  },
  ORC_History_E: {
    __typename: { __type: "String!" },
    createdAt: { __type: "Time!" },
    createdBy: { __type: "USR_User!" },
    deletedAt: { __type: "Time" },
    deletedBy: { __type: "USR_User" },
    updatedAt: { __type: "Time" },
    updatedBy: { __type: "USR_User" },
  },
  ORC_History_ECreatedByRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
  },
  ORC_History_EDeletedByRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
    disconnect: { __type: "Boolean" },
  },
  ORC_History_EInput: {
    createdAt: { __type: "Time!" },
    createdBy: { __type: "ID!" },
    deletedAt: { __type: "Time" },
    deletedBy: { __type: "ID" },
    updatedAt: { __type: "Time" },
    updatedBy: { __type: "ID" },
  },
  ORC_History_EUpdatedByRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
    disconnect: { __type: "Boolean" },
  },
  PartialUpdateCLS_Address_EInput: {
    city: { __type: "String" },
    country: { __type: "String" },
    postalCode: { __type: "String" },
    street: { __type: "String" },
    streetNo: { __type: "String" },
  },
  PartialUpdateCLS_AssignedOrganizationalUnitInput: {
    organizationalUnits: {
      __type: "[PartialUpdateCLS_OrganizationalUnits_EInput]",
    },
    tenant: { __type: "CLS_AssignedOrganizationalUnitTenantRelation" },
    user: { __type: "CLS_AssignedOrganizationalUnitUserRelation" },
  },
  PartialUpdateCLS_InsuranceAllianceInput: {
    address: { __type: "PartialUpdateCLS_Address_EInput" },
    email: { __type: "String" },
    id: { __type: "String" },
    name: { __type: "String" },
    phone: { __type: "String" },
  },
  PartialUpdateCLS_LegalEntityMasterData_EInput: {
    insuranceAlliance: { __type: "ID" },
    settlementNumber: { __type: "String" },
    taxID: { __type: "String" },
  },
  PartialUpdateCLS_OrganizationalUnitInput: {
    address: { __type: "PartialUpdateCLS_Address_EInput" },
    childOrganizationalUnits: { __type: "String" },
    email: { __type: "String" },
    isLegalEntity: { __type: "Boolean" },
    legalEntityMasterData: {
      __type: "PartialUpdateCLS_LegalEntityMasterData_EInput",
    },
    name: { __type: "String" },
    parentOrganizationalUnit: {
      __type: "CLS_OrganizationalUnitParentOrganizationalUnitRelation",
    },
    patientServing: { __type: "CLS_PatientServing" },
    phone: { __type: "String" },
    type: { __type: "CLS_Type" },
  },
  PartialUpdateCLS_OrganizationalUnits_EInput: {
    auth0InvitationId: { __type: "String" },
    organizationalUnit: { __type: "ID" },
    roles: { __type: "[ID]" },
  },
  PartialUpdateCLS_RoleInput: {
    auth0Id: { __type: "String" },
    organizationalUnitE: {
      __type: "PartialUpdateCLS_OrganizationalUnits_EInput",
    },
    type: { __type: "CLS_RoleType" },
  },
  PartialUpdateHES_DentalStatusInput: {
    createdAt: { __type: "Time" },
    createdBy: { __type: "HES_DentalStatusCreatedByRelation" },
    deletedAt: { __type: "Time" },
    editedAt: { __type: "Time" },
    editedBy: { __type: "HES_DentalStatusEditedByRelation" },
    findings: { __type: "[PartialUpdateHES_Findings_EInput]" },
    patient: { __type: "HES_DentalStatusPatientRelation" },
  },
  PartialUpdateHES_Findings_EInput: {
    area: { __type: "String" },
    areaPrefixes: { __type: "[String]" },
    material: { __type: "String" },
    medicalFinding: { __type: "ID" },
    modifiers: { __type: "[String]" },
    note: { __type: "PartialUpdateHES_Note_EInput" },
    position: { __type: "String" },
    values: { __type: "String" },
  },
  PartialUpdateHES_MedicalFindingInput: {
    airtableId: { __type: "String" },
    availableAreas: { __type: "[String]" },
    availableLocations: { __type: "[String]" },
    availableMaterials: { __type: "[String]" },
    availableModifiers: { __type: "[String]" },
    availablePositions: { __type: "[String]" },
    criticality: { __type: "Int" },
    name: { __type: "String" },
    zIndex: { __type: "String" },
  },
  PartialUpdateHES_Note_EInput: {
    createdAt: { __type: "Time" },
    createdBy: { __type: "ID" },
    deletedAt: { __type: "Time" },
    description: { __type: "String" },
    editedAt: { __type: "Time" },
    editedBy: { __type: "ID" },
  },
  PartialUpdateORC_History_EInput: {
    createdAt: { __type: "Time" },
    createdBy: { __type: "ID" },
    deletedAt: { __type: "Time" },
    deletedBy: { __type: "ID" },
    updatedAt: { __type: "Time" },
    updatedBy: { __type: "ID" },
  },
  PartialUpdateTRP_TreatmentPlansInput: {
    history: { __type: "PartialUpdateORC_History_EInput" },
    name: { __type: "String" },
    patient: { __type: "TRP_TreatmentPlansPatientRelation" },
    treatments: { __type: "[PartialUpdateTRP_Treatments_EInput]" },
  },
  PartialUpdateTRP_TreatmentsInput: {
    airtableId: { __type: "String" },
    availableAreas: { __type: "[String]" },
    availablePositions: { __type: "[String]" },
    deletedAt: { __type: "Time" },
    depth: { __type: "Depth" },
    localizations: {
      __type: "[PartialUpdateTRP_Treatments_Localizations_EInput]",
    },
    name: { __type: "String" },
  },
  PartialUpdateTRP_Treatments_EInput: {
    area: { __type: "Area" },
    position: { __type: "Position" },
    treatment: { __type: "ID" },
  },
  PartialUpdateTRP_Treatments_Localizations_EInput: {
    locale: { __type: "Locale" },
    name: { __type: "String" },
    synonyms: { __type: "[String]" },
  },
  PartialUpdateUSR_AddressInput: {
    city: { __type: "String" },
    country: { __type: "String" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    postalCode: { __type: "String" },
    street: { __type: "String" },
    streetNo: { __type: "String" },
    user: { __type: "USR_AddressUserRelation" },
  },
  PartialUpdateUSR_CoPaymentStatus_EInput: {
    status: { __type: "Boolean" },
    validTo: { __type: "Time" },
  },
  PartialUpdateUSR_CostReimbursement_EInput: {
    someField: { __type: "String" },
  },
  PartialUpdateUSR_DormantEntitlement_EInput: {
    end: { __type: "Time" },
    start: { __type: "Time" },
    type: { __type: "USR_DormantType" },
  },
  PartialUpdateUSR_EmployeeInput: {
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    licenceId: { __type: "String" },
    status: { __type: "USR_EmployeeStatus" },
    user: { __type: "USR_EmployeeUserRelation" },
  },
  PartialUpdateUSR_ExaminationCertificateInput: {
    error: { __type: "USR_ExaminationCertificationResult" },
    hash: { __type: "String" },
    insuranceContract: {
      __type: "USR_ExaminationCertificateInsuranceContractRelation",
    },
    ts: { __type: "Time" },
  },
  PartialUpdateUSR_InsuranceCompanyInput: {
    country: { __type: "String" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    id: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "USR_InsuranceType" },
    wop: { __type: "USR_WOP" },
  },
  PartialUpdateUSR_InsuranceContractInput: {
    coPaymentStatus: { __type: "PartialUpdateUSR_CoPaymentStatus_EInput" },
    company: { __type: "USR_InsuranceContractCompanyRelation" },
    costReimbursement: { __type: "PartialUpdateUSR_CostReimbursement_EInput" },
    coverageEnd: { __type: "Time" },
    coverageStart: { __type: "Time" },
    dormantEntitlement: {
      __type: "PartialUpdateUSR_DormantEntitlement_EInput",
    },
    examinationCertificates: { __type: "[ID]" },
    id: { __type: "String" },
    patient: { __type: "USR_InsuranceContractPatientRelation" },
    selectiveContract: { __type: "PartialUpdateUSR_SelectiveContract_EInput" },
    settlingCostBearer: { __type: "Int" },
    type: { __type: "USR_LegalInsuredType" },
  },
  PartialUpdateUSR_PatientInput: {
    careLevel: { __type: "Int" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    familyDoctor: { __type: "String" },
    isWard: { __type: "Boolean" },
    lastAnamnesisAt: { __type: "Time" },
    nextAppointment: { __type: "Time" },
    primaryInsurance: { __type: "USR_PatientPrimaryInsuranceRelation" },
    status: { __type: "USR_PatientStatus" },
    user: { __type: "USR_PatientUserRelation" },
  },
  PartialUpdateUSR_SelectiveContract_EInput: {
    dentist: { __type: "Int" },
    medical: { __type: "Int" },
    type: { __type: "String" },
  },
  PartialUpdateUSR_UserInput: {
    addresses: { __type: "[ID]" },
    auth0Id: { __type: "String" },
    birthdate: { __type: "Time" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    email: { __type: "String" },
    employee: { __type: "USR_UserEmployeeRelation" },
    firstName: { __type: "String" },
    gender: { __type: "String" },
    image: { __type: "String" },
    lastName: { __type: "String" },
    patient: { __type: "USR_UserPatientRelation" },
    phone: { __type: "String" },
    profession: { __type: "String" },
  },
  QueryHES_GetDentalStatusByPatientRefPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[HES_DentalStatus]!" },
  },
  QueryHES_GetMedicalFindingsPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[HES_MedicalFinding]!" },
  },
  QueryTRP_GetTreatmentPlansByPatient_GQLPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[TRP_TreatmentPlans]!" },
  },
  QueryTRP_GetTreatments_GQLPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[TRP_Treatments]!" },
  },
  QueryUSR_GetEmployeesPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[USR_Employee]!" },
  },
  QueryUSR_GetPatientsPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[USR_Patient]!" },
  },
  TRP_AddTreatmentsToPlan_Data_Input: {
    history: { __type: "TRP_AddTreatmentsToPlan_History_Input!" },
    name: { __type: "String!" },
    patient: { __type: "ID!" },
    treatments: { __type: "[TRP_Treatments_EInput]" },
  },
  TRP_AddTreatmentsToPlan_History_Input: { createdBy: { __type: "ID!" } },
  TRP_TreatmentPlans: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    history: { __type: "ORC_History_E!" },
    name: { __type: "String!" },
    patient: { __type: "USR_User!" },
    treatments: { __type: "[TRP_Treatments_E]" },
  },
  TRP_TreatmentPlansInput: {
    history: { __type: "ORC_History_EInput!" },
    name: { __type: "String!" },
    patient: { __type: "TRP_TreatmentPlansPatientRelation" },
    treatments: { __type: "[TRP_Treatments_EInput]" },
  },
  TRP_TreatmentPlansPatientRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
  },
  TRP_Treatments: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    airtableId: { __type: "String!" },
    availableAreas: { __type: "[String]!" },
    availablePositions: { __type: "[String]!" },
    deletedAt: { __type: "Time" },
    depth: { __type: "Depth!" },
    localizations: { __type: "[TRP_Treatments_Localizations_E]!" },
    name: { __type: "String!" },
  },
  TRP_TreatmentsInput: {
    airtableId: { __type: "String!" },
    availableAreas: { __type: "[String]!" },
    availablePositions: { __type: "[String]!" },
    deletedAt: { __type: "Time" },
    depth: { __type: "Depth!" },
    localizations: { __type: "[TRP_Treatments_Localizations_EInput]!" },
    name: { __type: "String!" },
  },
  TRP_Treatments_E: {
    __typename: { __type: "String!" },
    area: { __type: "Area!" },
    position: { __type: "Position!" },
    treatment: { __type: "TRP_Treatments!" },
  },
  TRP_Treatments_EInput: {
    area: { __type: "Area!" },
    position: { __type: "Position!" },
    treatment: { __type: "ID!" },
  },
  TRP_Treatments_ETreatmentRelation: {
    connect: { __type: "ID" },
    create: { __type: "TRP_TreatmentsInput" },
  },
  TRP_Treatments_Localizations_E: {
    __typename: { __type: "String!" },
    locale: { __type: "Locale!" },
    name: { __type: "String!" },
    synonyms: { __type: "[String]" },
  },
  TRP_Treatments_Localizations_EInput: {
    locale: { __type: "Locale!" },
    name: { __type: "String!" },
    synonyms: { __type: "[String]" },
  },
  USR_Address: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    city: { __type: "String!" },
    country: { __type: "String!" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    postalCode: { __type: "String!" },
    street: { __type: "String!" },
    streetNo: { __type: "String!" },
    user: { __type: "USR_User!" },
  },
  USR_AddressInput: {
    city: { __type: "String!" },
    country: { __type: "String!" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    postalCode: { __type: "String!" },
    street: { __type: "String!" },
    streetNo: { __type: "String!" },
    user: { __type: "USR_AddressUserRelation" },
  },
  USR_AddressUserRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
  },
  USR_Address_Input: {
    city: { __type: "String!" },
    country: { __type: "String!" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    postalCode: { __type: "String!" },
    street: { __type: "String!" },
    streetNo: { __type: "String!" },
    user: { __type: "USR_User_Input!" },
  },
  USR_CoPaymentStatus_E: {
    __typename: { __type: "String!" },
    status: { __type: "Boolean!" },
    validTo: { __type: "Time" },
  },
  USR_CoPaymentStatus_EInput: {
    status: { __type: "Boolean!" },
    validTo: { __type: "Time" },
  },
  USR_CoPaymentStatus_Input_E: {
    status: { __type: "Boolean!" },
    validTo: { __type: "Time" },
  },
  USR_CostReimbursement_E: {
    __typename: { __type: "String!" },
    someField: { __type: "String" },
  },
  USR_CostReimbursement_EInput: { someField: { __type: "String" } },
  USR_CostReimbursement_Input_E: { someField: { __type: "String" } },
  USR_DormantEntitlement_E: {
    __typename: { __type: "String!" },
    end: { __type: "Time" },
    start: { __type: "Time" },
    type: { __type: "USR_DormantType" },
  },
  USR_DormantEntitlement_EInput: {
    end: { __type: "Time" },
    start: { __type: "Time" },
    type: { __type: "USR_DormantType" },
  },
  USR_DormantEntitlement_Input_E: {
    end: { __type: "Time" },
    start: { __type: "Time" },
    type: { __type: "USR_DormantType" },
  },
  USR_Employee: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    licenceId: { __type: "String" },
    status: { __type: "USR_EmployeeStatus!" },
    user: { __type: "USR_User!" },
  },
  USR_EmployeeInput: {
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    licenceId: { __type: "String" },
    status: { __type: "USR_EmployeeStatus!" },
    user: { __type: "USR_EmployeeUserRelation" },
  },
  USR_EmployeeUserRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
    disconnect: { __type: "Boolean" },
  },
  USR_Employee_Input: {
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    licenceId: { __type: "String" },
    status: { __type: "USR_EmployeeStatus!" },
    user: { __type: "USR_User_Input!" },
  },
  USR_Employee_Update_Input: {
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    licenceId: { __type: "String" },
    status: { __type: "USR_EmployeeStatus!" },
    user: { __type: "USR_User_Input!" },
  },
  USR_ExaminationCertificate: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    error: { __type: "USR_ExaminationCertificationResult" },
    hash: { __type: "String" },
    insuranceContract: { __type: "USR_InsuranceContract" },
    ts: { __type: "Time" },
  },
  USR_ExaminationCertificateInput: {
    error: { __type: "USR_ExaminationCertificationResult" },
    hash: { __type: "String" },
    insuranceContract: {
      __type: "USR_ExaminationCertificateInsuranceContractRelation",
    },
    ts: { __type: "Time" },
  },
  USR_ExaminationCertificateInsuranceContractRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_InsuranceContractInput" },
    disconnect: { __type: "Boolean" },
  },
  USR_ExaminationCertificate_Input: {
    error: { __type: "USR_ExaminationCertificationResult" },
    hash: { __type: "String" },
    insuranceContract: { __type: "USR_InsuranceContract_Input" },
    ts: { __type: "Time" },
  },
  USR_InsuranceCompany: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    country: { __type: "String" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    type: { __type: "USR_InsuranceType!" },
    wop: { __type: "USR_WOP!" },
  },
  USR_InsuranceCompanyInput: {
    country: { __type: "String" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    type: { __type: "USR_InsuranceType!" },
    wop: { __type: "USR_WOP!" },
  },
  USR_InsuranceCompany_Input: {
    country: { __type: "String" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    type: { __type: "USR_InsuranceType!" },
    wop: { __type: "USR_WOP!" },
  },
  USR_InsuranceContract: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    coPaymentStatus: { __type: "USR_CoPaymentStatus_E" },
    company: { __type: "USR_InsuranceCompany!" },
    costReimbursement: { __type: "USR_CostReimbursement_E" },
    coverageEnd: { __type: "Time" },
    coverageStart: { __type: "Time" },
    dormantEntitlement: { __type: "USR_DormantEntitlement_E" },
    examinationCertificates: { __type: "[USR_ExaminationCertificate]" },
    id: { __type: "String!" },
    patient: { __type: "USR_Patient!" },
    selectiveContract: { __type: "USR_SelectiveContract_E" },
    settlingCostBearer: { __type: "Int" },
    type: { __type: "USR_LegalInsuredType" },
  },
  USR_InsuranceContractCompanyRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_InsuranceCompanyInput" },
  },
  USR_InsuranceContractInput: {
    coPaymentStatus: { __type: "USR_CoPaymentStatus_EInput" },
    company: { __type: "USR_InsuranceContractCompanyRelation" },
    costReimbursement: { __type: "USR_CostReimbursement_EInput" },
    coverageEnd: { __type: "Time" },
    coverageStart: { __type: "Time" },
    dormantEntitlement: { __type: "USR_DormantEntitlement_EInput" },
    examinationCertificates: { __type: "[ID]" },
    id: { __type: "String!" },
    patient: { __type: "USR_InsuranceContractPatientRelation" },
    selectiveContract: { __type: "USR_SelectiveContract_EInput" },
    settlingCostBearer: { __type: "Int" },
    type: { __type: "USR_LegalInsuredType" },
  },
  USR_InsuranceContractPatientRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_PatientInput" },
    disconnect: { __type: "Boolean" },
  },
  USR_InsuranceContract_Input: {
    coPaymentStatus: { __type: "USR_CoPaymentStatus_Input_E" },
    company: { __type: "USR_InsuranceCompany_Input!" },
    costReimbursement: { __type: "USR_CostReimbursement_Input_E" },
    coverageEnd: { __type: "Time" },
    coverageStart: { __type: "Time" },
    dormantEntitlement: { __type: "USR_DormantEntitlement_Input_E" },
    examinationCertificates: { __type: "[USR_ExaminationCertificate_Input]" },
    id: { __type: "String!" },
    patient: { __type: "USR_Patient_Input!" },
    selectiveContract: { __type: "USR_SelectiveContract_Input_E" },
    settlingCostBearer: { __type: "Int" },
    type: { __type: "USR_LegalInsuredType" },
  },
  USR_Patient: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    careLevel: { __type: "Int" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    familyDoctor: { __type: "String" },
    isWard: { __type: "Boolean" },
    lastAnamnesisAt: { __type: "Time" },
    nextAppointment: { __type: "Time" },
    primaryInsurance: { __type: "USR_InsuranceContract" },
    status: { __type: "USR_PatientStatus!" },
    user: { __type: "USR_User!" },
  },
  USR_PatientInput: {
    careLevel: { __type: "Int" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    familyDoctor: { __type: "String" },
    isWard: { __type: "Boolean" },
    lastAnamnesisAt: { __type: "Time" },
    nextAppointment: { __type: "Time" },
    primaryInsurance: { __type: "USR_PatientPrimaryInsuranceRelation" },
    status: { __type: "USR_PatientStatus!" },
    user: { __type: "USR_PatientUserRelation" },
  },
  USR_PatientPrimaryInsuranceRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_InsuranceContractInput" },
  },
  USR_PatientUserRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_UserInput" },
    disconnect: { __type: "Boolean" },
  },
  USR_Patient_Input: {
    careLevel: { __type: "Int" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    familyDoctor: { __type: "String" },
    isWard: { __type: "Boolean" },
    lastAnamnesisAt: { __type: "Time" },
    nextAppointment: { __type: "Time" },
    primaryInsurance: { __type: "USR_InsuranceContract_Input" },
    status: { __type: "USR_PatientStatus!" },
    user: { __type: "USR_User_Input!" },
  },
  USR_Patient_Update_Input: {
    careLevel: { __type: "Int" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    familyDoctor: { __type: "String" },
    isWard: { __type: "Boolean" },
    lastAnamnesisAt: { __type: "Time" },
    nextAppointment: { __type: "Time" },
    primaryInsurance: { __type: "USR_InsuranceContract_Input" },
    status: { __type: "USR_PatientStatus!" },
    user: { __type: "USR_User_Input!" },
  },
  USR_SelectiveContract_E: {
    __typename: { __type: "String!" },
    dentist: { __type: "Int" },
    medical: { __type: "Int" },
    type: { __type: "String" },
  },
  USR_SelectiveContract_EInput: {
    dentist: { __type: "Int" },
    medical: { __type: "Int" },
    type: { __type: "String" },
  },
  USR_SelectiveContract_Input_E: {
    dentist: { __type: "Int" },
    medical: { __type: "Int" },
    type: { __type: "String" },
  },
  USR_User: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Long!" },
    addresses: { __type: "[USR_Address]" },
    auth0Id: { __type: "String" },
    birthdate: { __type: "Time" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    email: { __type: "String" },
    employee: { __type: "USR_Employee" },
    firstName: { __type: "String!" },
    gender: { __type: "String" },
    image: { __type: "String" },
    lastName: { __type: "String!" },
    patient: { __type: "USR_Patient" },
    phone: { __type: "String" },
    profession: { __type: "String" },
  },
  USR_UserEmployeeRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_EmployeeInput" },
  },
  USR_UserInput: {
    addresses: { __type: "[ID]" },
    auth0Id: { __type: "String" },
    birthdate: { __type: "Time" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    email: { __type: "String" },
    employee: { __type: "USR_UserEmployeeRelation" },
    firstName: { __type: "String!" },
    gender: { __type: "String" },
    image: { __type: "String" },
    lastName: { __type: "String!" },
    patient: { __type: "USR_UserPatientRelation" },
    phone: { __type: "String" },
    profession: { __type: "String" },
  },
  USR_UserPage: {
    __typename: { __type: "String!" },
    after: { __type: "String" },
    before: { __type: "String" },
    data: { __type: "[USR_User]!" },
  },
  USR_UserPatientRelation: {
    connect: { __type: "ID" },
    create: { __type: "USR_PatientInput" },
  },
  USR_User_Input: {
    addresses: { __type: "[USR_Address_Input]" },
    auth0Id: { __type: "String" },
    birthdate: { __type: "Time" },
    createdAt: { __type: "Time" },
    deletedAt: { __type: "Time" },
    email: { __type: "String" },
    employee: { __type: "USR_Employee_Input" },
    firstName: { __type: "String!" },
    gender: { __type: "String" },
    image: { __type: "String" },
    lastName: { __type: "String!" },
    patient: { __type: "USR_Patient_Input" },
    phone: { __type: "String" },
    profession: { __type: "String" },
  },
  mutation: {
    __typename: { __type: "String!" },
    CLS_CreateOrganizationalUnit: {
      __type: "CLS_OrganizationalUnit",
      __args: { organizationalUnitData: "CLS_OrganizationalUnit_Input!" },
    },
    CLS_DeleteOrganizationalUnit: {
      __type: "String",
      __args: { organizationalUnitId: "ID!", recursiveFlag: "Boolean!" },
    },
    HES_AddMedicalFindingToDentalStatus: {
      __type: "HES_DentalStatus",
      __args: { data: "HES_AddMedicalFindingToDentalStatusInput" },
    },
    HES_CreateMedicalFinding: {
      __type: "HES_MedicalFinding",
      __args: { data: "HES_CreateMedicalFindingInput" },
    },
    HES_DeleteMedicalFinding: {
      __type: "HES_MedicalFinding",
      __args: { airtableId: "String" },
    },
    HES_RemoveMedicalFindingFromDentalStatus: {
      __type: "HES_DentalStatus",
      __args: {
        dentalStatusRef: "ID",
        removeMedicalFindingList: "[HES_Findings_EInput]",
      },
    },
    TRP_AddTreatmentsToPlan: {
      __type: "TRP_TreatmentPlans",
      __args: {
        data: "TRP_AddTreatmentsToPlan_Data_Input!",
        treatmentPlanId: "ID",
      },
    },
    TRP_RemoveTreatmentFromTreatmentPlan: {
      __type: "TRP_TreatmentPlans",
      __args: {
        newTreatmentPlanList: "[TRP_Treatments_EInput]",
        removeTreatmentPlanList: "[TRP_Treatments_EInput]",
        treatmentPlanId: "ID!",
      },
    },
    USR_ArchiveOrRestorePatient: {
      __type: "USR_Patient",
      __args: { archiveRestoreFlag: "Boolean!", userId: "ID!" },
    },
    USR_CreateEmployee: {
      __type: "USR_User",
      __args: { employeeData: "USR_Employee_Input!" },
    },
    USR_CreatePatient: {
      __type: "USR_User",
      __args: { patientData: "USR_Patient_Input!" },
    },
    USR_DeleteEmployee: { __type: "String", __args: { employeeId: "ID!" } },
    USR_DeletePatient: { __type: "String", __args: { patientId: "ID!" } },
    USR_GetOrCreateInsuranceCompany: {
      __type: "USR_InsuranceCompany",
      __args: { insuranceCompanyData: "USR_InsuranceCompany_Input!" },
    },
    USR_UpdateEmployee: {
      __type: "USR_Employee",
      __args: { Refs: "String!", employeeData: "USR_Employee_Update_Input!" },
    },
    USR_UpdatePatient: {
      __type: "USR_Patient",
      __args: { Refs: "String!", patientData: "USR_Patient_Update_Input!" },
    },
    USR_UpdatePatientStatus: {
      __type: "USR_Patient",
      __args: { patientRef: "String!", status: "String!" },
    },
    USR_UpsertUserFromTiInput: { __type: "USR_User", __args: { tiId: "ID!" } },
    createCLS_AssignedOrganizationalUnit: {
      __type: "CLS_AssignedOrganizationalUnit!",
      __args: { data: "CLS_AssignedOrganizationalUnitInput!" },
    },
    createCLS_InsuranceAlliance: {
      __type: "CLS_InsuranceAlliance!",
      __args: { data: "CLS_InsuranceAllianceInput!" },
    },
    createCLS_OrganizationalUnit: {
      __type: "CLS_OrganizationalUnit!",
      __args: { data: "CLS_OrganizationalUnitInput!" },
    },
    createCLS_Role: { __type: "CLS_Role!", __args: { data: "CLS_RoleInput!" } },
    createHES_DentalStatus: {
      __type: "HES_DentalStatus!",
      __args: { data: "HES_DentalStatusInput!" },
    },
    createHES_MedicalFinding: {
      __type: "HES_MedicalFinding!",
      __args: { data: "HES_MedicalFindingInput!" },
    },
    createTRP_TreatmentPlans: {
      __type: "TRP_TreatmentPlans!",
      __args: { data: "TRP_TreatmentPlansInput!" },
    },
    createTRP_Treatments: {
      __type: "TRP_Treatments!",
      __args: { data: "TRP_TreatmentsInput!" },
    },
    createUSR_Address: {
      __type: "USR_Address!",
      __args: { data: "USR_AddressInput!" },
    },
    createUSR_Employee: {
      __type: "USR_Employee!",
      __args: { data: "USR_EmployeeInput!" },
    },
    createUSR_ExaminationCertificate: {
      __type: "USR_ExaminationCertificate!",
      __args: { data: "USR_ExaminationCertificateInput!" },
    },
    createUSR_InsuranceCompany: {
      __type: "USR_InsuranceCompany!",
      __args: { data: "USR_InsuranceCompanyInput!" },
    },
    createUSR_InsuranceContract: {
      __type: "USR_InsuranceContract!",
      __args: { data: "USR_InsuranceContractInput!" },
    },
    createUSR_Patient: {
      __type: "USR_Patient!",
      __args: { data: "USR_PatientInput!" },
    },
    createUSR_User: { __type: "USR_User!", __args: { data: "USR_UserInput!" } },
    deleteCLS_AssignedOrganizationalUnit: {
      __type: "CLS_AssignedOrganizationalUnit",
      __args: { id: "ID!" },
    },
    deleteCLS_InsuranceAlliance: {
      __type: "CLS_InsuranceAlliance",
      __args: { id: "ID!" },
    },
    deleteCLS_OrganizationalUnit: {
      __type: "CLS_OrganizationalUnit",
      __args: { id: "ID!" },
    },
    deleteCLS_Role: { __type: "CLS_Role", __args: { id: "ID!" } },
    deleteHES_DentalStatus: {
      __type: "HES_DentalStatus",
      __args: { id: "ID!" },
    },
    deleteHES_MedicalFinding: {
      __type: "HES_MedicalFinding",
      __args: { id: "ID!" },
    },
    deleteTRP_TreatmentPlans: {
      __type: "TRP_TreatmentPlans",
      __args: { id: "ID!" },
    },
    deleteTRP_Treatments: { __type: "TRP_Treatments", __args: { id: "ID!" } },
    deleteUSR_Address: { __type: "USR_Address", __args: { id: "ID!" } },
    deleteUSR_Employee: { __type: "USR_Employee", __args: { id: "ID!" } },
    deleteUSR_ExaminationCertificate: {
      __type: "USR_ExaminationCertificate",
      __args: { id: "ID!" },
    },
    deleteUSR_InsuranceCompany: {
      __type: "USR_InsuranceCompany",
      __args: { id: "ID!" },
    },
    deleteUSR_InsuranceContract: {
      __type: "USR_InsuranceContract",
      __args: { id: "ID!" },
    },
    deleteUSR_Patient: { __type: "USR_Patient", __args: { id: "ID!" } },
    deleteUSR_User: { __type: "USR_User", __args: { id: "ID!" } },
    partialUpdateCLS_AssignedOrganizationalUnit: {
      __type: "CLS_AssignedOrganizationalUnit",
      __args: {
        data: "PartialUpdateCLS_AssignedOrganizationalUnitInput!",
        id: "ID!",
      },
    },
    partialUpdateCLS_InsuranceAlliance: {
      __type: "CLS_InsuranceAlliance",
      __args: { data: "PartialUpdateCLS_InsuranceAllianceInput!", id: "ID!" },
    },
    partialUpdateCLS_OrganizationalUnit: {
      __type: "CLS_OrganizationalUnit",
      __args: { data: "PartialUpdateCLS_OrganizationalUnitInput!", id: "ID!" },
    },
    partialUpdateCLS_Role: {
      __type: "CLS_Role",
      __args: { data: "PartialUpdateCLS_RoleInput!", id: "ID!" },
    },
    partialUpdateHES_DentalStatus: {
      __type: "HES_DentalStatus",
      __args: { data: "PartialUpdateHES_DentalStatusInput!", id: "ID!" },
    },
    partialUpdateHES_MedicalFinding: {
      __type: "HES_MedicalFinding",
      __args: { data: "PartialUpdateHES_MedicalFindingInput!", id: "ID!" },
    },
    partialUpdateTRP_TreatmentPlans: {
      __type: "TRP_TreatmentPlans",
      __args: { data: "PartialUpdateTRP_TreatmentPlansInput!", id: "ID!" },
    },
    partialUpdateTRP_Treatments: {
      __type: "TRP_Treatments",
      __args: { data: "PartialUpdateTRP_TreatmentsInput!", id: "ID!" },
    },
    partialUpdateUSR_Address: {
      __type: "USR_Address",
      __args: { data: "PartialUpdateUSR_AddressInput!", id: "ID!" },
    },
    partialUpdateUSR_Employee: {
      __type: "USR_Employee",
      __args: { data: "PartialUpdateUSR_EmployeeInput!", id: "ID!" },
    },
    partialUpdateUSR_ExaminationCertificate: {
      __type: "USR_ExaminationCertificate",
      __args: {
        data: "PartialUpdateUSR_ExaminationCertificateInput!",
        id: "ID!",
      },
    },
    partialUpdateUSR_InsuranceCompany: {
      __type: "USR_InsuranceCompany",
      __args: { data: "PartialUpdateUSR_InsuranceCompanyInput!", id: "ID!" },
    },
    partialUpdateUSR_InsuranceContract: {
      __type: "USR_InsuranceContract",
      __args: { data: "PartialUpdateUSR_InsuranceContractInput!", id: "ID!" },
    },
    partialUpdateUSR_Patient: {
      __type: "USR_Patient",
      __args: { data: "PartialUpdateUSR_PatientInput!", id: "ID!" },
    },
    partialUpdateUSR_User: {
      __type: "USR_User",
      __args: { data: "PartialUpdateUSR_UserInput!", id: "ID!" },
    },
    updateCLS_AssignedOrganizationalUnit: {
      __type: "CLS_AssignedOrganizationalUnit",
      __args: { data: "CLS_AssignedOrganizationalUnitInput!", id: "ID!" },
    },
    updateCLS_InsuranceAlliance: {
      __type: "CLS_InsuranceAlliance",
      __args: { data: "CLS_InsuranceAllianceInput!", id: "ID!" },
    },
    updateCLS_OrganizationalUnit: {
      __type: "CLS_OrganizationalUnit",
      __args: { data: "CLS_OrganizationalUnitInput!", id: "ID!" },
    },
    updateCLS_Role: {
      __type: "CLS_Role",
      __args: { data: "CLS_RoleInput!", id: "ID!" },
    },
    updateHES_DentalStatus: {
      __type: "HES_DentalStatus",
      __args: { data: "HES_DentalStatusInput!", id: "ID!" },
    },
    updateHES_MedicalFinding: {
      __type: "HES_MedicalFinding",
      __args: { data: "HES_MedicalFindingInput!", id: "ID!" },
    },
    updateTRP_TreatmentPlans: {
      __type: "TRP_TreatmentPlans",
      __args: { data: "TRP_TreatmentPlansInput!", id: "ID!" },
    },
    updateTRP_Treatments: {
      __type: "TRP_Treatments",
      __args: { data: "TRP_TreatmentsInput!", id: "ID!" },
    },
    updateUSR_Address: {
      __type: "USR_Address",
      __args: { data: "USR_AddressInput!", id: "ID!" },
    },
    updateUSR_Employee: {
      __type: "USR_Employee",
      __args: { data: "USR_EmployeeInput!", id: "ID!" },
    },
    updateUSR_ExaminationCertificate: {
      __type: "USR_ExaminationCertificate",
      __args: { data: "USR_ExaminationCertificateInput!", id: "ID!" },
    },
    updateUSR_InsuranceCompany: {
      __type: "USR_InsuranceCompany",
      __args: { data: "USR_InsuranceCompanyInput!", id: "ID!" },
    },
    updateUSR_InsuranceContract: {
      __type: "USR_InsuranceContract",
      __args: { data: "USR_InsuranceContractInput!", id: "ID!" },
    },
    updateUSR_Patient: {
      __type: "USR_Patient",
      __args: { data: "USR_PatientInput!", id: "ID!" },
    },
    updateUSR_User: {
      __type: "USR_User",
      __args: { data: "USR_UserInput!", id: "ID!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    CLS_GetAllOrganizationalUnits: {
      __type: "CLS_OrganizationalUnitPage!",
      __args: { _cursor: "String", _size: "Int" },
    },
    CLS_GetAllRoles: {
      __type: "CLS_RolePage!",
      __args: { _cursor: "String", _size: "Int" },
    },
    CLS_GetAssignedOrganizationalUnitsByAuth0Id: {
      __type: "[CLS_AssignedOrganizationalUnit]",
      __args: { auth0Id: "ID!" },
    },
    HES_GetDentalStatusByPatientRef: {
      __type: "QueryHES_GetDentalStatusByPatientRefPage!",
      __args: { _cursor: "String", _size: "Int", patientId: "ID!" },
    },
    HES_GetDentalStatuses: {
      __type: "HES_DentalStatusPage!",
      __args: { _cursor: "String", _size: "Int" },
    },
    HES_GetMedicalFindings: {
      __type: "QueryHES_GetMedicalFindingsPage!",
      __args: { _cursor: "String", _size: "Int", isDeleted: "Boolean" },
    },
    HES_GetMedicalFindingsByAirtableId: {
      __type: "HES_MedicalFindingPage!",
      __args: { _cursor: "String", _size: "Int", airtableId: "String" },
    },
    TRP_GetTreatmentPlansByPatient_GQL: {
      __type: "QueryTRP_GetTreatmentPlansByPatient_GQLPage!",
      __args: { _cursor: "String", _size: "Int", patientId: "ID!" },
    },
    TRP_GetTreatments_GQL: {
      __type: "QueryTRP_GetTreatments_GQLPage!",
      __args: { _cursor: "String", _size: "Int", isDeleted: "Boolean" },
    },
    USR_CheckIfInsuranceContractExists: {
      __type: "USR_InsuranceContract",
      __args: { insuranceContractData: "USR_InsuranceContract_Input!" },
    },
    USR_GetEmployees: {
      __type: "QueryUSR_GetEmployeesPage!",
      __args: {
        _cursor: "String",
        _size: "Int",
        afterCursorId: "ID!",
        collectionName: "String!",
        size: "Int!",
      },
    },
    USR_GetInsuranceCompanyById: {
      __type: "USR_InsuranceCompany",
      __args: { id: "String" },
    },
    USR_GetInsuranceIdFromTiInput: {
      __type: "[String]",
      __args: { tiId: "ID!" },
    },
    USR_GetPatients: {
      __type: "QueryUSR_GetPatientsPage!",
      __args: {
        _cursor: "String",
        _size: "Int",
        afterCursorId: "ID!",
        isArchived: "Boolean!",
        size: "Int!",
      },
    },
    USR_GetUserByAuth0Id: { __type: "USR_User", __args: { auth0Id: "String" } },
    USR_GetUserByEmail: { __type: "USR_User", __args: { email: "String" } },
    USR_GetUserByInsuranceContract: {
      __type: "[USR_User]",
      __args: { insuranceId: "ID!" },
    },
    USR_GetUsers: {
      __type: "USR_UserPage!",
      __args: { _cursor: "String", _size: "Int" },
    },
    findCLS_AssignedOrganizationalUnitByID: {
      __type: "CLS_AssignedOrganizationalUnit",
      __args: { id: "ID!" },
    },
    findCLS_InsuranceAllianceByID: {
      __type: "CLS_InsuranceAlliance",
      __args: { id: "ID!" },
    },
    findCLS_OrganizationalUnitByID: {
      __type: "CLS_OrganizationalUnit",
      __args: { id: "ID!" },
    },
    findCLS_RoleByID: { __type: "CLS_Role", __args: { id: "ID!" } },
    findHES_DentalStatusByID: {
      __type: "HES_DentalStatus",
      __args: { id: "ID!" },
    },
    findHES_MedicalFindingByID: {
      __type: "HES_MedicalFinding",
      __args: { id: "ID!" },
    },
    findTRP_TreatmentPlansByID: {
      __type: "TRP_TreatmentPlans",
      __args: { id: "ID!" },
    },
    findTRP_TreatmentsByID: { __type: "TRP_Treatments", __args: { id: "ID!" } },
    findUSR_AddressByID: { __type: "USR_Address", __args: { id: "ID!" } },
    findUSR_EmployeeByID: { __type: "USR_Employee", __args: { id: "ID!" } },
    findUSR_ExaminationCertificateByID: {
      __type: "USR_ExaminationCertificate",
      __args: { id: "ID!" },
    },
    findUSR_InsuranceCompanyByID: {
      __type: "USR_InsuranceCompany",
      __args: { id: "ID!" },
    },
    findUSR_InsuranceContractByID: {
      __type: "USR_InsuranceContract",
      __args: { id: "ID!" },
    },
    findUSR_PatientByID: { __type: "USR_Patient", __args: { id: "ID!" } },
    findUSR_UserByID: { __type: "USR_User", __args: { id: "ID!" } },
  },
  subscription: {},
} as const;

export interface CLS_Address_E {
  __typename?: "CLS_Address_E";
  city: ScalarsEnums["String"];
  country: ScalarsEnums["String"];
  postalCode: ScalarsEnums["String"];
  street: ScalarsEnums["String"];
  streetNo: ScalarsEnums["String"];
}

export interface CLS_AssignedOrganizationalUnit {
  __typename?: "CLS_AssignedOrganizationalUnit";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  organizationalUnits?: Maybe<Array<Maybe<CLS_OrganizationalUnits_E>>>;
  tenant?: Maybe<CLS_OrganizationalUnit>;
  user?: Maybe<USR_User>;
}

export interface CLS_InsuranceAlliance {
  __typename?: "CLS_InsuranceAlliance";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  address?: Maybe<CLS_Address_E>;
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["String"];
  name: ScalarsEnums["String"];
  phone?: Maybe<ScalarsEnums["String"]>;
}

export interface CLS_LegalEntityMasterData_E {
  __typename?: "CLS_LegalEntityMasterData_E";
  insuranceAlliance?: Maybe<CLS_InsuranceAlliance>;
  settlementNumber?: Maybe<ScalarsEnums["String"]>;
  taxID?: Maybe<ScalarsEnums["String"]>;
}

export interface CLS_OrganizationalUnit {
  __typename?: "CLS_OrganizationalUnit";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  address?: Maybe<CLS_Address_E>;
  childOrganizationalUnits?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  isLegalEntity: ScalarsEnums["Boolean"];
  legalEntityMasterData?: Maybe<CLS_LegalEntityMasterData_E>;
  name: ScalarsEnums["String"];
  parentOrganizationalUnit?: Maybe<CLS_OrganizationalUnit>;
  patientServing?: Maybe<ScalarsEnums["CLS_PatientServing"]>;
  phone?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["CLS_Type"]>;
}

/**
 * The pagination object for elements of type 'CLS_OrganizationalUnit'.
 */
export interface CLS_OrganizationalUnitPage {
  __typename?: "CLS_OrganizationalUnitPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'CLS_OrganizationalUnit' in this page.
   */
  data: Array<Maybe<CLS_OrganizationalUnit>>;
}

export interface CLS_OrganizationalUnits_E {
  __typename?: "CLS_OrganizationalUnits_E";
  auth0InvitationId?: Maybe<ScalarsEnums["String"]>;
  organizationalUnit?: Maybe<CLS_OrganizationalUnit>;
  roles?: Maybe<Array<Maybe<CLS_Role>>>;
}

export interface CLS_Role {
  __typename?: "CLS_Role";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  auth0Id: ScalarsEnums["String"];
  organizationalUnitE?: Maybe<CLS_OrganizationalUnits_E>;
  type: ScalarsEnums["CLS_RoleType"];
}

/**
 * The pagination object for elements of type 'CLS_Role'.
 */
export interface CLS_RolePage {
  __typename?: "CLS_RolePage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'CLS_Role' in this page.
   */
  data: Array<Maybe<CLS_Role>>;
}

export interface HES_DentalStatus {
  __typename?: "HES_DentalStatus";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  createdAt?: Maybe<ScalarsEnums["Time"]>;
  createdBy: USR_User;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  editedAt?: Maybe<ScalarsEnums["Time"]>;
  editedBy?: Maybe<USR_User>;
  findings: Array<Maybe<HES_Findings_E>>;
  patient: USR_User;
}

/**
 * The pagination object for elements of type 'HES_DentalStatus'.
 */
export interface HES_DentalStatusPage {
  __typename?: "HES_DentalStatusPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'HES_DentalStatus' in this page.
   */
  data: Array<Maybe<HES_DentalStatus>>;
}

export interface HES_Findings_E {
  __typename?: "HES_Findings_E";
  area?: Maybe<ScalarsEnums["String"]>;
  areaPrefixes?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  material?: Maybe<ScalarsEnums["String"]>;
  medicalFinding: HES_MedicalFinding;
  modifiers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  note?: Maybe<HES_Note_E>;
  position?: Maybe<ScalarsEnums["String"]>;
  values?: Maybe<ScalarsEnums["String"]>;
}

export interface HES_MedicalFinding {
  __typename?: "HES_MedicalFinding";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  airtableId?: Maybe<ScalarsEnums["String"]>;
  availableAreas?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  availableLocations: Array<Maybe<ScalarsEnums["String"]>>;
  availableMaterials?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  availableModifiers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  availablePositions: Array<Maybe<ScalarsEnums["String"]>>;
  criticality: ScalarsEnums["Int"];
  name: ScalarsEnums["String"];
  zIndex: ScalarsEnums["String"];
}

/**
 * The pagination object for elements of type 'HES_MedicalFinding'.
 */
export interface HES_MedicalFindingPage {
  __typename?: "HES_MedicalFindingPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'HES_MedicalFinding' in this page.
   */
  data: Array<Maybe<HES_MedicalFinding>>;
}

export interface HES_Note_E {
  __typename?: "HES_Note_E";
  createdAt?: Maybe<ScalarsEnums["Time"]>;
  createdBy: USR_User;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  description: ScalarsEnums["String"];
  editedAt?: Maybe<ScalarsEnums["Time"]>;
  editedBy?: Maybe<USR_User>;
}

export interface ORC_History_E {
  __typename?: "ORC_History_E";
  createdAt: ScalarsEnums["Time"];
  createdBy: USR_User;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  deletedBy?: Maybe<USR_User>;
  updatedAt?: Maybe<ScalarsEnums["Time"]>;
  updatedBy?: Maybe<USR_User>;
}

/**
 * The pagination object for elements of type 'HES_DentalStatus'.
 */
export interface QueryHES_GetDentalStatusByPatientRefPage {
  __typename?: "QueryHES_GetDentalStatusByPatientRefPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'HES_DentalStatus' in this page.
   */
  data: Array<Maybe<HES_DentalStatus>>;
}

/**
 * The pagination object for elements of type 'HES_MedicalFinding'.
 */
export interface QueryHES_GetMedicalFindingsPage {
  __typename?: "QueryHES_GetMedicalFindingsPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'HES_MedicalFinding' in this page.
   */
  data: Array<Maybe<HES_MedicalFinding>>;
}

/**
 * The pagination object for elements of type 'TRP_TreatmentPlans'.
 */
export interface QueryTRP_GetTreatmentPlansByPatient_GQLPage {
  __typename?: "QueryTRP_GetTreatmentPlansByPatient_GQLPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'TRP_TreatmentPlans' in this page.
   */
  data: Array<Maybe<TRP_TreatmentPlans>>;
}

/**
 * The pagination object for elements of type 'TRP_Treatments'.
 */
export interface QueryTRP_GetTreatments_GQLPage {
  __typename?: "QueryTRP_GetTreatments_GQLPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'TRP_Treatments' in this page.
   */
  data: Array<Maybe<TRP_Treatments>>;
}

/**
 * The pagination object for elements of type 'USR_Employee'.
 */
export interface QueryUSR_GetEmployeesPage {
  __typename?: "QueryUSR_GetEmployeesPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'USR_Employee' in this page.
   */
  data: Array<Maybe<USR_Employee>>;
}

/**
 * The pagination object for elements of type 'USR_Patient'.
 */
export interface QueryUSR_GetPatientsPage {
  __typename?: "QueryUSR_GetPatientsPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'USR_Patient' in this page.
   */
  data: Array<Maybe<USR_Patient>>;
}

export interface TRP_TreatmentPlans {
  __typename?: "TRP_TreatmentPlans";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  history: ORC_History_E;
  name: ScalarsEnums["String"];
  patient: USR_User;
  treatments?: Maybe<Array<Maybe<TRP_Treatments_E>>>;
}

export interface TRP_Treatments {
  __typename?: "TRP_Treatments";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  airtableId: ScalarsEnums["String"];
  availableAreas: Array<Maybe<ScalarsEnums["String"]>>;
  availablePositions: Array<Maybe<ScalarsEnums["String"]>>;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  depth: ScalarsEnums["Depth"];
  localizations: Array<Maybe<TRP_Treatments_Localizations_E>>;
  name: ScalarsEnums["String"];
}

export interface TRP_Treatments_E {
  __typename?: "TRP_Treatments_E";
  area: ScalarsEnums["Area"];
  position: ScalarsEnums["Position"];
  treatment: TRP_Treatments;
}

export interface TRP_Treatments_Localizations_E {
  __typename?: "TRP_Treatments_Localizations_E";
  locale: ScalarsEnums["Locale"];
  name: ScalarsEnums["String"];
  synonyms?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
}

export interface USR_Address {
  __typename?: "USR_Address";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  city: ScalarsEnums["String"];
  country: ScalarsEnums["String"];
  createdAt?: Maybe<ScalarsEnums["Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  postalCode: ScalarsEnums["String"];
  street: ScalarsEnums["String"];
  streetNo: ScalarsEnums["String"];
  user: USR_User;
}

export interface USR_CoPaymentStatus_E {
  __typename?: "USR_CoPaymentStatus_E";
  status: ScalarsEnums["Boolean"];
  validTo?: Maybe<ScalarsEnums["Time"]>;
}

export interface USR_CostReimbursement_E {
  __typename?: "USR_CostReimbursement_E";
  someField?: Maybe<ScalarsEnums["String"]>;
}

export interface USR_DormantEntitlement_E {
  __typename?: "USR_DormantEntitlement_E";
  end?: Maybe<ScalarsEnums["Time"]>;
  start?: Maybe<ScalarsEnums["Time"]>;
  type?: Maybe<ScalarsEnums["USR_DormantType"]>;
}

export interface USR_Employee {
  __typename?: "USR_Employee";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  createdAt?: Maybe<ScalarsEnums["Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  licenceId?: Maybe<ScalarsEnums["String"]>;
  status: ScalarsEnums["USR_EmployeeStatus"];
  user: USR_User;
}

export interface USR_ExaminationCertificate {
  __typename?: "USR_ExaminationCertificate";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  /**
   * Error codes
   */
  error?: Maybe<ScalarsEnums["USR_ExaminationCertificationResult"]>;
  /**
   * Available as 'pz' in examination certificate object
   */
  hash?: Maybe<ScalarsEnums["String"]>;
  insuranceContract?: Maybe<USR_InsuranceContract>;
  /**
   * Time when certificate was generated
   */
  ts?: Maybe<ScalarsEnums["Time"]>;
}

export interface USR_InsuranceCompany {
  __typename?: "USR_InsuranceCompany";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  country?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  /**
   * Insurance company id
   */
  id: ScalarsEnums["String"];
  /**
   * Name of insurance company
   */
  name: ScalarsEnums["String"];
  type: ScalarsEnums["USR_InsuranceType"];
  wop: ScalarsEnums["USR_WOP"];
}

export interface USR_InsuranceContract {
  __typename?: "USR_InsuranceContract";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  coPaymentStatus?: Maybe<USR_CoPaymentStatus_E>;
  company: USR_InsuranceCompany;
  costReimbursement?: Maybe<USR_CostReimbursement_E>;
  coverageEnd?: Maybe<ScalarsEnums["Time"]>;
  coverageStart?: Maybe<ScalarsEnums["Time"]>;
  dormantEntitlement?: Maybe<USR_DormantEntitlement_E>;
  examinationCertificates?: Maybe<Array<Maybe<USR_ExaminationCertificate>>>;
  id: ScalarsEnums["String"];
  patient: USR_Patient;
  selectiveContract?: Maybe<USR_SelectiveContract_E>;
  settlingCostBearer?: Maybe<ScalarsEnums["Int"]>;
  type?: Maybe<ScalarsEnums["USR_LegalInsuredType"]>;
}

export interface USR_Patient {
  __typename?: "USR_Patient";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  careLevel?: Maybe<ScalarsEnums["Int"]>;
  createdAt?: Maybe<ScalarsEnums["Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  familyDoctor?: Maybe<ScalarsEnums["String"]>;
  isWard?: Maybe<ScalarsEnums["Boolean"]>;
  lastAnamnesisAt?: Maybe<ScalarsEnums["Time"]>;
  nextAppointment?: Maybe<ScalarsEnums["Time"]>;
  primaryInsurance?: Maybe<USR_InsuranceContract>;
  status: ScalarsEnums["USR_PatientStatus"];
  user: USR_User;
}

export interface USR_SelectiveContract_E {
  __typename?: "USR_SelectiveContract_E";
  dentist?: Maybe<ScalarsEnums["Int"]>;
  medical?: Maybe<ScalarsEnums["Int"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface USR_User {
  __typename?: "USR_User";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Long"];
  addresses?: Maybe<Array<Maybe<USR_Address>>>;
  auth0Id?: Maybe<ScalarsEnums["String"]>;
  birthdate?: Maybe<ScalarsEnums["Time"]>;
  createdAt?: Maybe<ScalarsEnums["Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Time"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  employee?: Maybe<USR_Employee>;
  firstName: ScalarsEnums["String"];
  gender?: Maybe<ScalarsEnums["String"]>;
  image?: Maybe<ScalarsEnums["String"]>;
  lastName: ScalarsEnums["String"];
  patient?: Maybe<USR_Patient>;
  phone?: Maybe<ScalarsEnums["String"]>;
  profession?: Maybe<ScalarsEnums["String"]>;
}

/**
 * The pagination object for elements of type 'USR_User'.
 */
export interface USR_UserPage {
  __typename?: "USR_UserPage";
  /**
   * A cursor for elements coming after the current page.
   */
  after?: Maybe<ScalarsEnums["String"]>;
  /**
   * A cursor for elements coming before the current page.
   */
  before?: Maybe<ScalarsEnums["String"]>;
  /**
   * The elements of type 'USR_User' in this page.
   */
  data: Array<Maybe<USR_User>>;
}

export interface Mutation {
  __typename?: "Mutation";
  CLS_CreateOrganizationalUnit: (args: {
    organizationalUnitData: CLS_OrganizationalUnit_Input;
  }) => Maybe<CLS_OrganizationalUnit>;
  CLS_DeleteOrganizationalUnit: (args: {
    organizationalUnitId: Scalars["ID"];
    recursiveFlag: Scalars["Boolean"];
  }) => Maybe<ScalarsEnums["String"]>;
  HES_AddMedicalFindingToDentalStatus: (args?: {
    data?: Maybe<HES_AddMedicalFindingToDentalStatusInput>;
  }) => Maybe<HES_DentalStatus>;
  HES_CreateMedicalFinding: (args?: {
    data?: Maybe<HES_CreateMedicalFindingInput>;
  }) => Maybe<HES_MedicalFinding>;
  HES_DeleteMedicalFinding: (args?: {
    airtableId?: Maybe<Scalars["String"]>;
  }) => Maybe<HES_MedicalFinding>;
  HES_RemoveMedicalFindingFromDentalStatus: (args?: {
    dentalStatusRef?: Maybe<Scalars["ID"]>;
    removeMedicalFindingList?: Maybe<Array<Maybe<HES_Findings_EInput>>>;
  }) => Maybe<HES_DentalStatus>;
  TRP_AddTreatmentsToPlan: (args: {
    data: TRP_AddTreatmentsToPlan_Data_Input;
    treatmentPlanId?: Maybe<Scalars["ID"]>;
  }) => Maybe<TRP_TreatmentPlans>;
  TRP_RemoveTreatmentFromTreatmentPlan: (args: {
    newTreatmentPlanList?: Maybe<Array<Maybe<TRP_Treatments_EInput>>>;
    removeTreatmentPlanList?: Maybe<Array<Maybe<TRP_Treatments_EInput>>>;
    treatmentPlanId: Scalars["ID"];
  }) => Maybe<TRP_TreatmentPlans>;
  USR_ArchiveOrRestorePatient: (args: {
    archiveRestoreFlag: Scalars["Boolean"];
    userId: Scalars["ID"];
  }) => Maybe<USR_Patient>;
  USR_CreateEmployee: (args: {
    employeeData: USR_Employee_Input;
  }) => Maybe<USR_User>;
  USR_CreatePatient: (args: {
    patientData: USR_Patient_Input;
  }) => Maybe<USR_User>;
  USR_DeleteEmployee: (args: {
    employeeId: Scalars["ID"];
  }) => Maybe<ScalarsEnums["String"]>;
  USR_DeletePatient: (args: {
    patientId: Scalars["ID"];
  }) => Maybe<ScalarsEnums["String"]>;
  USR_GetOrCreateInsuranceCompany: (args: {
    insuranceCompanyData: USR_InsuranceCompany_Input;
  }) => Maybe<USR_InsuranceCompany>;
  USR_UpdateEmployee: (args: {
    Refs: Scalars["String"];
    employeeData: USR_Employee_Update_Input;
  }) => Maybe<USR_Employee>;
  USR_UpdatePatient: (args: {
    Refs: Scalars["String"];
    patientData: USR_Patient_Update_Input;
  }) => Maybe<USR_Patient>;
  USR_UpdatePatientStatus: (args: {
    patientRef: Scalars["String"];
    status: Scalars["String"];
  }) => Maybe<USR_Patient>;
  USR_UpsertUserFromTiInput: (args: { tiId: Scalars["ID"] }) => Maybe<USR_User>;
  /**
   * Create a new document in the collection of 'CLS_AssignedOrganizationalUnit'
   */
  createCLS_AssignedOrganizationalUnit: (args: {
    /**
     * 'CLS_AssignedOrganizationalUnit' input values
     */
    data: CLS_AssignedOrganizationalUnitInput;
  }) => CLS_AssignedOrganizationalUnit;
  /**
   * Create a new document in the collection of 'CLS_InsuranceAlliance'
   */
  createCLS_InsuranceAlliance: (args: {
    /**
     * 'CLS_InsuranceAlliance' input values
     */
    data: CLS_InsuranceAllianceInput;
  }) => CLS_InsuranceAlliance;
  /**
   * Create a new document in the collection of 'CLS_OrganizationalUnit'
   */
  createCLS_OrganizationalUnit: (args: {
    /**
     * 'CLS_OrganizationalUnit' input values
     */
    data: CLS_OrganizationalUnitInput;
  }) => CLS_OrganizationalUnit;
  /**
   * Create a new document in the collection of 'CLS_Role'
   */
  createCLS_Role: (args: {
    /**
     * 'CLS_Role' input values
     */
    data: CLS_RoleInput;
  }) => CLS_Role;
  /**
   * Create a new document in the collection of 'HES_DentalStatus'
   */
  createHES_DentalStatus: (args: {
    /**
     * 'HES_DentalStatus' input values
     */
    data: HES_DentalStatusInput;
  }) => HES_DentalStatus;
  /**
   * Create a new document in the collection of 'HES_MedicalFinding'
   */
  createHES_MedicalFinding: (args: {
    /**
     * 'HES_MedicalFinding' input values
     */
    data: HES_MedicalFindingInput;
  }) => HES_MedicalFinding;
  /**
   * Create a new document in the collection of 'TRP_TreatmentPlans'
   */
  createTRP_TreatmentPlans: (args: {
    /**
     * 'TRP_TreatmentPlans' input values
     */
    data: TRP_TreatmentPlansInput;
  }) => TRP_TreatmentPlans;
  /**
   * Create a new document in the collection of 'TRP_Treatments'
   */
  createTRP_Treatments: (args: {
    /**
     * 'TRP_Treatments' input values
     */
    data: TRP_TreatmentsInput;
  }) => TRP_Treatments;
  /**
   * Create a new document in the collection of 'USR_Address'
   */
  createUSR_Address: (args: {
    /**
     * 'USR_Address' input values
     */
    data: USR_AddressInput;
  }) => USR_Address;
  /**
   * Create a new document in the collection of 'USR_Employee'
   */
  createUSR_Employee: (args: {
    /**
     * 'USR_Employee' input values
     */
    data: USR_EmployeeInput;
  }) => USR_Employee;
  /**
   * Create a new document in the collection of 'USR_ExaminationCertificate'
   */
  createUSR_ExaminationCertificate: (args: {
    /**
     * 'USR_ExaminationCertificate' input values
     */
    data: USR_ExaminationCertificateInput;
  }) => USR_ExaminationCertificate;
  /**
   * Create a new document in the collection of 'USR_InsuranceCompany'
   */
  createUSR_InsuranceCompany: (args: {
    /**
     * 'USR_InsuranceCompany' input values
     */
    data: USR_InsuranceCompanyInput;
  }) => USR_InsuranceCompany;
  /**
   * Create a new document in the collection of 'USR_InsuranceContract'
   */
  createUSR_InsuranceContract: (args: {
    /**
     * 'USR_InsuranceContract' input values
     */
    data: USR_InsuranceContractInput;
  }) => USR_InsuranceContract;
  /**
   * Create a new document in the collection of 'USR_Patient'
   */
  createUSR_Patient: (args: {
    /**
     * 'USR_Patient' input values
     */
    data: USR_PatientInput;
  }) => USR_Patient;
  /**
   * Create a new document in the collection of 'USR_User'
   */
  createUSR_User: (args: {
    /**
     * 'USR_User' input values
     */
    data: USR_UserInput;
  }) => USR_User;
  /**
   * Delete an existing document in the collection of 'CLS_AssignedOrganizationalUnit'
   */
  deleteCLS_AssignedOrganizationalUnit: (args: {
    /**
     * The 'CLS_AssignedOrganizationalUnit' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_AssignedOrganizationalUnit>;
  /**
   * Delete an existing document in the collection of 'CLS_InsuranceAlliance'
   */
  deleteCLS_InsuranceAlliance: (args: {
    /**
     * The 'CLS_InsuranceAlliance' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_InsuranceAlliance>;
  /**
   * Delete an existing document in the collection of 'CLS_OrganizationalUnit'
   */
  deleteCLS_OrganizationalUnit: (args: {
    /**
     * The 'CLS_OrganizationalUnit' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_OrganizationalUnit>;
  /**
   * Delete an existing document in the collection of 'CLS_Role'
   */
  deleteCLS_Role: (args: {
    /**
     * The 'CLS_Role' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_Role>;
  /**
   * Delete an existing document in the collection of 'HES_DentalStatus'
   */
  deleteHES_DentalStatus: (args: {
    /**
     * The 'HES_DentalStatus' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<HES_DentalStatus>;
  /**
   * Delete an existing document in the collection of 'HES_MedicalFinding'
   */
  deleteHES_MedicalFinding: (args: {
    /**
     * The 'HES_MedicalFinding' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<HES_MedicalFinding>;
  /**
   * Delete an existing document in the collection of 'TRP_TreatmentPlans'
   */
  deleteTRP_TreatmentPlans: (args: {
    /**
     * The 'TRP_TreatmentPlans' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<TRP_TreatmentPlans>;
  /**
   * Delete an existing document in the collection of 'TRP_Treatments'
   */
  deleteTRP_Treatments: (args: {
    /**
     * The 'TRP_Treatments' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<TRP_Treatments>;
  /**
   * Delete an existing document in the collection of 'USR_Address'
   */
  deleteUSR_Address: (args: {
    /**
     * The 'USR_Address' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Address>;
  /**
   * Delete an existing document in the collection of 'USR_Employee'
   */
  deleteUSR_Employee: (args: {
    /**
     * The 'USR_Employee' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Employee>;
  /**
   * Delete an existing document in the collection of 'USR_ExaminationCertificate'
   */
  deleteUSR_ExaminationCertificate: (args: {
    /**
     * The 'USR_ExaminationCertificate' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_ExaminationCertificate>;
  /**
   * Delete an existing document in the collection of 'USR_InsuranceCompany'
   */
  deleteUSR_InsuranceCompany: (args: {
    /**
     * The 'USR_InsuranceCompany' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_InsuranceCompany>;
  /**
   * Delete an existing document in the collection of 'USR_InsuranceContract'
   */
  deleteUSR_InsuranceContract: (args: {
    /**
     * The 'USR_InsuranceContract' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_InsuranceContract>;
  /**
   * Delete an existing document in the collection of 'USR_Patient'
   */
  deleteUSR_Patient: (args: {
    /**
     * The 'USR_Patient' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Patient>;
  /**
   * Delete an existing document in the collection of 'USR_User'
   */
  deleteUSR_User: (args: {
    /**
     * The 'USR_User' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_User>;
  /**
   * Partially updates an existing document in the collection of 'CLS_AssignedOrganizationalUnit'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateCLS_AssignedOrganizationalUnit: (args: {
    /**
     * 'CLS_AssignedOrganizationalUnit' input values
     */
    data: PartialUpdateCLS_AssignedOrganizationalUnitInput;
    /**
     * The 'CLS_AssignedOrganizationalUnit' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_AssignedOrganizationalUnit>;
  /**
   * Partially updates an existing document in the collection of 'CLS_InsuranceAlliance'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateCLS_InsuranceAlliance: (args: {
    /**
     * 'CLS_InsuranceAlliance' input values
     */
    data: PartialUpdateCLS_InsuranceAllianceInput;
    /**
     * The 'CLS_InsuranceAlliance' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_InsuranceAlliance>;
  /**
   * Partially updates an existing document in the collection of 'CLS_OrganizationalUnit'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateCLS_OrganizationalUnit: (args: {
    /**
     * 'CLS_OrganizationalUnit' input values
     */
    data: PartialUpdateCLS_OrganizationalUnitInput;
    /**
     * The 'CLS_OrganizationalUnit' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_OrganizationalUnit>;
  /**
   * Partially updates an existing document in the collection of 'CLS_Role'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateCLS_Role: (args: {
    /**
     * 'CLS_Role' input values
     */
    data: PartialUpdateCLS_RoleInput;
    /**
     * The 'CLS_Role' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_Role>;
  /**
   * Partially updates an existing document in the collection of 'HES_DentalStatus'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateHES_DentalStatus: (args: {
    /**
     * 'HES_DentalStatus' input values
     */
    data: PartialUpdateHES_DentalStatusInput;
    /**
     * The 'HES_DentalStatus' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<HES_DentalStatus>;
  /**
   * Partially updates an existing document in the collection of 'HES_MedicalFinding'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateHES_MedicalFinding: (args: {
    /**
     * 'HES_MedicalFinding' input values
     */
    data: PartialUpdateHES_MedicalFindingInput;
    /**
     * The 'HES_MedicalFinding' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<HES_MedicalFinding>;
  /**
   * Partially updates an existing document in the collection of 'TRP_TreatmentPlans'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateTRP_TreatmentPlans: (args: {
    /**
     * 'TRP_TreatmentPlans' input values
     */
    data: PartialUpdateTRP_TreatmentPlansInput;
    /**
     * The 'TRP_TreatmentPlans' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<TRP_TreatmentPlans>;
  /**
   * Partially updates an existing document in the collection of 'TRP_Treatments'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateTRP_Treatments: (args: {
    /**
     * 'TRP_Treatments' input values
     */
    data: PartialUpdateTRP_TreatmentsInput;
    /**
     * The 'TRP_Treatments' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<TRP_Treatments>;
  /**
   * Partially updates an existing document in the collection of 'USR_Address'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateUSR_Address: (args: {
    /**
     * 'USR_Address' input values
     */
    data: PartialUpdateUSR_AddressInput;
    /**
     * The 'USR_Address' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Address>;
  /**
   * Partially updates an existing document in the collection of 'USR_Employee'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateUSR_Employee: (args: {
    /**
     * 'USR_Employee' input values
     */
    data: PartialUpdateUSR_EmployeeInput;
    /**
     * The 'USR_Employee' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Employee>;
  /**
   * Partially updates an existing document in the collection of 'USR_ExaminationCertificate'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateUSR_ExaminationCertificate: (args: {
    /**
     * 'USR_ExaminationCertificate' input values
     */
    data: PartialUpdateUSR_ExaminationCertificateInput;
    /**
     * The 'USR_ExaminationCertificate' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_ExaminationCertificate>;
  /**
   * Partially updates an existing document in the collection of 'USR_InsuranceCompany'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateUSR_InsuranceCompany: (args: {
    /**
     * 'USR_InsuranceCompany' input values
     */
    data: PartialUpdateUSR_InsuranceCompanyInput;
    /**
     * The 'USR_InsuranceCompany' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_InsuranceCompany>;
  /**
   * Partially updates an existing document in the collection of 'USR_InsuranceContract'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateUSR_InsuranceContract: (args: {
    /**
     * 'USR_InsuranceContract' input values
     */
    data: PartialUpdateUSR_InsuranceContractInput;
    /**
     * The 'USR_InsuranceContract' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_InsuranceContract>;
  /**
   * Partially updates an existing document in the collection of 'USR_Patient'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateUSR_Patient: (args: {
    /**
     * 'USR_Patient' input values
     */
    data: PartialUpdateUSR_PatientInput;
    /**
     * The 'USR_Patient' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Patient>;
  /**
   * Partially updates an existing document in the collection of 'USR_User'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'.
   */
  partialUpdateUSR_User: (args: {
    /**
     * 'USR_User' input values
     */
    data: PartialUpdateUSR_UserInput;
    /**
     * The 'USR_User' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_User>;
  /**
   * Update an existing document in the collection of 'CLS_AssignedOrganizationalUnit'
   */
  updateCLS_AssignedOrganizationalUnit: (args: {
    /**
     * 'CLS_AssignedOrganizationalUnit' input values
     */
    data: CLS_AssignedOrganizationalUnitInput;
    /**
     * The 'CLS_AssignedOrganizationalUnit' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_AssignedOrganizationalUnit>;
  /**
   * Update an existing document in the collection of 'CLS_InsuranceAlliance'
   */
  updateCLS_InsuranceAlliance: (args: {
    /**
     * 'CLS_InsuranceAlliance' input values
     */
    data: CLS_InsuranceAllianceInput;
    /**
     * The 'CLS_InsuranceAlliance' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_InsuranceAlliance>;
  /**
   * Update an existing document in the collection of 'CLS_OrganizationalUnit'
   */
  updateCLS_OrganizationalUnit: (args: {
    /**
     * 'CLS_OrganizationalUnit' input values
     */
    data: CLS_OrganizationalUnitInput;
    /**
     * The 'CLS_OrganizationalUnit' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_OrganizationalUnit>;
  /**
   * Update an existing document in the collection of 'CLS_Role'
   */
  updateCLS_Role: (args: {
    /**
     * 'CLS_Role' input values
     */
    data: CLS_RoleInput;
    /**
     * The 'CLS_Role' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_Role>;
  /**
   * Update an existing document in the collection of 'HES_DentalStatus'
   */
  updateHES_DentalStatus: (args: {
    /**
     * 'HES_DentalStatus' input values
     */
    data: HES_DentalStatusInput;
    /**
     * The 'HES_DentalStatus' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<HES_DentalStatus>;
  /**
   * Update an existing document in the collection of 'HES_MedicalFinding'
   */
  updateHES_MedicalFinding: (args: {
    /**
     * 'HES_MedicalFinding' input values
     */
    data: HES_MedicalFindingInput;
    /**
     * The 'HES_MedicalFinding' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<HES_MedicalFinding>;
  /**
   * Update an existing document in the collection of 'TRP_TreatmentPlans'
   */
  updateTRP_TreatmentPlans: (args: {
    /**
     * 'TRP_TreatmentPlans' input values
     */
    data: TRP_TreatmentPlansInput;
    /**
     * The 'TRP_TreatmentPlans' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<TRP_TreatmentPlans>;
  /**
   * Update an existing document in the collection of 'TRP_Treatments'
   */
  updateTRP_Treatments: (args: {
    /**
     * 'TRP_Treatments' input values
     */
    data: TRP_TreatmentsInput;
    /**
     * The 'TRP_Treatments' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<TRP_Treatments>;
  /**
   * Update an existing document in the collection of 'USR_Address'
   */
  updateUSR_Address: (args: {
    /**
     * 'USR_Address' input values
     */
    data: USR_AddressInput;
    /**
     * The 'USR_Address' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Address>;
  /**
   * Update an existing document in the collection of 'USR_Employee'
   */
  updateUSR_Employee: (args: {
    /**
     * 'USR_Employee' input values
     */
    data: USR_EmployeeInput;
    /**
     * The 'USR_Employee' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Employee>;
  /**
   * Update an existing document in the collection of 'USR_ExaminationCertificate'
   */
  updateUSR_ExaminationCertificate: (args: {
    /**
     * 'USR_ExaminationCertificate' input values
     */
    data: USR_ExaminationCertificateInput;
    /**
     * The 'USR_ExaminationCertificate' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_ExaminationCertificate>;
  /**
   * Update an existing document in the collection of 'USR_InsuranceCompany'
   */
  updateUSR_InsuranceCompany: (args: {
    /**
     * 'USR_InsuranceCompany' input values
     */
    data: USR_InsuranceCompanyInput;
    /**
     * The 'USR_InsuranceCompany' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_InsuranceCompany>;
  /**
   * Update an existing document in the collection of 'USR_InsuranceContract'
   */
  updateUSR_InsuranceContract: (args: {
    /**
     * 'USR_InsuranceContract' input values
     */
    data: USR_InsuranceContractInput;
    /**
     * The 'USR_InsuranceContract' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_InsuranceContract>;
  /**
   * Update an existing document in the collection of 'USR_Patient'
   */
  updateUSR_Patient: (args: {
    /**
     * 'USR_Patient' input values
     */
    data: USR_PatientInput;
    /**
     * The 'USR_Patient' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Patient>;
  /**
   * Update an existing document in the collection of 'USR_User'
   */
  updateUSR_User: (args: {
    /**
     * 'USR_User' input values
     */
    data: USR_UserInput;
    /**
     * The 'USR_User' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_User>;
}

export interface Query {
  __typename?: "Query";
  CLS_GetAllOrganizationalUnits: (args?: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
  }) => CLS_OrganizationalUnitPage;
  CLS_GetAllRoles: (args?: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
  }) => CLS_RolePage;
  CLS_GetAssignedOrganizationalUnitsByAuth0Id: (args: {
    auth0Id: Scalars["ID"];
  }) => Maybe<Array<Maybe<CLS_AssignedOrganizationalUnit>>>;
  HES_GetDentalStatusByPatientRef: (args: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
    patientId: Scalars["ID"];
  }) => QueryHES_GetDentalStatusByPatientRefPage;
  HES_GetDentalStatuses: (args?: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
  }) => HES_DentalStatusPage;
  HES_GetMedicalFindings: (args?: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
    isDeleted?: Maybe<Scalars["Boolean"]>;
  }) => QueryHES_GetMedicalFindingsPage;
  HES_GetMedicalFindingsByAirtableId: (args?: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
    airtableId?: Maybe<Scalars["String"]>;
  }) => HES_MedicalFindingPage;
  TRP_GetTreatmentPlansByPatient_GQL: (args: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
    patientId: Scalars["ID"];
  }) => QueryTRP_GetTreatmentPlansByPatient_GQLPage;
  TRP_GetTreatments_GQL: (args?: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
    isDeleted?: Maybe<Scalars["Boolean"]>;
  }) => QueryTRP_GetTreatments_GQLPage;
  USR_CheckIfInsuranceContractExists: (args: {
    insuranceContractData: USR_InsuranceContract_Input;
  }) => Maybe<USR_InsuranceContract>;
  USR_GetEmployees: (args: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
    afterCursorId: Scalars["ID"];
    collectionName: Scalars["String"];
    size: Scalars["Int"];
  }) => QueryUSR_GetEmployeesPage;
  USR_GetInsuranceCompanyById: (args?: {
    id?: Maybe<Scalars["String"]>;
  }) => Maybe<USR_InsuranceCompany>;
  USR_GetInsuranceIdFromTiInput: (args: {
    tiId: Scalars["ID"];
  }) => Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  USR_GetPatients: (args: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
    afterCursorId: Scalars["ID"];
    isArchived: Scalars["Boolean"];
    size: Scalars["Int"];
  }) => QueryUSR_GetPatientsPage;
  USR_GetUserByAuth0Id: (args?: {
    auth0Id?: Maybe<Scalars["String"]>;
  }) => Maybe<USR_User>;
  USR_GetUserByEmail: (args?: {
    email?: Maybe<Scalars["String"]>;
  }) => Maybe<USR_User>;
  USR_GetUserByInsuranceContract: (args: {
    insuranceId: Scalars["ID"];
  }) => Maybe<Array<Maybe<USR_User>>>;
  USR_GetUsers: (args?: {
    /**
     * The pagination cursor.
     */
    _cursor?: Maybe<Scalars["String"]>;
    /**
     * The number of items to return per page.
     */
    _size?: Maybe<Scalars["Int"]>;
  }) => USR_UserPage;
  /**
   * Find a document from the collection of 'CLS_AssignedOrganizationalUnit' by its id.
   */
  findCLS_AssignedOrganizationalUnitByID: (args: {
    /**
     * The 'CLS_AssignedOrganizationalUnit' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_AssignedOrganizationalUnit>;
  /**
   * Find a document from the collection of 'CLS_InsuranceAlliance' by its id.
   */
  findCLS_InsuranceAllianceByID: (args: {
    /**
     * The 'CLS_InsuranceAlliance' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_InsuranceAlliance>;
  /**
   * Find a document from the collection of 'CLS_OrganizationalUnit' by its id.
   */
  findCLS_OrganizationalUnitByID: (args: {
    /**
     * The 'CLS_OrganizationalUnit' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_OrganizationalUnit>;
  /**
   * Find a document from the collection of 'CLS_Role' by its id.
   */
  findCLS_RoleByID: (args: {
    /**
     * The 'CLS_Role' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<CLS_Role>;
  /**
   * Find a document from the collection of 'HES_DentalStatus' by its id.
   */
  findHES_DentalStatusByID: (args: {
    /**
     * The 'HES_DentalStatus' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<HES_DentalStatus>;
  /**
   * Find a document from the collection of 'HES_MedicalFinding' by its id.
   */
  findHES_MedicalFindingByID: (args: {
    /**
     * The 'HES_MedicalFinding' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<HES_MedicalFinding>;
  /**
   * Find a document from the collection of 'TRP_TreatmentPlans' by its id.
   */
  findTRP_TreatmentPlansByID: (args: {
    /**
     * The 'TRP_TreatmentPlans' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<TRP_TreatmentPlans>;
  /**
   * Find a document from the collection of 'TRP_Treatments' by its id.
   */
  findTRP_TreatmentsByID: (args: {
    /**
     * The 'TRP_Treatments' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<TRP_Treatments>;
  /**
   * Find a document from the collection of 'USR_Address' by its id.
   */
  findUSR_AddressByID: (args: {
    /**
     * The 'USR_Address' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Address>;
  /**
   * Find a document from the collection of 'USR_Employee' by its id.
   */
  findUSR_EmployeeByID: (args: {
    /**
     * The 'USR_Employee' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Employee>;
  /**
   * Find a document from the collection of 'USR_ExaminationCertificate' by its id.
   */
  findUSR_ExaminationCertificateByID: (args: {
    /**
     * The 'USR_ExaminationCertificate' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_ExaminationCertificate>;
  /**
   * Find a document from the collection of 'USR_InsuranceCompany' by its id.
   */
  findUSR_InsuranceCompanyByID: (args: {
    /**
     * The 'USR_InsuranceCompany' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_InsuranceCompany>;
  /**
   * Find a document from the collection of 'USR_InsuranceContract' by its id.
   */
  findUSR_InsuranceContractByID: (args: {
    /**
     * The 'USR_InsuranceContract' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_InsuranceContract>;
  /**
   * Find a document from the collection of 'USR_Patient' by its id.
   */
  findUSR_PatientByID: (args: {
    /**
     * The 'USR_Patient' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_Patient>;
  /**
   * Find a document from the collection of 'USR_User' by its id.
   */
  findUSR_UserByID: (args: {
    /**
     * The 'USR_User' document's ID
     */
    id: Scalars["ID"];
  }) => Maybe<USR_User>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  CLS_Address_E: CLS_Address_E;
  CLS_AssignedOrganizationalUnit: CLS_AssignedOrganizationalUnit;
  CLS_InsuranceAlliance: CLS_InsuranceAlliance;
  CLS_LegalEntityMasterData_E: CLS_LegalEntityMasterData_E;
  CLS_OrganizationalUnit: CLS_OrganizationalUnit;
  CLS_OrganizationalUnitPage: CLS_OrganizationalUnitPage;
  CLS_OrganizationalUnits_E: CLS_OrganizationalUnits_E;
  CLS_Role: CLS_Role;
  CLS_RolePage: CLS_RolePage;
  HES_DentalStatus: HES_DentalStatus;
  HES_DentalStatusPage: HES_DentalStatusPage;
  HES_Findings_E: HES_Findings_E;
  HES_MedicalFinding: HES_MedicalFinding;
  HES_MedicalFindingPage: HES_MedicalFindingPage;
  HES_Note_E: HES_Note_E;
  Mutation: Mutation;
  ORC_History_E: ORC_History_E;
  Query: Query;
  QueryHES_GetDentalStatusByPatientRefPage: QueryHES_GetDentalStatusByPatientRefPage;
  QueryHES_GetMedicalFindingsPage: QueryHES_GetMedicalFindingsPage;
  QueryTRP_GetTreatmentPlansByPatient_GQLPage: QueryTRP_GetTreatmentPlansByPatient_GQLPage;
  QueryTRP_GetTreatments_GQLPage: QueryTRP_GetTreatments_GQLPage;
  QueryUSR_GetEmployeesPage: QueryUSR_GetEmployeesPage;
  QueryUSR_GetPatientsPage: QueryUSR_GetPatientsPage;
  Subscription: Subscription;
  TRP_TreatmentPlans: TRP_TreatmentPlans;
  TRP_Treatments: TRP_Treatments;
  TRP_Treatments_E: TRP_Treatments_E;
  TRP_Treatments_Localizations_E: TRP_Treatments_Localizations_E;
  USR_Address: USR_Address;
  USR_CoPaymentStatus_E: USR_CoPaymentStatus_E;
  USR_CostReimbursement_E: USR_CostReimbursement_E;
  USR_DormantEntitlement_E: USR_DormantEntitlement_E;
  USR_Employee: USR_Employee;
  USR_ExaminationCertificate: USR_ExaminationCertificate;
  USR_InsuranceCompany: USR_InsuranceCompany;
  USR_InsuranceContract: USR_InsuranceContract;
  USR_Patient: USR_Patient;
  USR_SelectiveContract_E: USR_SelectiveContract_E;
  USR_User: USR_User;
  USR_UserPage: USR_UserPage;
}
export type SchemaObjectTypesNames =
  | "CLS_Address_E"
  | "CLS_AssignedOrganizationalUnit"
  | "CLS_InsuranceAlliance"
  | "CLS_LegalEntityMasterData_E"
  | "CLS_OrganizationalUnit"
  | "CLS_OrganizationalUnitPage"
  | "CLS_OrganizationalUnits_E"
  | "CLS_Role"
  | "CLS_RolePage"
  | "HES_DentalStatus"
  | "HES_DentalStatusPage"
  | "HES_Findings_E"
  | "HES_MedicalFinding"
  | "HES_MedicalFindingPage"
  | "HES_Note_E"
  | "Mutation"
  | "ORC_History_E"
  | "Query"
  | "QueryHES_GetDentalStatusByPatientRefPage"
  | "QueryHES_GetMedicalFindingsPage"
  | "QueryTRP_GetTreatmentPlansByPatient_GQLPage"
  | "QueryTRP_GetTreatments_GQLPage"
  | "QueryUSR_GetEmployeesPage"
  | "QueryUSR_GetPatientsPage"
  | "Subscription"
  | "TRP_TreatmentPlans"
  | "TRP_Treatments"
  | "TRP_Treatments_E"
  | "TRP_Treatments_Localizations_E"
  | "USR_Address"
  | "USR_CoPaymentStatus_E"
  | "USR_CostReimbursement_E"
  | "USR_DormantEntitlement_E"
  | "USR_Employee"
  | "USR_ExaminationCertificate"
  | "USR_InsuranceCompany"
  | "USR_InsuranceContract"
  | "USR_Patient"
  | "USR_SelectiveContract_E"
  | "USR_User"
  | "USR_UserPage";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  Area: Area | undefined;
  CLS_PatientServing: CLS_PatientServing | undefined;
  CLS_RoleType: CLS_RoleType | undefined;
  CLS_Type: CLS_Type | undefined;
  Depth: Depth | undefined;
  Locale: Locale | undefined;
  ORC_History: ORC_History | undefined;
  Position: Position | undefined;
  USR_DormantType: USR_DormantType | undefined;
  USR_EmployeeStatus: USR_EmployeeStatus | undefined;
  USR_ExaminationCertificationResult:
    | USR_ExaminationCertificationResult
    | undefined;
  USR_InsuranceType: USR_InsuranceType | undefined;
  USR_LegalInsuredType: USR_LegalInsuredType | undefined;
  USR_PatientStatus: USR_PatientStatus | undefined;
  USR_WOP: USR_WOP | undefined;
}
