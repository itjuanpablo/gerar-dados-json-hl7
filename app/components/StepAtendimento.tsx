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

      {/* PV1 — Atendimento */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pv1">PV1</span>
          <h2 className="section-title">Atendimento</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Número atendimento (idNumberVisitNumber)" id="idNumberVisitNumber" required
            value={form.idNumberVisitNumber} onChange={v => set('idNumberVisitNumber', v)} placeholder="Ex: 121420" />
          <Field label="Estabelecimento (namespaceIdEstabPV1)" id="namespaceIdEstabPV1"
            value={form.namespaceIdEstabPV1} onChange={v => set('namespaceIdEstabPV1', v)} placeholder="Ex: 115" />
          <Field label="Estabelecimento (assigningAuthorityIdEstab)" id="assigningAuthorityIdEstab"
            value={form.assigningAuthorityIdEstab} onChange={v => set('assigningAuthorityIdEstab', v)} placeholder="Ex: 115" />
          <Field label="Dt. atendimento (MM/DD/AAAA HH:MM:SS)" id="accountStatusDtAtend"
            value={form.accountStatusDtAtend} onChange={v => set('accountStatusDtAtend', v)} placeholder="04/08/2026 17:11:37" />
          <Field label="Classe do paciente (patientClass)" id="patientClass"
            value={form.patientClass} onChange={v => set('patientClass', v)} placeholder="Ex: 8" />
          <Field label="Setor de entrega" id="personLocationTypePointOfCare"
            value={form.personLocationTypePointOfCare} onChange={v => set('personLocationTypePointOfCare', v)} placeholder="Ex: RESSONANCIA MAGNETICA..." />
        </div>
      </div>

      {/* PV1 — Médico solicitante */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pv1">PV1</span>
          <h2 className="section-title">Médico solicitante</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Código interno (idNumberDoctorSoliPV1)" id="idNumberDoctorSoliPV1"
            value={form.idNumberDoctorSoliPV1} onChange={v => set('idNumberDoctorSoliPV1', v)} placeholder="Ex: 20015" />
          <Field label="CRM (identifierCheckDigitPV1)" id="identifierCheckDigitPV1"
            value={form.identifierCheckDigitPV1} onChange={v => set('identifierCheckDigitPV1', v)} placeholder="Ex: 20015" />
          <Field label="UF CRM" id="namespaceIdUfCRMPV1"
            value={form.namespaceIdUfCRMPV1} onChange={v => set('namespaceIdUfCRMPV1', v)} placeholder="Ex: MG" maxLength={2} />
          <Field label="Sobrenome (familyNameDoctorSoliPV1)" id="familyNameDoctorSoliPV1"
            value={form.familyNameDoctorSoliPV1} onChange={v => set('familyNameDoctorSoliPV1', v)} placeholder="Ex: CAMANDUCAIA" />
          <Field label="Nome e meio (givenNameDoctorSoliPV1)" id="givenNameDoctorSoliPV1"
            value={form.givenNameDoctorSoliPV1} onChange={v => set('givenNameDoctorSoliPV1', v)} placeholder="Ex: JOSÉ AUGUSTO DA MOTA E" />
          <Field label="Nome completo (givenNameDoctorSoliPV1International)" id="givenNameDoctorSoliPV1International"
            value={form.givenNameDoctorSoliPV1International} onChange={v => set('givenNameDoctorSoliPV1International', v)} placeholder="Nome completo" />
        </div>
      </div>

      {/* IN1 — Convênio */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-orc">IN1</span>
          <h2 className="section-title">Convênio</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Convênio (organizationName)" id="organizationName"
            value={form.organizationName} onChange={v => set('organizationName', v)} placeholder="Ex: UNIMED ITAJUBA" />
          <Field label="Código convênio (idNumberOrganization)" id="idNumberOrganization"
            value={form.idNumberOrganization} onChange={v => set('idNumberOrganization', v)} placeholder="Ex: 119" />
          <Field label="Carteirinha (idConvenioCard)" id="idConvenioCard"
            value={form.idConvenioCard} onChange={v => set('idConvenioCard', v)} placeholder="Ex: 1371005000188001" />
          <Field label="Cód. plano (identifierPlanHealth)" id="identifierPlanHealth"
            value={form.identifierPlanHealth} onChange={v => set('identifierPlanHealth', v)} placeholder="Código do plano" />
          <Field label="Descrição plano (textPlanHealth)" id="textPlanHealth"
            value={form.textPlanHealth} onChange={v => set('textPlanHealth', v)} placeholder="Nome do plano" />
        </div>
      </div>

      {/* ORC — Pedido */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-orc">ORC</span>
          <h2 className="section-title">Pedido / Access Number</h2>
        </div>
        <p className="text-xs text-slate-400 mb-3">
          Campos fixos automáticos: <code className="bg-slate-100 px-1 rounded">orderControlORC = NW</code>, <code className="bg-slate-100 px-1 rounded">quantityTiming = 1</code>, <code className="bg-slate-100 px-1 rounded">priority = N</code>, <code className="bg-slate-100 px-1 rounded">originCode = 21</code>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Prescrição (entityIdentifierIdPedidoORC)" id="entityIdentifierIdPedidoORC" required
            value={form.entityIdentifierIdPedidoORC} onChange={v => set('entityIdentifierIdPedidoORC', v)} placeholder="Ex: 127170" />
          <Field label="Access Number (entityIdentifierAcessNumberORC)" id="entityIdentifierAcessNumberORC" required
            value={form.entityIdentifierAcessNumberORC} onChange={v => set('entityIdentifierAcessNumberORC', v)} placeholder="Ex: 175805" />
          <Field label="Estabelecimento ORC (namespaceIdEstabORC)" id="namespaceIdEstabORC"
            value={form.namespaceIdEstabORC} onChange={v => set('namespaceIdEstabORC', v)} placeholder="Ex: 115" />
          <Field label="Status (orderStatusUF)" id="orderStatusUF"
            value={form.orderStatusUF} onChange={v => set('orderStatusUF', v)} placeholder="Ex: SC" />
          <Field label="Data fim (endDateTime MM/DD/AAAA HH:MM:SS)" id="endDateTime"
            value={form.endDateTime} onChange={v => set('endDateTime', v)} placeholder="04/08/2026 17:15:00" />
          <Field label="Setor entrega (personIdentifier)" id="personIdentifier"
            value={form.personIdentifier} onChange={v => set('personIdentifier', v)} placeholder="Ex: 112" />
          <Field label="Estabelecimento (namespaceIdEstab)" id="namespaceIdEstab"
            value={form.namespaceIdEstab} onChange={v => set('namespaceIdEstab', v)} placeholder="Ex: 115" />
        </div>
      </div>

    </div>
  )
}
