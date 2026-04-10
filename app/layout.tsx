import type { Metadata } from 'next'
import './styles/globals.css'


export const metadata: Metadata = {
  title: 'Gerador de JSON - TASY → VUEPACS',
  description: 'Gerador de payload JSON HL7 para integração TASY → VUEPACS',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
