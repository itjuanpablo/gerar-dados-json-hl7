'use client'

import { useState, useCallback } from 'react'
import Stepper from './components/Stepper'
import StepPaciente from './components/StepPaciente'
import StepAtendimento from './components/StepAtendimento'
import StepExame from './components/StepExame'
import StepRevisar from './components/StepRevisar'
import Toast from './components/Toast'
import type { FormState } from './types/hl7'
import { INITIAL_FORM_STATE } from './types/hl7'
import { buildHL7Payload, getFileName } from './lib/buildPayload'

const FIXED = [
  { label: 'Sending',    value: 'TASY' },
  { label: 'Receiving',  value: 'VUEPACS' },
  { label: 'Facility',   value: 'PHILIPS' },
  { label: 'Processing', value: 'P' },
  { label: 'Charset',    value: '8859/1' },
]

export default function HomePage() {
  const [step, setStep]   = useState(0)
  const [form, setForm]   = useState<FormState>(INITIAL_FORM_STATE)
  const [toast, setToast] = useState({ msg: '', key: 0 })

  const set = useCallback((key: keyof FormState, val: string) => {
    setForm(prev => ({ ...prev, [key]: val }))
  }, [])

  function showToast(msg: string) {
    setToast(prev => ({ msg, key: prev.key + 1 }))
  }

  function handleClear() {
    setForm(INITIAL_FORM_STATE)
    setStep(0)
    showToast('Formulário limpo com sucesso.')
  }

  function handleDownload() {
    const payload  = buildHL7Payload(form)
    const fileName = getFileName(form)
    const blob     = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url      = URL.createObjectURL(blob)
    const a        = document.createElement('a')
    a.href     = url
    a.download = fileName
    a.click()
    URL.revokeObjectURL(url)
    showToast(`Arquivo ${fileName} baixado com sucesso.`)
  }

  const progress = ((step + 1) / 4) * 100

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
                Gerador HL7 — PACS
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Payload JSON para integração TASY → VUEPACS / PHILIPS
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                <span className="chip bg-blue-50 text-blue-700 border-blue-200">TASY → VUEPACS</span>
                <span className="chip bg-teal-50  text-teal-700 border-teal-200">processingID: P</span>
                <span className="chip bg-slate-100 text-slate-500 border-slate-200">charset 8859/1</span>
                <span className="chip bg-purple-50 text-purple-700 border-purple-200">ORC como array</span>
              </div>
            </div>
            <button onClick={handleClear} className="btn btn-ghost">
              Limpar tudo
            </button>
          </div>
        </div>

        {/* Valores fixos */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-5">
          {FIXED.map(f => (
            <div key={f.label} className="metric-cell">
              <div className="metric-label">{f.label}</div>
              <div className="metric-value">{f.value}</div>
            </div>
          ))}
        </div>

        {/* Barra de progresso */}
        <div className="h-0.5 bg-slate-200 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Stepper */}
        <Stepper current={step} onStep={setStep} />

        {/* Conteúdo da etapa */}
        {step === 0 && <StepPaciente    form={form} set={set} />}
        {step === 1 && <StepAtendimento form={form} set={set} />}
        {step === 2 && <StepExame       form={form} set={set} />}
        {step === 3 && <StepRevisar     form={form} onDownload={handleDownload} />}

        {/* Navegação */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-200">
          {step > 0 ? (
            <button onClick={() => setStep(s => s - 1)} className="btn btn-secondary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Anterior
            </button>
          ) : <div />}

          {step < 3 ? (
            <button onClick={() => setStep(s => s + 1)} className="btn btn-primary">
              Próximo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : (
            <button onClick={handleDownload} className="btn btn-success">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v8M4 7.5l3 3 3-3M2 12h10"
                  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Baixar JSON
            </button>
          )}
        </div>

      </div>
      <Toast message={toast.msg} show={toast.key > 0} key={toast.key} />
    </div>
  )
}
