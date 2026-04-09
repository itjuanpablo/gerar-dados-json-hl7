'use client'

interface FieldProps {
  label: string
  id: string
  value: string
  onChange: (val: string) => void
  placeholder?: string
  required?: boolean
  maxLength?: number
  className?: string
}

export default function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  required,
  maxLength,
  className = '',
}: FieldProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span className="req">*</span>}
      </label>
      <input
        id={id}
        className="field-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete="off"
      />
    </div>
  )
}
