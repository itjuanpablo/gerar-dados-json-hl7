'use client'

import { useMemo } from 'react'
import type { FormState } from '../types/hl7'
import { buildHL7Payload, getFileName, syntaxHighlight } from '../lib/buildPayload'

interface Props {
  form: FormState
  onDownload: () => void
}

export default function StepRevisar({ form, onDownload }: Props) {
  const payload    = useMemo(() => buildHL7Payload(form), [form])
  const fileName   = useMemo(() => getFileName(form), [form])
  const jsonStr    = useMemo(() => JSON.stringify(payload, null, 2), [payload])
  const highlighted = useMemo(() => syntaxHighlight(jsonStr), [jsonStr])

  const filled = Object.values(form).filter(Boolean).length
  const total  = Object.keys(form).length

  // Campos obrigatórios
  const required = [
    'internalID', 'assigningAuthority', 'givenName', 'familyName',
    'idNumberVisitNumber', 'entityIdentifierIdPedidoORC',
    'entityIdentifierAcessNumberORC', 'entityIdentifierIdPedidoOBR',
    'entityIdentifierAcessNumberOBR', 'identifierIdExam', 'textExam',
  ]
  const missing = required.filter(k => !form[k as keyof FormState])

  return (
    <div className="space-y-3">

      {/* Alertas de campos obrigatórios */}
      {missing.length > 0 && (
        <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 6v4M8 11.5v.5M3 13h10L8 3 3 13z"
              stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="text-xs font-medium text-amber-800 mb-1">Campos obrigatórios não preenchidos:</p>
            <p className="text-xs text-amber-700">{missing.join(', ')}</p>
          </div>
        </div>
      )}

      {/* Métricas */}
      <div className="grid grid-cols-3 gap-3">
        <div className="metric-cell text-center">
          <div className="metric-label">Preenchidos</div>
          <div className="metric-value text-blue-600 text-xl">{filled}/{total}</div>
        </div>
        <div className="metric-cell text-center">
          <div className="metric-label">Arquivo</div>
          <div className="metric-value text-slate-600 text-xs truncate" title={fileName}>{fileName}</div>
        </div>
        <div className="metric-cell text-center">
          <div className="metric-label">Tamanho</div>
          <div className="metric-value text-teal-600 text-xl">{(jsonStr.length / 1024).toFixed(1)} kb</div>
        </div>
      </div>

      {/* Estrutura do payload */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { tag: 'PID', color: 'tag-pid', desc: 'Paciente' },
          { tag: 'PV1 + IN1', color: 'tag-pv1', desc: 'Atendimento' },
          { tag: 'ORC[ ]', color: 'tag-orc', desc: 'Pedido (array)' },
          { tag: 'OBR', color: 'tag-obr', desc: 'Exame' },
        ].map(s => (
          <div key={s.tag} className="metric-cell flex items-center gap-2">
            <span className={`tag ${s.color}`}>{s.tag}</span>
            <span className="text-xs text-slate-500">{s.desc}</span>
          </div>
        ))}
      </div>

      {/* JSON preview */}
      <div className="json-preview">
        <div className="json-topbar">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-teal-500/60" />
            </div>
            <span className="json-filename">{fileName}</span>
          </div>
          <span className="text-xs text-slate-500">JSON · 8859/1</span>
        </div>
        <pre
          className="json-body"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </div>

      <button
        onClick={onDownload}
        className="btn btn-success w-full justify-center py-3 text-base"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v9M5 8l3 3 3-3M2 13h12"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Baixar {fileName}
      </button>
    </div>
  )
}
