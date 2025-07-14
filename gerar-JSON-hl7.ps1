$json = @{
  sendingApplication = Read-Host 'Aplicacao de origem (ex: TASY)'
  sendingFacility = Read-Host 'Instituicao de origem (ex: PHILIPS)'
  receivingApplication = Read-Host 'Aplicacao de destino (ex: VUEPACS)'
  receivingFacility = Read-Host 'Instituicao de destino (ex: PHILIPS)'
  processingID = 'P'
  characterSet = '8859/1'

  PID = @{
    internalID = Read-Host 'Código do Paciente no Tasy'
    givenName = Read-Host 'Nome completo do paciente'
    familyName = Read-Host 'Sobrenome do paciente'
    dateOfBirth = Read-Host 'Data de nascimento (dd/mm/aaaa)'
    sex = Read-Host 'Sexo (M ou F)'
    streetAddress = Read-Host 'Endereço'
    city = Read-Host 'Cidade'
    stateOrProvince = Read-Host 'Estado (sigla)'
    phoneNumberHome = Read-Host 'Telefone residencial'
    SSNnumberPatient = Read-Host 'CPF'
    maritalStatusInternational = Read-Host 'Estado civil'
    licenseNumber = Read-Host 'Numero do registro profissional (se aplicavel)'
    familyNameAlias = Read-Host 'Sobrenome alternativo (se houver)'
    givenNameAlias = Read-Host 'Nome alternativo (se houver)'
    givenFullNameAlias = Read-Host 'Nome completo alternativo (se houver)'
    PatientIdentifierList = @(
      @{
        IDNumber = Read-Host 'ID do paciente'
        IdentifierTypeCode = 'PI'
        AssigningAuthority = @{ NamespaceID = Read-Host 'Namespace ID do identificador' }
      }
    )
  }

  PV1 = @{
    patientClass = Read-Host 'Classe do paciente: PREENCHA COM 8'
    personLocationTypePointOfCare = Read-Host 'Local de atendimento - exemplo: ULTRASSONOGRAFIA COR-PSA01 (COR-PSA01- )'
    idNumberVisitNumber = Read-Host 'Numero do atendimento'
    idNumberDoctorSoliPV1 = Read-Host 'CRM do medico solicitante'
    familyNameDoctorSoliPV1 = Read-Host 'Sobrenome do medico solicitante'
    givenNameDoctorSoliPV1 = Read-Host 'Nome do medico solicitante'
    givenNameDoctorSoliPV1International = Read-Host 'Nome completo do medico solicitante - exemplo (GIULIANO BARBONI LEITE)'
    accountStatusDtAtend = Read-Host 'Data/Hora do atendimento (dd/mm/aaaa hh:mm:ss)'
  }

  IN1 = @{
    organizationName = Read-Host 'Nome do convenio'
    idNumberOrganization = Read-Host 'ID do convenio'
    idConvenioCard = Read-Host 'Numero do cartao do convenio'
  }

  ORC = @(
    @{
      orderControlORC = 'preencher com NW'
      entityIdentifierIdPedidoORC = Read-Host 'ID do pedido'
      entityIdentifierAcessNumberORC = Read-Host 'Acession Number'
      quantityTiming = 'preencher com 1'
      endDateTime = Read-Host 'Data/Hora do pedido (dd/mm/aaaa hh:mm:ss)'
      priority = 'preencher com N'
      personIdentifier = Read-Host 'ID do solicitante'
    }
  )

  OBR = @{
    entityIdentifierIdPedidoOBR = Read-Host 'ID do pedido (OBR)'
    entityIdentifierAcessNumberOBR = Read-Host 'Numero de acesso (OBR)'
    identifierIdExam = Read-Host 'ID do exame'
    textExam = Read-Host 'Descricao do exame'
    idNumberDoctorSoliOBR = Read-Host 'CRM do medico solicitante'
    familyNameDoctorSoliOBR = Read-Host 'Sobrenome do medico solicitante'
    givenNameDoctorSoliOBR = Read-Host 'Nome do medico solicitante'
    startDateTimeOBR = Read-Host 'Inicio da execucao (dd/mm/aaaa hh:mm:ss)'
    endDateTimeOBR = Read-Host 'Fim da execucao (dd/mm/aaaa hh:mm:ss)'
    idNumberDoctorExecOBR = Read-Host 'CRM do medico executor'
    familyNameDoctorExecOBR = Read-Host 'Sobrenome do medico executor'
    givenNameDoctorExecOBR = Read-Host 'Nome do medico executor'
    identifierCheckDigitOBR = Read-Host 'Digito verificador (OBR)'
    namespaceIdUfCRMOBR = Read-Host 'UF do CRM do medico solicitante'
    requestedTimeOBRInternational = Read-Host 'Data/Hora da solicitacao (dd/mm/aaaa hh:mm:ss)'
    placerField2 = Read-Host 'Campo Placer 2 (OBR)'
    fillerField1MoreIdPedido = Read-Host 'FillerField1 - ID do Pedido'
    fillerField2More = Read-Host 'FillerField2 - Contador'
    AssigAuthUnivIdUFMedExecOBR = Read-Host 'UF do medico executor'
  }
}

$jsonString = $json | ConvertTo-Json -Depth 10

$jsonPath = Read-Host 'Caminho para salvar o JSON (ex: C:\temp\exame.json)'
$jsonString | Out-File -FilePath $jsonPath -Encoding UTF8

Write-Host "JSON salvo em: $jsonPath"
