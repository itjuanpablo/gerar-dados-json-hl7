import type { FormState, HL7Payload } from '../types/hl7'

export function buildHL7Payload(f: FormState): HL7Payload {
  return {
    // ── Fixos ──────────────────────────────────
    sendingApplication: 'TASY',
    sendingFacility: 'PHILIPS',
    receivingApplication: 'VUEPACS',
    receivingFacility: 'PHILIPS',
    processingID: 'P',
    characterSet: '8859/1',

    // ── PID ────────────────────────────────────
    PID: {
      internalID: f.internalID,
      internalTYPE: 'ID',
      documentIDInternational: '',
      documentTYPEInternational: '',
      nationalityInternational: f.nationalityInternational,
      maritalStatusInternational: f.maritalStatusInternational,
      assigningAuthority: f.assigningAuthority,
      givenName: f.givenName,
      familyName: f.familyName,
      familyNameInternational: '',
      givenNameInternational: '',
      familyNameMother: f.familyNameMother,
      dateOfBirth: f.dateOfBirth,
      sex: f.sex,
      streetAddress: f.streetAddress,
      streetAddressInternational: '',
      otherDesignation: f.otherDesignation,
      city: f.city,
      cityInternational: '',
      stateOrProvince: f.stateOrProvince,
      stateOrProvinceInternational: '',
      telephoneNumberHome: '',
      phoneNumberHome: f.phoneNumberHome,
      emailAddressPatient: f.emailAddressPatient,
      telephoneNumberWork: '',
      telephoneNumberWorkInternational: f.phoneNumberHome,
      SSNnumberPatient: f.SSNnumberPatient,
      licenseNumber: f.licenseNumber,
      familyNameAlias: f.familyNameAlias,
      givenNameAlias: f.givenNameAlias,
      givenFullNameAlias: [f.givenNameAlias, f.familyNameAlias].filter(Boolean).join(' '),
      PatientIdentifierList: [
        {
          IDNumber: f.internalID,
          IdentifierTypeCode: 'PI',
          AssigningAuthority: { NamespaceID: f.assigningAuthority },
        },
        {
          IDNumber: f.pid1_IDNumber,     // prontuário (MR)
          IdentifierTypeCode: 'MR',
          AssigningAuthority: { NamespaceID: '' },
        },
        {
          IDNumber: f.SSNnumberPatient,  // CPF (TAX)
          IdentifierTypeCode: 'TAX',
          AssigningAuthority: { NamespaceID: '' },
        },
      ],
    },

    // ── PV1 ────────────────────────────────────
    PV1: {
      patientClass: f.patientClass || '8',
      personLocationTypePointOfCare: f.personLocationTypePointOfCare,
      idNumberDoctorSoliPV1: f.idNumberDoctorSoliPV1,
      familyNameDoctorSoliPV1: f.familyNameDoctorSoliPV1,
      givenNameDoctorSoliPV1: f.givenNameDoctorSoliPV1,
      familyNameDoctorSoliPV1International: '',
      givenNameDoctorSoliPV1International: f.givenNameDoctorSoliPV1International,
      namespaceIdEstabPV1: f.namespaceIdEstabPV1,
      identifierCheckDigitPV1: f.identifierCheckDigitPV1,
      namespaceIdUfCRMPV1: f.namespaceIdUfCRMPV1,
      idNumberVisitNumber: f.idNumberVisitNumber,
      assigningAuthorityIdEstab: f.assigningAuthorityIdEstab,
      accountStatusDtAtend: f.accountStatusDtAtend,
    },

    // ── IN1 — Convênio ──────────────────────────
    IN1: {
      identifierPlanHealth: f.identifierPlanHealth,
      textPlanHealth: f.textPlanHealth,
      idConvenioCard: f.idConvenioCard,
      organizationName: f.organizationName,
      idNumberOrganization: f.idNumberOrganization,
    },

    // ── ORC — array ─────────────────────────────
    ORC: [
      {
        orderControlORC: 'NW',          // fixo
        entityIdentifierIdPedidoORC: f.entityIdentifierIdPedidoORC,
        entityIdentifierAcessNumberORC: f.entityIdentifierAcessNumberORC,
        namespaceIdEstabORC: f.namespaceIdEstabORC,
        orderStatusUF: f.orderStatusUF || 'SC',
        quantityTiming: '1',            // fixo
        endDateTime: f.endDateTime,
        priority: 'N',                  // fixo
        personIdentifier: f.personIdentifier,
        namespaceIdEstab: f.namespaceIdEstab,
        originCode: '21',               // fixo
        originCodeExt: '1',             // fixo
      },
    ],

    // ── OBR ────────────────────────────────────
    OBR: {
      entityIdentifierIdPedidoOBR: f.entityIdentifierIdPedidoOBR,
      entityIdentifierAcessNumberOBR: f.entityIdentifierAcessNumberOBR,
      namespaceIdEstabOBR: f.namespaceIdEstabOBR,
      identifierIdExam: f.identifierIdExam,
      clinicalData: f.clinicalData,
      descriptionObservation: f.descriptionObservation,
      descriptionJustification: f.descriptionJustification,
      alternateIdentifierIdExam: f.alternateIdentifierIdExam,
      textExam: f.textExam,
      nameOfCodingSystem: f.nameOfCodingSystem,
      idNumberDoctorSoliOBR: f.idNumberDoctorSoliOBR,
      familyNameDoctorSoliOBR: f.familyNameDoctorSoliOBR,
      givenNameDoctorSoliOBR: f.givenNameDoctorSoliOBR,
      namespaceIdEstabOBR2: f.namespaceIdEstabOBR2,
      identifierCheckDigitOBR: f.identifierCheckDigitOBR,
      namespaceIdUfCRMOBR: f.namespaceIdUfCRMOBR,
      identifierTypeSgConsOBR: f.identifierTypeSgConsOBR || 'CRM',
      requestedTimeOBRInternational: f.requestedTimeOBRInternational,
      namespaceId: f.namespaceId,
      placerField2: f.placerField2,
      fillerField1MoreIdPedido: f.fillerField1MoreIdPedido,
      fillerField2More: '1',            // fixo
      diagnosticServSectID: f.diagnosticServSectID,
      diagnosticServSectIDInternational: f.diagnosticServSectIDInternational,
      idNumberDoctorExecOBR: f.idNumberDoctorExecOBR,
      familyNameDoctorExecOBR: f.familyNameDoctorExecOBR,
      givenNameDoctorExecOBR: f.givenNameDoctorExecOBR,
      AssigAuthNamespaceIdCRMOBR: f.AssigAuthNamespaceIdCRMOBR,
      AssigAuthUnivIdUFMedExecOBR: f.AssigAuthUnivIdUFMedExecOBR,
      AssigAuthUnivIdTypeSgConsMedExecOBR: '',
      quantityOBR: '1',                 // fixo
      startDateTimeOBR: f.startDateTimeOBR,
      priorityOBR: 'N',                 // fixo
      endDateTimeOBR: f.endDateTimeOBR,
      sideOfProcedure: '',
      classifAbbreviation: f.classifAbbreviation,
    },
  }
}

export function getFileName(f: FormState): string {
  const an = f.entityIdentifierAcessNumberORC || f.entityIdentifierAcessNumberOBR || 'paciente'
  return `hl7_pacs_${an.replace(/\W/g, '_')}.json`
}

export function syntaxHighlight(json: string): string {
  return json
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/("[\w]+")\s*:/g, '<span class="json-key">$1</span>:')
    .replace(/:\s*(".*?")/gs, (m, s) => `: <span class="json-str">${s}</span>`)
    .replace(/:\s*(true|false)/g, ': <span class="json-bool">$1</span>')
    .replace(/:\s*(null)/g, ': <span class="json-null">$1</span>')
    .replace(/:\s*(-?\d+\.?\d*)/g, ': <span class="json-num">$1</span>')
}
