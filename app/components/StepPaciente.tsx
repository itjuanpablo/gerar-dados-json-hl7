'use client'

import Field from './Field'
import type { FormState } from '../types/hl7'

interface Props {
  form: FormState
  set: (key: keyof FormState, val: string) => void
}

export default function StepPaciente({ form, set }: Props) {
  return (
    <div className="space-y-3">

      {/* Identificação principal */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pid">PID</span>
          <h2 className="section-title">Identificação do paciente</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Código paciente (internalID)" id="internalID" required
            value={form.internalID} onChange={v => set('internalID', v)} placeholder="Ex: 355213" />
          <Field label="Estabelecimento (assigningAuthority)" id="assigningAuthority" required
            value={form.assigningAuthority} onChange={v => set('assigningAuthority', v)} placeholder="Ex: 115" />
          <Field label="Nacionalidade" id="nationalityInternational"
            value={form.nationalityInternational} onChange={v => set('nationalityInternational', v)} placeholder="Ex: BRASIL" />
          <Field label="Estado civil" id="maritalStatusInternational"
            value={form.maritalStatusInternational} onChange={v => set('maritalStatusInternational', v)} placeholder="S / C / D / V" />
        </div>
      </div>

      {/* Dados pessoais */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pid">PID</span>
          <h2 className="section-title">Dados pessoais</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Nome e nome do meio (givenName)" id="givenName" required
            value={form.givenName} onChange={v => set('givenName', v)} placeholder="Ex: KAMILLA PEREIRA" />
          <Field label="Sobrenome (familyName)" id="familyName" required
            value={form.familyName} onChange={v => set('familyName', v)} placeholder="Ex: CHIARADIA" />
          <Field label="Data nascimento (MM/DD/AAAA)" id="dateOfBirth"
            value={form.dateOfBirth} onChange={v => set('dateOfBirth', v)} placeholder="10/29/1992" />
          <Field label="Sexo" id="sex"
            value={form.sex} onChange={v => set('sex', v)} placeholder="M ou F" maxLength={1} />
          <Field label="CPF (SSNnumberPatient)" id="SSNnumberPatient"
            value={form.SSNnumberPatient} onChange={v => set('SSNnumberPatient', v)} placeholder="Ex: 12367825696" />
          <Field label="RG (licenseNumber)" id="licenseNumber"
            value={form.licenseNumber} onChange={v => set('licenseNumber', v)} placeholder="Ex: 0000000" />
          <Field label="Celular (phoneNumberHome)" id="phoneNumberHome"
            value={form.phoneNumberHome} onChange={v => set('phoneNumberHome', v)} placeholder="Ex: 35 988114928" />
          <Field label="E-mail" id="emailAddressPatient"
            value={form.emailAddressPatient} onChange={v => set('emailAddressPatient', v)} placeholder="email@exemplo.com" />
          <Field label="Nome da mãe (familyNameMother)" id="familyNameMother"
            value={form.familyNameMother} onChange={v => set('familyNameMother', v)} placeholder="Sobrenome da mãe" />
        </div>

        <hr className="section-divider" />
        <div className="sub-label">Endereço</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Logradouro (streetAddress)" id="streetAddress"
            value={form.streetAddress} onChange={v => set('streetAddress', v)} placeholder="Ex: Estrada Anhumas - 3397" />
          <Field label="Bairro (otherDesignation)" id="otherDesignation"
            value={form.otherDesignation} onChange={v => set('otherDesignation', v)} placeholder="Ex: Anhumas" />
          <Field label="Município (city)" id="city"
            value={form.city} onChange={v => set('city', v)} placeholder="Ex: Itajubá" />
          <Field label="UF (stateOrProvince)" id="stateOrProvince"
            value={form.stateOrProvince} onChange={v => set('stateOrProvince', v)} placeholder="Ex: MG" maxLength={2} />
        </div>

        <hr className="section-divider" />
        <div className="sub-label">Nome social (alias — opcional)</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Nome e meio (givenNameAlias)" id="givenNameAlias"
            value={form.givenNameAlias} onChange={v => set('givenNameAlias', v)} placeholder="Nome social" />
          <Field label="Sobrenome (familyNameAlias)" id="familyNameAlias"
            value={form.familyNameAlias} onChange={v => set('familyNameAlias', v)} placeholder="Sobrenome social" />
        </div>
      </div>

      {/* PatientIdentifierList */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pid">PID</span>
          <h2 className="section-title">PatientIdentifierList</h2>
        </div>
        <p className="text-xs text-slate-400 mb-3">
          PI (código paciente) e TAX (CPF) são preenchidos automaticamente a partir dos campos acima.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Prontuário — IDNumber [MR]" id="pid1_IDNumber"
            value={form.pid1_IDNumber} onChange={v => set('pid1_IDNumber', v)} placeholder="Ex: 91366" />
        </div>
      </div>

    </div>
  )
}
