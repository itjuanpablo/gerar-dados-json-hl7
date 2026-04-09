'use client'

import Field from './Field'
import type { FormState } from '../types/hl7'

interface Props {
  form: FormState
  set: (key: keyof FormState, val: string) => void
}

export default function StepExame({ form, set }: Props) {
  return (
    <div className="space-y-3">
      {/* Dados do exame */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-obr">OBR</span>
          <h2 className="section-title">Dados do exame</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Prescrição" id="entityIdentifierIdPedidoOBR" required
            value={form.entityIdentifierIdPedidoOBR} onChange={v => set('entityIdentifierIdPedidoOBR', v)} placeholder="Ex: 20260408" />
          <Field label="Sequência interna (Access Number)" id="entityIdentifierAcessNumberOBR" required
            value={form.entityIdentifierAcessNumberOBR} onChange={v => set('entityIdentifierAcessNumberOBR', v)} placeholder="Ex: 175805001" />
          <Field label="Código procedimento" id="identifierIdExam" required
            value={form.identifierIdExam} onChange={v => set('identifierIdExam', v)} placeholder="Ex: RX001" />
          <Field label="Procedimento interno" id="alternateIdentifierIdExam"
            value={form.alternateIdentifierIdExam} onChange={v => set('alternateIdentifierIdExam', v)} placeholder="Código interno" />
          <Field label="Descrição do exame" id="textExam" required
            value={form.textExam} onChange={v => set('textExam', v)} placeholder="Ex: Radiografia de tórax" />
          <Field label="Sigla procedimento" id="diagnosticServSectIDInternational"
            value={form.diagnosticServSectIDInternational} onChange={v => set('diagnosticServSectIDInternational', v)} placeholder="Ex: RAD" />
          <Field label="Sequência interna (namespaceId)" id="namespaceId"
            value={form.namespaceId} onChange={v => set('namespaceId', v)} placeholder="Ex: 175805001" />
          <Field label="Sequência interna (placerField2)" id="placerField2"
            value={form.placerField2} onChange={v => set('placerField2', v)} placeholder="Ex: 175805001" />
          <Field label="Prescrição (fillerField1)" id="fillerField1MoreIdPedido"
            value={form.fillerField1MoreIdPedido} onChange={v => set('fillerField1MoreIdPedido', v)} placeholder="Ex: 20260408" />
        </div>
      </div>

      {/* Médico solicitante OBR */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-obr">OBR</span>
          <h2 className="section-title">Médico solicitante</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Código interno" id="idNumberDoctorSoliOBR"
            value={form.idNumberDoctorSoliOBR} onChange={v => set('idNumberDoctorSoliOBR', v)} placeholder="Código interno" />
          <Field label="Sobrenome" id="familyNameDoctorSoliOBR"
            value={form.familyNameDoctorSoliOBR} onChange={v => set('familyNameDoctorSoliOBR', v)} placeholder="Sobrenome" />
          <Field label="Nome e nome do meio" id="givenNameDoctorSoliOBR"
            value={form.givenNameDoctorSoliOBR} onChange={v => set('givenNameDoctorSoliOBR', v)} placeholder="Nome e nome do meio" />
          <Field label="CRM" id="identifierCheckDigitOBR"
            value={form.identifierCheckDigitOBR} onChange={v => set('identifierCheckDigitOBR', v)} placeholder="CRM 00000" />
          <Field label="UF CRM" id="namespaceIdUfCRMOBR"
            value={form.namespaceIdUfCRMOBR} onChange={v => set('namespaceIdUfCRMOBR', v)} placeholder="SP" maxLength={2} />
          <Field label="Dt. solicitação (MM/DD/AAAA HH:MM:SS)" id="requestedTimeOBRInternational"
            value={form.requestedTimeOBRInternational} onChange={v => set('requestedTimeOBRInternational', v)} placeholder="04/08/2026 08:00:00" />
        </div>
      </div>

      {/* Médico executor OBR */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-obr">OBR</span>
          <h2 className="section-title">Médico executor</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Código interno" id="idNumberDoctorExecOBR"
            value={form.idNumberDoctorExecOBR} onChange={v => set('idNumberDoctorExecOBR', v)} placeholder="Código interno" />
          <Field label="Sobrenome" id="familyNameDoctorExecOBR"
            value={form.familyNameDoctorExecOBR} onChange={v => set('familyNameDoctorExecOBR', v)} placeholder="Sobrenome" />
          <Field label="Nome e nome do meio" id="givenNameDoctorExecOBR"
            value={form.givenNameDoctorExecOBR} onChange={v => set('givenNameDoctorExecOBR', v)} placeholder="Nome e nome do meio" />
          <Field label="UF CRM" id="AssigAuthNamespaceIdCRMOBR"
            value={form.AssigAuthNamespaceIdCRMOBR} onChange={v => set('AssigAuthNamespaceIdCRMOBR', v)} placeholder="SP" maxLength={2} />
          <Field label="CRM" id="AssigAuthUnivIdUFMedExecOBR"
            value={form.AssigAuthUnivIdUFMedExecOBR} onChange={v => set('AssigAuthUnivIdUFMedExecOBR', v)} placeholder="CRM 00000" />
          <Field label="Início exame (MM/DD/AAAA HH:MM:00)" id="startDateTimeOBR"
            value={form.startDateTimeOBR} onChange={v => set('startDateTimeOBR', v)} placeholder="04/08/2026 08:00:00" />
          <Field label="Fim exame (MM/DD/AAAA HH:MM:00)" id="endDateTimeOBR"
            value={form.endDateTimeOBR} onChange={v => set('endDateTimeOBR', v)} placeholder="04/08/2026 09:00:00" />
        </div>
      </div>
    </div>
  )
}
