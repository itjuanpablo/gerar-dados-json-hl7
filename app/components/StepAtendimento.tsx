'use client'

import Field from './Field'
import type { FormState } from '../types/hl7'

interface Props {
  form: FormState
  set: (key: keyof FormState, val: string) => void
}

export default function StepAtendimento({ form, set }: Props) {
  return (
    <div className="space-y-3">
      {/* PID[2] - CPF + setor */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pid">PID[2]</span>
          <h2 className="section-title">CPF e setor de entrega</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="CPF" id="pid2_IDNumber"
            value={form.pid2_IDNumber} onChange={v => set('pid2_IDNumber', v)} placeholder="000.000.000-00" />
          <Field label="Setor de entrega" id="pid2_sectorDelivery"
            value={form.pid2_sectorDelivery} onChange={v => set('pid2_sectorDelivery', v)} placeholder="Ex: RADIOLOGIA" />
        </div>
      </div>

      {/* PV1 - Médico solicitante */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pv1">PV1</span>
          <h2 className="section-title">Médico solicitante</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Nº conselho (CRM)" id="idNumberDoctorSoliPV1"
            value={form.idNumberDoctorSoliPV1} onChange={v => set('idNumberDoctorSoliPV1', v)} placeholder="CRM 00000" />
          <Field label="UF CRM" id="namespaceIdUfCRMPV1"
            value={form.namespaceIdUfCRMPV1} onChange={v => set('namespaceIdUfCRMPV1', v)} placeholder="SP" maxLength={2} />
          <Field label="Sobrenome" id="familyNameDoctorSoliPV1"
            value={form.familyNameDoctorSoliPV1} onChange={v => set('familyNameDoctorSoliPV1', v)} placeholder="Sobrenome" />
          <Field label="Nome e nome do meio" id="givenNameDoctorSoliPV1"
            value={form.givenNameDoctorSoliPV1} onChange={v => set('givenNameDoctorSoliPV1', v)} placeholder="Nome e nome do meio" />
          <Field label="Nome completo" id="givenNameDoctorSoliPV1International"
            value={form.givenNameDoctorSoliPV1International} onChange={v => set('givenNameDoctorSoliPV1International', v)} placeholder="Nome completo" />
          <Field label="Estabelecimento (PV1)" id="namespaceIdEstabPV1"
            value={form.namespaceIdEstabPV1} onChange={v => set('namespaceIdEstabPV1', v)} placeholder="Ex: HGE" />
          <Field label="Nº conselho (check digit)" id="identifierCheckDigitPV1"
            value={form.identifierCheckDigitPV1} onChange={v => set('identifierCheckDigitPV1', v)} placeholder="CRM 00000" />
        </div>
      </div>

      {/* Atendimento e convênio */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pid">Atendimento</span>
          <h2 className="section-title">Atendimento e convênio</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Número de atendimento" id="idNumberVisitNumber" required
            value={form.idNumberVisitNumber} onChange={v => set('idNumberVisitNumber', v)} placeholder="Ex: 202604080001" />
          <Field label="Estabelecimento (atendimento)" id="assigningAuthorityIdEstab"
            value={form.assigningAuthorityIdEstab} onChange={v => set('assigningAuthorityIdEstab', v)} placeholder="Ex: HGE" />
          <Field label="Dt. atendimento (MM/DD/AAAA HH:MM:SS)" id="accountStatusDtAtend"
            value={form.accountStatusDtAtend} onChange={v => set('accountStatusDtAtend', v)} placeholder="04/08/2026 08:00:00" />
          <Field label="Convênio" id="organizationName"
            value={form.organizationName} onChange={v => set('organizationName', v)} placeholder="Ex: UNIMED" />
          <Field label="Código convênio" id="idNumberOrganization"
            value={form.idNumberOrganization} onChange={v => set('idNumberOrganization', v)} placeholder="Ex: 00123" />
          <Field label="Código usuário (convênio)" id="idConvenioCard"
            value={form.idConvenioCard} onChange={v => set('idConvenioCard', v)} placeholder="Código usuário" />
        </div>
      </div>

      {/* ORC - Pedido */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-orc">ORC</span>
          <h2 className="section-title">Pedido / Access Number</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Prescrição" id="entityIdentifierIdPedidoORC" required
            value={form.entityIdentifierIdPedidoORC} onChange={v => set('entityIdentifierIdPedidoORC', v)} placeholder="Ex: 20260408" />
          <Field label="Access Number (Seq. interna)" id="entityIdentifierAcessNumberORC" required
            value={form.entityIdentifierAcessNumberORC} onChange={v => set('entityIdentifierAcessNumberORC', v)} placeholder="Ex: 175805001" />
          <Field label="Data fim (MM/DD/AAAA HH:MM:SS)" id="endDateTime"
            value={form.endDateTime} onChange={v => set('endDateTime', v)} placeholder="04/08/2026 23:59:59" />
          <Field label="Código setor entrega" id="personIdentifier"
            value={form.personIdentifier} onChange={v => set('personIdentifier', v)} placeholder="Ex: 0021" />
          <Field label="Estabelecimento (setor)" id="namespaceIdEstab"
            value={form.namespaceIdEstab} onChange={v => set('namespaceIdEstab', v)} placeholder="Ex: HGE" />
        </div>
      </div>
    </div>
  )
}
