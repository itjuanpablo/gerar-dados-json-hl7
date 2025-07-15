# Valores automáticos (fixos)
$sendingApplication = 'TASY'
$sendingFacility = 'PHILIPS'
$receivingApplication = 'VUEPACS'
$receivingFacility = 'PHILIPS'

$json = @{
  sendingApplication = $sendingApplication
  sendingFacility = $sendingFacility
  receivingApplication = $receivingApplication
  receivingFacility = $receivingFacility
  processingID = 'P'
  characterSet = '8859/1'

  PID = @{
    internalID = Read-Host 'Código Paciente'
    nationalityInternational = Read-Host 'Nacionalidade'
    maritalStatusInternational = Read-Host 'Estado civil'
  }

  OBR = @{
    entityIdentifierIdPedidoOBR = Read-Host 'Prescrição'
    entityIdentifierAcessNumberOBR = Read-Host 'Sequência Interna'
    identifierIdExam = Read-Host 'Código Procedimento'
    alternateIdentifierIdExam = Read-Host 'Procedimento Interno'
    textExam = Read-Host 'Descrição'
    idNumberDoctorSoliOBR = Read-Host 'Código Interno Médico Solicitante'
    familyNameDoctorSoliOBR = Read-Host 'Sobrenome médico solicitante'
    givenNameDoctorSoliOBR = Read-Host 'Nome e nome do meio do médico solicitante'
    identifierCheckDigitOBR = Read-Host 'CRM Médico Solicitante'
    namespaceIdUfCRMOBR = Read-Host 'Sigla estado médico solicitante'
    requestedTimeOBRInternational = Read-Host 'MM/DD/AAAA HH:MM:SS'
    namespaceId = Read-Host 'Sequência Interna'
    placerField2 = Read-Host 'Sequência Interna'
    fillerField1MoreIdPedido = Read-Host 'Prescrição'
    diagnosticServSectIDInternational = Read-Host 'Sigla Procedimento'
    idNumberDoctorExecOBR = Read-Host 'Código médico executor'
    familyNameDoctorExecOBR = Read-Host 'Sobrenome médico executor'
    givenNameDoctorExecOBR = Read-Host 'Nome e nome do meio do médico executor'
    AssigAuthNamespaceIdCRMOBR = Read-Host 'Sigla estado médico executor'
    AssigAuthUnivIdUFMedExecOBR = Read-Host 'CRM Médico executor'
    startDateTimeOBR = Read-Host 'MM/DD/AAAA HH:MM:00'
    endDateTimeOBR = Read-Host 'MM/DD/AAAA HH:MM:00'
  }
}

$jsonString = $json | ConvertTo-Json -Depth 10
$jsonPath = Read-Host 'Caminho para salvar o JSON (ex: C:\temp\saida.json)'
$jsonString | Out-File -FilePath $jsonPath -Encoding UTF8

Write-Host "JSON salvo com sucesso em: $jsonPath"
