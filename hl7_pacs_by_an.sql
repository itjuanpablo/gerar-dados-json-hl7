/*
Arquivo: consulta_envio_hl7_pacs_por_access_number.sql

Descrição:
Consulta logs de integração na tabela TASY.TIE_OUTBOUND para identificar
mensagens HL7 enviadas ao PACS em uma data específica (08/04/2026),
filtrando por um Access Number (ORC) específico presente no payload.

Objetivo:
Rastrear e validar o envio de exames para o PACS, auxiliando na análise
de falhas ou auditoria de integrações.

Filtros aplicados:
- Apenas registros com CONSUMER definido
- Eventos de envio HL7 para PACS (send.hl7.default.pacs)
- Payload contendo Access Number iniciando com "175805" (exemplo de filtro específico)
- Intervalo de data: 08/04/2026 (dia completo)

Ordenação:
- Resultados mais recentes primeiro (DT_INSERT_OUTBOUND DESC)
*/

SELECT
  DT_INSERT_INBOUND,
  DT_INSERT_OUTBOUND,
  DT_FINISHED,
  STATUS,
  EVENT,
  PAYLOAD,
  INTEGRATION_RESULT
FROM
  TASY.TIE_OUTBOUND
WHERE
  CONSUMER IS NOT NULL
  AND EVENT LIKE '%send.hl7.default.pacs%'
  AND PAYLOAD LIKE '%"entityIdentifierAcessNumberORC":"175805%'
  AND DT_INSERT_OUTBOUND BETWEEN TO_TIMESTAMP('2026-04-08 00:00:00', 'YYYY-MM-DD HH24:MI:SS')
  AND TO_TIMESTAMP('2026-04-08 23:59:59', 'YYYY-MM-DD HH24:MI:SS')
ORDER BY
  DT_INSERT_OUTBOUND DESC;
