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

      {/* OBR — Identificação do exame */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-obr">OBR</span>
          <h2 className="section-title">Identificação do exame</h2>
        </div>
        <p className="text-xs text-slate-400 mb-3">
          Fixos automáticos: <code className="bg-slate-100 px-1 rounded">fillerField2More = 1</code>, <code className="bg-slate-100 px-1 rounded">quantityOBR = 1</code>, <code className="bg-slate-100 px-1 rounded">priorityOBR = N</code>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Prescrição (entityIdentifierIdPedidoOBR)" id="entityIdentifierIdPedidoOBR" required
            value={form.entityIdentifierIdPedidoOBR} onChange={v => set('entityIdentifierIdPedidoOBR', v)} placeholder="Ex: 127170" />
          <Field label="Access Number (entityIdentifierAcessNumberOBR)" id="entityIdentifierAcessNumberOBR" required
            value={form.entityIdentifierAcessNumberOBR} onChange={v => set('entityIdentifierAcessNumberOBR', v)} placeholder="Ex: 175805" />
          <Field label="Estabelecimento OBR (namespaceIdEstabOBR)" id="namespaceIdEstabOBR"
            value={form.namespaceIdEstabOBR} onChange={v => set('namespaceIdEstabOBR', v)} placeholder="Ex: 115" />
          <Field label="Cód. procedimento (identifierIdExam)" id="identifierIdExam" required
            value={form.identifierIdExam} onChange={v => set('identifierIdExam', v)} placeholder="Ex: 41101014" />
          <Field label="Procedimento interno (alternateIdentifierIdExam)" id="alternateIdentifierIdExam"
            value={form.alternateIdentifierIdExam} onChange={v => set('alternateIdentifierIdExam', v)} placeholder="Ex: 717" />
          <Field label="Descrição exame (textExam)" id="textExam" required
            value={form.textExam} onChange={v => set('textExam', v)} placeholder="Ex: RM - CRANIO" />
          <Field label="Estabelecimento (nameOfCodingSystem)" id="nameOfCodingSystem"
            value={form.nameOfCodingSystem} onChange={v => set('nameOfCodingSystem', v)} placeholder="Ex: 115" />
          <Field label="Estabelecimento OBR2 (namespaceIdEstabOBR2)" id="namespaceIdEstabOBR2"
            value={form.namespaceIdEstabOBR2} onChange={v => set('namespaceIdEstabOBR2', v)} placeholder="Ex: 115" />
          <Field label="Sigla modalidade (diagnosticServSectID)" id="diagnosticServSectID"
            value={form.diagnosticServSectID} onChange={v => set('diagnosticServSectID', v)} placeholder="Ex: MR" maxLength={5} />
          <Field label="Sigla internacional (diagnosticServSectIDInternational)" id="diagnosticServSectIDInternational"
            value={form.diagnosticServSectIDInternational} onChange={v => set('diagnosticServSectIDInternational', v)} placeholder="Ex: MR" maxLength={5} />
          <Field label="Classificação (classifAbbreviation)" id="classifAbbreviation"
            value={form.classifAbbreviation} onChange={v => set('classifAbbreviation', v)} placeholder="Ex: MR" maxLength={5} />
          <Field label="namespaceId (Seq. interna)" id="namespaceId"
            value={form.namespaceId} onChange={v => set('namespaceId', v)} placeholder="Ex: 175805" />
          <Field label="placerField2" id="placerField2"
            value={form.placerField2} onChange={v => set('placerField2', v)} placeholder="Ex: 175805" />
          <Field label="fillerField1MoreIdPedido" id="fillerField1MoreIdPedido"
            value={form.fillerField1MoreIdPedido} onChange={v => set('fillerField1MoreIdPedido', v)} placeholder="Ex: 127170" />
        </div>

        <hr className="section-divider" />
        <div className="sub-label">Datas e dados clínicos</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Dt. solicitação (requestedTimeOBRInternational)" id="requestedTimeOBRInternational"
            value={form.requestedTimeOBRInternational} onChange={v => set('requestedTimeOBRInternational', v)} placeholder="04/08/2026 17:12:10" />
          <Field label="Início exame (startDateTimeOBR)" id="startDateTimeOBR"
            value={form.startDateTimeOBR} onChange={v => set('startDateTimeOBR', v)} placeholder="04/08/2026 17:15:00" />
          <Field label="Fim exame (endDateTimeOBR)" id="endDateTimeOBR"
            value={form.endDateTimeOBR} onChange={v => set('endDateTimeOBR', v)} placeholder="04/08/2026 17:15:00" />
          <Field label="Dados clínicos (clinicalData)" id="clinicalData"
            value={form.clinicalData} onChange={v => set('clinicalData', v)} placeholder="Indicação clínica" />
          <Field label="Observação (descriptionObservation)" id="descriptionObservation"
            value={form.descriptionObservation} onChange={v => set('descriptionObservation', v)} placeholder="Observação" />
          <Field label="Justificativa (descriptionJustification)" id="descriptionJustification"
            value={form.descriptionJustification} onChange={v => set('descriptionJustification', v)} placeholder="Justificativa" />
        </div>
      </div>

      {/* OBR — Médico solicitante */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-obr">OBR</span>
          <h2 className="section-title">Médico solicitante</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Código interno (idNumberDoctorSoliOBR)" id="idNumberDoctorSoliOBR"
            value={form.idNumberDoctorSoliOBR} onChange={v => set('idNumberDoctorSoliOBR', v)} placeholder="Ex: 222795" />
          <Field label="Sobrenome (familyNameDoctorSoliOBR)" id="familyNameDoctorSoliOBR"
            value={form.familyNameDoctorSoliOBR} onChange={v => set('familyNameDoctorSoliOBR', v)} placeholder="Ex: CAMANDUCAIA" />
          <Field label="Nome e meio (givenNameDoctorSoliOBR)" id="givenNameDoctorSoliOBR"
            value={form.givenNameDoctorSoliOBR} onChange={v => set('givenNameDoctorSoliOBR', v)} placeholder="Ex: JOSÉ AUGUSTO DA MOTA E" />
          <Field label="CRM (identifierCheckDigitOBR)" id="identifierCheckDigitOBR"
            value={form.identifierCheckDigitOBR} onChange={v => set('identifierCheckDigitOBR', v)} placeholder="Ex: 20015" />
          <Field label="UF CRM (namespaceIdUfCRMOBR)" id="namespaceIdUfCRMOBR"
            value={form.namespaceIdUfCRMOBR} onChange={v => set('namespaceIdUfCRMOBR', v)} placeholder="Ex: MG" maxLength={2} />
          <Field label="Tipo conselho (identifierTypeSgConsOBR)" id="identifierTypeSgConsOBR"
            value={form.identifierTypeSgConsOBR} onChange={v => set('identifierTypeSgConsOBR', v)} placeholder="CRM" />
          <Field label="Estabelecimento (namespaceIdEstabOBR2)" id="namespaceIdEstabOBR2"
            value={form.namespaceIdEstabOBR2} onChange={v => set('namespaceIdEstabOBR2', v)} placeholder="Ex: 115" />
        </div>
      </div>

      {/* OBR — Médico executor */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-obr">OBR</span>
          <h2 className="section-title">Médico executor <span className="text-slate-400 font-normal text-xs">(opcional)</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Código interno (idNumberDoctorExecOBR)" id="idNumberDoctorExecOBR"
            value={form.idNumberDoctorExecOBR} onChange={v => set('idNumberDoctorExecOBR', v)} placeholder="Código interno" />
          <Field label="Sobrenome (familyNameDoctorExecOBR)" id="familyNameDoctorExecOBR"
            value={form.familyNameDoctorExecOBR} onChange={v => set('familyNameDoctorExecOBR', v)} placeholder="Sobrenome" />
          <Field label="Nome e meio (givenNameDoctorExecOBR)" id="givenNameDoctorExecOBR"
            value={form.givenNameDoctorExecOBR} onChange={v => set('givenNameDoctorExecOBR', v)} placeholder="Nome e nome do meio" />
          <Field label="UF CRM (AssigAuthNamespaceIdCRMOBR)" id="AssigAuthNamespaceIdCRMOBR"
            value={form.AssigAuthNamespaceIdCRMOBR} onChange={v => set('AssigAuthNamespaceIdCRMOBR', v)} placeholder="Ex: MG" maxLength={2} />
          <Field label="CRM (AssigAuthUnivIdUFMedExecOBR)" id="AssigAuthUnivIdUFMedExecOBR"
            value={form.AssigAuthUnivIdUFMedExecOBR} onChange={v => set('AssigAuthUnivIdUFMedExecOBR', v)} placeholder="Ex: 00000" />
        </div>
      </div>

    </div>
  )
}
