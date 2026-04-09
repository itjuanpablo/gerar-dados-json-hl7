# Gerador de Payload em formato JSON

Aplicação Next.js 14 para gerar payloads HL7 (JSON) para integração TASY → VUEPACS.

## Estrutura de arquivos

```
hl7-pacs/
├── app/
│   ├── components/
│   │   ├── Field.tsx          # Input reutilizável com label
│   │   ├── Stepper.tsx        # Navegação por etapas
│   │   ├── StepPaciente.tsx   # Etapa 1 — dados do paciente
│   │   ├── StepAtendimento.tsx# Etapa 2 — atendimento, PV1, ORC
│   │   ├── StepExame.tsx      # Etapa 3 — dados OBR
│   │   ├── StepRevisar.tsx    # Etapa 4 — preview + download
│   │   └── Toast.tsx          # Notificação de feedback
│   ├── lib/
│   │   └── buildPayload.ts    # Monta o JSON HL7 e faz syntax highlight
│   ├── styles/
│   │   └── globals.css        # Tailwind + design system (componentes CSS)
│   ├── types/
│   │   └── hl7.ts             # Tipos TypeScript + estado inicial do form
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Página principal (orquestra tudo)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── next.config.js
```

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Acessar no browser
# http://localhost:3000
```

## Como fazer build para produção

```bash
npm run build
npm start
```

## Funcionalidades

- **4 etapas** com stepper visual e barra de progresso
- **Valores fixos** automáticos: TASY, VUEPACS, PHILIPS, processingID P, charset 8859/1
- **Formulário completo** com todos os campos do modelo `modelo-json_hl7.json`
  - PID[0] — Dados cadastrais do paciente
  - PID[1] — Prontuário
  - PID[2] — CPF + PV1 (médico solicitante, atendimento, convênio, ORC)
  - OBR — Dados do exame, médico solicitante e executor
- **Preview JSON** com syntax highlighting (etapa 4)
- **Download** do arquivo `.json` nomeado automaticamente com o Access Number
- **TypeScript** estrito em todos os arquivos
- **Tailwind CSS** com design system via `@layer components`
- **Responsivo** — funciona em mobile, tablet e desktop

## Campos obrigatórios (marcados com *)

- Código paciente
- Nome e nome do meio
- Sobrenome
- Número de atendimento
- Prescrição ORC
- Access Number ORC
- Prescrição OBR
- Access Number OBR
- Código procedimento
- Descrição do exame

## Query SQL de auditoria

A consulta `hl7_pacs_by_an.sql` pode ser usada para verificar se o payload
foi enviado corretamente ao PACS. Filtre pelo `entityIdentifierAcessNumberORC`
gerado neste formulário.
