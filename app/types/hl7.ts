// Tipos baseados no modelo-payload.json real

export interface HL7Payload {
  sendingApplication: string
  sendingFacility: string
  receivingApplication: string
  receivingFacility: string
  processingID: string
  characterSet: string
  PID: PID
  PV1: PV1
  IN1: IN1
  ORC: ORC[]
  OBR: OBR
}

export interface PatientIdentifier {
  IDNumber: string
  IdentifierTypeCode: string
  AssigningAuthority: { NamespaceID: string }
}

export interface PID {
  internalID: string
  internalTYPE: string
  documentIDInternational: string
  documentTYPEInternational: string
  nationalityInternational: string
  maritalStatusInternational: string
  assigningAuthority: string
  givenName: string
  familyName: string
  familyNameInternational: string
  givenNameInternational: string
  familyNameMother: string
  dateOfBirth: string
  sex: string
  streetAddress: string
  streetAddressInternational: string
  otherDesignation: string
  city: string
  cityInternational: string
  stateOrProvince: string
  stateOrProvinceInternational: string
  telephoneNumberHome: string
  phoneNumberHome: string
  emailAddressPatient: string
  telephoneNumberWork: string
  telephoneNumberWorkInternational: string
  SSNnumberPatient: string
  licenseNumber: string
  familyNameAlias: string
  givenNameAlias: string
  givenFullNameAlias: string
  PatientIdentifierList: PatientIdentifier[]
}

export interface PV1 {
  patientClass: string
  personLocationTypePointOfCare: string
  idNumberDoctorSoliPV1: string
  familyNameDoctorSoliPV1: string
  givenNameDoctorSoliPV1: string
  familyNameDoctorSoliPV1International: string
  givenNameDoctorSoliPV1International: string
  namespaceIdEstabPV1: string
  identifierCheckDigitPV1: string
  namespaceIdUfCRMPV1: string
  idNumberVisitNumber: string
  assigningAuthorityIdEstab: string
  accountStatusDtAtend: string
}

export interface IN1 {
  identifierPlanHealth: string
  textPlanHealth: string
  idConvenioCard: string
  organizationName: string
  idNumberOrganization: string
}

export interface ORC {
  orderControlORC: string
  entityIdentifierIdPedidoORC: string
  entityIdentifierAcessNumberORC: string
  namespaceIdEstabORC: string
  orderStatusUF: string
  quantityTiming: string
  endDateTime: string
  priority: string
  personIdentifier: string
  namespaceIdEstab: string
  originCode: string
  originCodeExt: string
}

export interface OBR {
  entityIdentifierIdPedidoOBR: string
  entityIdentifierAcessNumberOBR: string
  namespaceIdEstabOBR: string
  identifierIdExam: string
  clinicalData: string
  descriptionObservation: string
  descriptionJustification: string
  alternateIdentifierIdExam: string
  textExam: string
  nameOfCodingSystem: string
  idNumberDoctorSoliOBR: string
  familyNameDoctorSoliOBR: string
  givenNameDoctorSoliOBR: string
  namespaceIdEstabOBR2: string
  identifierCheckDigitOBR: string
  namespaceIdUfCRMOBR: string
  identifierTypeSgConsOBR: string
  requestedTimeOBRInternational: string
  namespaceId: string
  placerField2: string
  fillerField1MoreIdPedido: string
  fillerField2More: string
  diagnosticServSectID: string
  diagnosticServSectIDInternational: string
  idNumberDoctorExecOBR: string
  familyNameDoctorExecOBR: string
  givenNameDoctorExecOBR: string
  AssigAuthNamespaceIdCRMOBR: string
  AssigAuthUnivIdUFMedExecOBR: string
  AssigAuthUnivIdTypeSgConsMedExecOBR: string
  quantityOBR: string
  startDateTimeOBR: string
  priorityOBR: string
  endDateTimeOBR: string
  sideOfProcedure: string
  classifAbbreviation: string
}

// ─────────────────────────────────────────────
// FormState — apenas campos que o usuário preenche
// Campos automáticos/fixos ficam em buildPayload.ts
// ─────────────────────────────────────────────

export interface FormState {
  // PID
  internalID: string
  nationalityInternational: string
  maritalStatusInternational: string
  assigningAuthority: string
  givenName: string
  familyName: string
  dateOfBirth: string
  sex: string
  phoneNumberHome: string
  SSNnumberPatient: string
  licenseNumber: string
  streetAddress: string
  otherDesignation: string
  city: string
  stateOrProvince: string
  emailAddressPatient: string
  familyNameMother: string
  givenNameAlias: string
  familyNameAlias: string
  pid1_IDNumber: string   // prontuário
  pid2_IDNumber: string   // CPF na lista

