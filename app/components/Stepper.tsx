'use client'

const STEPS = ['Paciente', 'Atendimento', 'Exame', 'Revisar']

interface StepperProps {
  current: number
  onStep: (n: number) => void
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Stepper({ current, onStep }: StepperProps) {
  return (
    <div className="flex border border-slate-200 rounded-xl overflow-hidden mb-5 bg-slate-50">
      {STEPS.map((label, i) => {
        const isDone = i < current
        const isActive = i === current
        return (
          <button
            key={i}
            onClick={() => onStep(i)}
            className={`stepper-btn ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
          >
            <span className="step-num">
              {isDone ? <CheckIcon /> : i + 1}
            </span>
            <span className="hidden sm:inline">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
