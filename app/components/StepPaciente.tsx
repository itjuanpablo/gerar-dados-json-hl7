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
      {/* Identificação */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pid">PID</span>
          <h2 className="section-title">Identificação do paciente</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Código paciente" id="internalID" required
            value={form.internalID} onChange={v => set('internalID', v)} placeholder="Ex: 123456" />
          <Field label="Nacionalidade" id="nationalityInternational"
            value={form.nationalityInternational} onChange={v => set('nationalityInternational', v)} placeholder="Ex: Brasileiro" />
          <Field label="Estado civil" id="maritalStatusInternational"
            value={form.maritalStatusInternational} onChange={v => set('maritalStatusInternational', v)} placeholder="S / C / D / V" />
        </div>
      </div>

      {/* Dados cadastrais */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pid">PID[0]</span>
          <h2 className="section-title">Dados cadastrais</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Nome e nome do meio" id="pid0_givenName" required
            value={form.pid0_givenName} onChange={v => set('pid0_givenName', v)} placeholder="Maria Aparecida" />
          <Field label="Sobrenome" id="pid0_familyName" required
            value={form.pid0_familyName} onChange={v => set('pid0_familyName', v)} placeholder="Silva" />
          <Field label="Data de nascimento (MM/DD/AAAA)" id="pid0_dateOfBirth"
            value={form.pid0_dateOfBirth} onChange={v => set('pid0_dateOfBirth', v)} placeholder="01/15/1985" />
          <Field label="Sexo" id="pid0_sex"
            value={form.pid0_sex} onChange={v => set('pid0_sex', v)} placeholder="M ou F" maxLength={1} />
          <Field label="CPF" id="pid0_SSNnumberPatient"
            value={form.pid0_SSNnumberPatient} onChange={v => set('pid0_SSNnumberPatient', v)} placeholder="000.000.000-00" />
          <Field label="RG" id="pid0_licenseNumber"
            value={form.pid0_licenseNumber} onChange={v => set('pid0_licenseNumber', v)} placeholder="00.000.000-0" />
          <Field label="Celular" id="pid0_phoneNumberHome"
            value={form.pid0_phoneNumberHome} onChange={v => set('pid0_phoneNumberHome', v)} placeholder="(11) 99999-0000" />
          <Field label="Endereço" id="pid0_streetAddress"
            value={form.pid0_streetAddress} onChange={v => set('pid0_streetAddress', v)} placeholder="Rua das Flores, 100" />
          <Field label="Bairro" id="pid0_otherDesignation"
            value={form.pid0_otherDesignation} onChange={v => set('pid0_otherDesignation', v)} placeholder="Centro" />
          <Field label="Município" id="pid0_city"
            value={form.pid0_city} onChange={v => set('pid0_city', v)} placeholder="São Paulo" />
          <Field label="UF" id="pid0_stateOrProvince"
            value={form.pid0_stateOrProvince} onChange={v => set('pid0_stateOrProvince', v)} placeholder="SP" maxLength={2} />
          <Field label="Estabelecimento" id="pid0_assigningAuthority"
            value={form.pid0_assigningAuthority} onChange={v => set('pid0_assigningAuthority', v)} placeholder="Ex: HGE" />
        </div>

        <hr className="section-divider" />
        <div className="sub-label">Nome social (alias)</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Nome e nome do meio (alias)" id="pid0_givenNameAlias"
            value={form.pid0_givenNameAlias} onChange={v => set('pid0_givenNameAlias', v)} placeholder="Nome social" />
          <Field label="Sobrenome (alias)" id="pid0_familyNameAlias"
            value={form.pid0_familyNameAlias} onChange={v => set('pid0_familyNameAlias', v)} placeholder="Sobrenome social" />
        </div>
      </div>

      {/* Prontuário */}
      <div className="section-card">
        <div className="section-header">
          <span className="tag tag-pid">PID[1]</span>
          <h2 className="section-title">Prontuário</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Prontuário" id="pid1_IDNumber"
            value={form.pid1_IDNumber} onChange={v => set('pid1_IDNumber', v)} placeholder="Ex: 0012345" />
          <Field label="Sigla procedimento" id="pid1_IdentifierTypeCode"
            value={form.pid1_IdentifierTypeCode} onChange={v => set('pid1_IdentifierTypeCode', v)} placeholder="Ex: RAD" />
        </div>
      </div>
    </div>
  )
}
