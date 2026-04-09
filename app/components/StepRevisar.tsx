'use client'

import { useMemo } from 'react'
import type { FormState } from '../types/hl7'
import { buildHL7Payload, getFileName, syntaxHighlight } from '../lib/buildPayload'

interface Props {
  form: FormState
  onDownload: () => void
}

export default function StepRevisar({ form, onDownload }: Props) {
  const payload = useMemo(() => buildHL7Payload(form), [form])
  const fileName = useMemo(() => getFileName(form), [form])
  const jsonStr = useMemo(() => JSON.stringify(payload, null, 2), [payload])
  const highlighted = useMemo(() => syntaxHighlight(jsonStr), [jsonStr])

  const totalFields = Object.values(form).filter(Boolean).length
  const totalKeys = Object.keys(form).length

  return (
    <div className="space-y-3">
      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="metric-cell text-center">
          <div className="metric-label">Campos preenchidos</div>
          <div className="metric-value text-blue-600 text-xl">{totalFields}/{totalKeys}</div>
        </div>
        <div className="metric-cell text-center">
          <div className="metric-label">Arquivo</div>
          <div className="metric-value text-slate-700 text-xs truncate">{fileName}</div>
        </div>
        <div className="metric-cell text-center">
          <div className="metric-label">Tamanho</div>
          <div className="metric-value text-teal-600 text-xl">{(jsonStr.length / 1024).toFixed(1)} kb</div>
        </div>
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
          <span className="text-xs text-slate-500">JSON · UTF-8</span>
        </div>
        <pre
          className="json-body"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </div>

      {/* Download btn */}
      <button onClick={onDownload} className="btn btn-success w-full justify-center py-3 text-base">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v9M5 8l3 3 3-3M2 13h12"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Baixar {fileName}
      </button>
    </div>
  )
}
