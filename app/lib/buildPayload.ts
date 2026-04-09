import type { FormState, HL7Payload } from '../types/hl7'

export function buildHL7Payload(f: FormState): HL7Payload {
  return {
    sendingApplication: 'TASY',
    sendingFacility: 'PHILIPS',
    receivingApplication: 'VUEPACS',
    receivingFacility: 'PHILIPS',
    processingID: 'P',
    characterSet: '8859/1',
    PID: {
      internalID: f.internalID,
      nationalityInternational: f.nationalityInternational,
      maritalStatusInternational: f.maritalStatusInternational,
      PatientIdentifierList: [
        {
          IDNumber: f.internalID,
          assigningAuthority: f.pid0_assigningAuthority,
          givenName: f.pid0_givenName,
          familyName: f.pid0_familyName,
          dateOfBirth: f.pid0_dateOfBirth,
          sex: f.pid0_sex,
          streetAddress: f.pid0_streetAddress,
          otherDesignation: f.pid0_otherDesignation,
          city: f.pid0_city,
          stateOrProvince: f.pid0_stateOrProvince,
          phoneNumberHome: f.pid0_phoneNumberHome,
          telephoneNumberWorkInternational: f.pid0_phoneNumberHome,
          SSNnumberPatient: f.pid0_SSNnumberPatient,
          licenseNumber: f.pid0_licenseNumber,
          familyNameAlias: f.pid0_familyNameAlias,
          givenNameAlias: f.pid0_givenNameAlias,
          givenFullNameAlias: [f.pid0_givenNameAlias, f.pid0_familyNameAlias].filter(Boolean).join(' '),
          PatientIdentifierList: f.internalID,
          AssigningAuthority: { NamespaceID: f.pid0_assigningAuthority },
        },
        {
          IDNumber: f.pid1_IDNumber,
          IdentifierTypeCode: f.pid1_IdentifierTypeCode,
          AssigningAuthority: { NamespaceID: '' },
        },
        {
          IDNumber: f.pid2_IDNumber,
          personLocationTypePointOfCare: f.pid2_sectorDelivery,
          idNumberDoctorSoliPV1: f.idNumberDoctorSoliPV1,
          familyNameDoctorSoliPV1: f.familyNameDoctorSoliPV1,
          givenNameDoctorSoliPV1: f.givenNameDoctorSoliPV1,
          givenNameDoctorSoliPV1International: f.givenNameDoctorSoliPV1International,
          namespaceIdEstabPV1: f.namespaceIdEstabPV1,
          identifierCheckDigitPV1: f.identifierCheckDigitPV1,
          namespaceIdUfCRMPV1: f.namespaceIdUfCRMPV1,
          idNumberVisitNumber: f.idNumberVisitNumber,
          assigningAuthorityIdEstab: f.assigningAuthorityIdEstab,
          accountStatusDtAtend: f.accountStatusDtAtend,
          idConvenioCard: f.idConvenioCard,
          organizationName: f.organizationName,
          idNumberOrganization: f.idNumberOrganization,
          entityIdentifierIdPedidoORC: f.entityIdentifierIdPedidoORC,
          entityIdentifierAcessNumberORC: f.entityIdentifierAcessNumberORC,
          endDateTime: f.endDateTime,
          personIdentifier: f.personIdentifier,
          namespaceIdEstab: f.namespaceIdEstab,
          originCode: '21',
          originCodeExt: '1',
        },
      ],
    },
    OBR: {
      entityIdentifierIdPedidoOBR: f.entityIdentifierIdPedidoOBR,
      entityIdentifierAcessNumberOBR: f.entityIdentifierAcessNumberOBR,
      identifierIdExam: f.identifierIdExam,
      alternateIdentifierIdExam: f.alternateIdentifierIdExam,
      textExam: f.textExam,
      idNumberDoctorSoliOBR: f.idNumberDoctorSoliOBR,
      familyNameDoctorSoliOBR: f.familyNameDoctorSoliOBR,
      givenNameDoctorSoliOBR: f.givenNameDoctorSoliOBR,
      identifierCheckDigitOBR: f.identifierCheckDigitOBR,
      namespaceIdUfCRMOBR: f.namespaceIdUfCRMOBR,
      requestedTimeOBRInternational: f.requestedTimeOBRInternational,
      namespaceId: f.namespaceId,
      placerField2: f.placerField2,
      fillerField1MoreIdPedido: f.fillerField1MoreIdPedido,
      diagnosticServSectIDInternational: f.diagnosticServSectIDInternational,
      idNumberDoctorExecOBR: f.idNumberDoctorExecOBR,
      familyNameDoctorExecOBR: f.familyNameDoctorExecOBR,
      givenNameDoctorExecOBR: f.givenNameDoctorExecOBR,
      AssigAuthNamespaceIdCRMOBR: f.AssigAuthNamespaceIdCRMOBR,
      AssigAuthUnivIdUFMedExecOBR: f.AssigAuthUnivIdUFMedExecOBR,
      startDateTimeOBR: f.startDateTimeOBR,
      endDateTimeOBR: f.endDateTimeOBR,
    },
  }
}

export function getFileName(f: FormState): string {
  const an = f.entityIdentifierAcessNumberORC || f.entityIdentifierAcessNumberOBR || 'paciente'
  return `hl7_pacs_${an.replace(/\W/g, '_')}.json`
}

export function syntaxHighlight(json: string): string {
  return json
    .replace(/("[\w]+")\s*:/g, '<span class="json-key">$1</span>:')
    .replace(/:\s*(".*?")/gs, ': <span class="json-str">$1</span>')
    .replace(/:\s*(true|false)/g, ': <span class="json-bool">$1</span>')
    .replace(/:\s*(null)/g, ': <span class="json-null">$1</span>')
    .replace(/:\s*(-?\d+\.?\d*)/g, ': <span class="json-num">$1</span>')
}
