export interface PID0 {
  IDNumber: string
  assigningAuthority: string
  givenName: string
  familyName: string
  dateOfBirth: string
  sex: string
  streetAddress: string
  otherDesignation: string
  city: string
  stateOrProvince: string
  phoneNumberHome: string
  telephoneNumberWorkInternational: string
  SSNnumberPatient: string
  licenseNumber: string
  familyNameAlias: string
  givenNameAlias: string
  givenFullNameAlias: string
  PatientIdentifierList: string
  AssigningAuthority: { NamespaceID: string }
}

export interface PID1 {
  IDNumber: string
  IdentifierTypeCode: string
  AssigningAuthority: { NamespaceID: string }
}

export interface PID2 {
  IDNumber: string
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
  idConvenioCard: string
  organizationName: string
  idNumberOrganization: string
  entityIdentifierIdPedidoORC: string
  entityIdentifierAcessNumberORC: string
  endDateTime: string
  personIdentifier: string
  namespaceIdEstab: string
  originCode: string
  originCodeExt: string
}

export interface OBR {
  entityIdentifierIdPedidoOBR: string
  entityIdentifierAcessNumberOBR: string
  identifierIdExam: string
  alternateIdentifierIdExam: string
  textExam: string
  idNumberDoctorSoliOBR: string
  familyNameDoctorSoliOBR: string
  givenNameDoctorSoliOBR: string
  identifierCheckDigitOBR: string
  namespaceIdUfCRMOBR: string
  requestedTimeOBRInternational: string
  namespaceId: string
  placerField2: string
  fillerField1MoreIdPedido: string
  diagnosticServSectIDInternational: string
  idNumberDoctorExecOBR: string
  familyNameDoctorExecOBR: string
  givenNameDoctorExecOBR: string
  AssigAuthNamespaceIdCRMOBR: string
  AssigAuthUnivIdUFMedExecOBR: string
  startDateTimeOBR: string
  endDateTimeOBR: string
}

export interface HL7Payload {
  sendingApplication: string
  sendingFacility: string
  receivingApplication: string
  receivingFacility: string
  processingID: string
  characterSet: string
  PID: {
    internalID: string
    nationalityInternational: string
    maritalStatusInternational: string
    PatientIdentifierList: [PID0, PID1, PID2]
  }
  OBR: OBR
}

export interface FormState {
  internalID: string
  nationalityInternational: string
  maritalStatusInternational: string
  pid0_givenName: string
  pid0_familyName: string
  pid0_dateOfBirth: string
  pid0_sex: string
  pid0_SSNnumberPatient: string
  pid0_licenseNumber: string
  pid0_phoneNumberHome: string
  pid0_streetAddress: string
  pid0_otherDesignation: string
  pid0_city: string
  pid0_stateOrProvince: string
  pid0_assigningAuthority: string
  pid0_givenNameAlias: string
  pid0_familyNameAlias: string
  pid1_IDNumber: string
  pid1_IdentifierTypeCode: string
  pid2_IDNumber: string
  pid2_sectorDelivery: string
  idNumberDoctorSoliPV1: string
  namespaceIdUfCRMPV1: string
  familyNameDoctorSoliPV1: string
  givenNameDoctorSoliPV1: string
  givenNameDoctorSoliPV1International: string
  namespaceIdEstabPV1: string
  identifierCheckDigitPV1: string
  idNumberVisitNumber: string
  assigningAuthorityIdEstab: string
  accountStatusDtAtend: string
  organizationName: string
  idNumberOrganization: string
  idConvenioCard: string
  entityIdentifierIdPedidoORC: string
  entityIdentifierAcessNumberORC: string
  endDateTime: string
  personIdentifier: string
  namespaceIdEstab: string
  entityIdentifierIdPedidoOBR: string
  entityIdentifierAcessNumberOBR: string
  identifierIdExam: string
  alternateIdentifierIdExam: string
  textExam: string
  diagnosticServSectIDInternational: string
  namespaceId: string
  placerField2: string
  fillerField1MoreIdPedido: string
  idNumberDoctorSoliOBR: string
  familyNameDoctorSoliOBR: string
  givenNameDoctorSoliOBR: string
  identifierCheckDigitOBR: string
  namespaceIdUfCRMOBR: string
  requestedTimeOBRInternational: string
  idNumberDoctorExecOBR: string
  familyNameDoctorExecOBR: string
  givenNameDoctorExecOBR: string
  AssigAuthNamespaceIdCRMOBR: string
  AssigAuthUnivIdUFMedExecOBR: string
  startDateTimeOBR: string
  endDateTimeOBR: string
}

export const INITIAL_FORM_STATE: FormState = Object.fromEntries(
  [
    'internalID','nationalityInternational','maritalStatusInternational',
    'pid0_givenName','pid0_familyName','pid0_dateOfBirth','pid0_sex',
    'pid0_SSNnumberPatient','pid0_licenseNumber','pid0_phoneNumberHome',
    'pid0_streetAddress','pid0_otherDesignation','pid0_city','pid0_stateOrProvince',
    'pid0_assigningAuthority','pid0_givenNameAlias','pid0_familyNameAlias',
    'pid1_IDNumber','pid1_IdentifierTypeCode',
    'pid2_IDNumber','pid2_sectorDelivery',
    'idNumberDoctorSoliPV1','namespaceIdUfCRMPV1','familyNameDoctorSoliPV1',
    'givenNameDoctorSoliPV1','givenNameDoctorSoliPV1International','namespaceIdEstabPV1',
    'identifierCheckDigitPV1','idNumberVisitNumber','assigningAuthorityIdEstab',
    'accountStatusDtAtend','organizationName','idNumberOrganization','idConvenioCard',
    'entityIdentifierIdPedidoORC','entityIdentifierAcessNumberORC','endDateTime',
    'personIdentifier','namespaceIdEstab',
    'entityIdentifierIdPedidoOBR','entityIdentifierAcessNumberOBR',
    'identifierIdExam','alternateIdentifierIdExam','textExam',
    'diagnosticServSectIDInternational','namespaceId','placerField2','fillerField1MoreIdPedido',
    'idNumberDoctorSoliOBR','familyNameDoctorSoliOBR','givenNameDoctorSoliOBR',
    'identifierCheckDigitOBR','namespaceIdUfCRMOBR','requestedTimeOBRInternational',
    'idNumberDoctorExecOBR','familyNameDoctorExecOBR','givenNameDoctorExecOBR',
    'AssigAuthNamespaceIdCRMOBR','AssigAuthUnivIdUFMedExecOBR',
    'startDateTimeOBR','endDateTimeOBR',
  ].map(k => [k, ''])
) as FormState
