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
    internalID = Read-Host 'Codigo Paciente'
    nationalityInternational = Read-Host 'Nacionalidade'
    maritalStatusInternational = Read-Host 'Estado civil'
  }

  OBR = @{
    entityIdentifierIdPedidoOBR = Read-Host 'Prescricao'
    entityIdentifierAcessNumberOBR = Read-Host 'Sequencia Interna'
    identifierIdExam = Read-Host 'Codigo Procedimento'
    alternateIdentifierIdExam = Read-Host 'Procedimento Interno'
    textExam = Read-Host 'Descricao'
    idNumberDoctorSoliOBR = Read-Host 'Codigo Interno Medico Solicitante'
    familyNameDoctorSoliOBR = Read-Host 'Sobrenome medico solicitante'
    givenNameDoctorSoliOBR = Read-Host 'Nome e nome do meio do medico solicitante'
    identifierCheckDigitOBR = Read-Host 'CRM Medico Solicitante'
    namespaceIdUfCRMOBR = Read-Host 'Sigla estado medico solicitante'
    requestedTimeOBRInternational = Read-Host 'MM/DD/AAAA HH:MM:SS'
    namespaceId = Read-Host 'Sequencia Interna'
    placerField2 = Read-Host 'Sequencia Interna'
    fillerField1MoreIdPedido = Read-Host 'Prescricao'
    diagnosticServSectIDInternational = Read-Host 'Sigla Procedimento'
    idNumberDoctorExecOBR = Read-Host 'Codigo medico executor'
    familyNameDoctorExecOBR = Read-Host 'Sobrenome medico executor'
    givenNameDoctorExecOBR = Read-Host 'Nome e nome do meio do medico executor'
    AssigAuthNamespaceIdCRMOBR = Read-Host 'Sigla estado medico executor'
    AssigAuthUnivIdUFMedExecOBR = Read-Host 'CRM Medico executor'
    startDateTimeOBR = Read-Host 'MM/DD/AAAA HH:MM:00'
    endDateTimeOBR = Read-Host 'MM/DD/AAAA HH:MM:00'
  }
}

$jsonString = $json | ConvertTo-Json -Depth 10
$jsonPath = Read-Host 'Caminho para salvar o JSON (ex: C:\temp\saida.json)'
$jsonString | Out-File -FilePath $jsonPath -Encoding UTF8

Write-Host "JSON salvo com sucesso em: $jsonPath"