  // PV1
  patientClass: string
  personLocationTypePointOfCare: string
  idNumberDoctorSoliPV1: string
  familyNameDoctorSoliPV1: string
  givenNameDoctorSoliPV1: string
  givenNameDoctorSoliPV1International: string
  namespaceIdEstabPV1: string
  identifierCheckDigitPV1: string
  namespaceIdUfCRMPV1: string
  idNumberVisitNumber: string
  assigningAuthorityIdEstab: string
  accountStatusDtAtend: string

  // IN1
  identifierPlanHealth: string
  textPlanHealth: string
  idConvenioCard: string
  organizationName: string
  idNumberOrganization: string

  // ORC
  entityIdentifierIdPedidoORC: string
  entityIdentifierAcessNumberORC: string
  namespaceIdEstabORC: string
  orderStatusUF: string
  endDateTime: string
  personIdentifier: string
  namespaceIdEstab: string

  // OBR
  entityIdentifierIdPedidoOBR: string
  entityIdentifierAcessNumberOBR: string
  namespaceIdEstabOBR: string
  identifierIdExam: string
  alternateIdentifierIdExam: string
  textExam: string
  nameOfCodingSystem: string
  clinicalData: string
  descriptionObservation: string
  descriptionJustification: string
  idNumberDoctorSoliOBR: string
  familyNameDoctorSoliOBR: string
  givenNameDoctorSoliOBR: string
  namespaceIdEstabOBR2: string
  identifierCheckDigitOBR: string
  namespaceIdUfCRMOBR: string
  identifierTypeSgConsOBR: string
  requestedTimeOBRInternational: string
  namespaceId: string
  placerField2: string
  fillerField1MoreIdPedido: string
  diagnosticServSectID: string
  diagnosticServSectIDInternational: string
  classifAbbreviation: string
  startDateTimeOBR: string
  endDateTimeOBR: string
  idNumberDoctorExecOBR: string
  familyNameDoctorExecOBR: string
  givenNameDoctorExecOBR: string
  AssigAuthNamespaceIdCRMOBR: string
  AssigAuthUnivIdUFMedExecOBR: string
}

export const INITIAL_FORM_STATE: FormState = {
  internalID: '', nationalityInternational: '', maritalStatusInternational: '',
  assigningAuthority: '', givenName: '', familyName: '', dateOfBirth: '', sex: '',
  phoneNumberHome: '', SSNnumberPatient: '', licenseNumber: '',
  streetAddress: '', otherDesignation: '', city: '', stateOrProvince: '',
  emailAddressPatient: '', familyNameMother: '', givenNameAlias: '', familyNameAlias: '',
  pid1_IDNumber: '', pid2_IDNumber: '',

  patientClass: '8', personLocationTypePointOfCare: '',
  idNumberDoctorSoliPV1: '', familyNameDoctorSoliPV1: '',
  givenNameDoctorSoliPV1: '', givenNameDoctorSoliPV1International: '',
  namespaceIdEstabPV1: '', identifierCheckDigitPV1: '', namespaceIdUfCRMPV1: '',
  idNumberVisitNumber: '', assigningAuthorityIdEstab: '', accountStatusDtAtend: '',

  identifierPlanHealth: '', textPlanHealth: '',
  idConvenioCard: '', organizationName: '', idNumberOrganization: '',

  entityIdentifierIdPedidoORC: '', entityIdentifierAcessNumberORC: '',
  namespaceIdEstabORC: '', orderStatusUF: 'SC', endDateTime: '',
  personIdentifier: '', namespaceIdEstab: '',

  entityIdentifierIdPedidoOBR: '', entityIdentifierAcessNumberOBR: '',
  namespaceIdEstabOBR: '', identifierIdExam: '', alternateIdentifierIdExam: '',
  textExam: '', nameOfCodingSystem: '', clinicalData: '',
  descriptionObservation: '', descriptionJustification: '',
  idNumberDoctorSoliOBR: '', familyNameDoctorSoliOBR: '', givenNameDoctorSoliOBR: '',
  namespaceIdEstabOBR2: '', identifierCheckDigitOBR: '', namespaceIdUfCRMOBR: '',
  identifierTypeSgConsOBR: 'CRM', requestedTimeOBRInternational: '',
  namespaceId: '', placerField2: '', fillerField1MoreIdPedido: '',
  diagnosticServSectID: '', diagnosticServSectIDInternational: '',
  classifAbbreviation: '', startDateTimeOBR: '', endDateTimeOBR: '',
  idNumberDoctorExecOBR: '', familyNameDoctorExecOBR: '', givenNameDoctorExecOBR: '',
  AssigAuthNamespaceIdCRMOBR: '', AssigAuthUnivIdUFMedExecOBR: '',
}
