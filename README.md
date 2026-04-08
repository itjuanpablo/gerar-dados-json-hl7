# 📄 CreateJSON-HL7Model

## 📌 Descrição

Este script em PowerShell coleta informações do usuário via terminal e ao final do processo gera um **arquivo JSON** estruturado baseado em um modelo de dados inspirado no padrão HL7 (muito utilizado na área da saúde).

## ⚙️ O que o script faz?

* Define alguns **valores fixos** de integração (ex: sistema de origem e destino).
* Solicita ao usuário diversos dados via `Read-Host`, incluindo:

  * Informações do paciente (PID)
  * Dados do exame/pedido médico (OBR)
* Monta um objeto estruturado em formato JSON com essas informações.
* Converte o objeto para string JSON.
* Solicita o caminho onde o arquivo deve ser salvo.
* Salva o arquivo `.json` no local informado.
* Exibe uma mensagem de sucesso ao final.

## 🧩 Estrutura do JSON

O JSON gerado contém:

* **Metadados de integração**

  * sendingApplication
  * sendingFacility
  * receivingApplication
  * receivingFacility
  * processingID
  * characterSet

* **PID (Paciente)**

  * Código do paciente
  * Nacionalidade
  * Estado civil

* **OBR (Ordem/Exame)**

  * Identificação do pedido
  * Dados do exame
  * Informações do médico solicitante
  * Informações do médico executor
  * Datas e horários do procedimento

## ▶️ Como usar

1. Execute o script no PowerShell:

   ```powershell
   .\CreateJSON-HL7Model.ps1
   ```

2. Preencha os dados solicitados no terminal.

3. Informe o caminho completo onde deseja salvar o arquivo JSON:

   ```
   C:\temp\arquivo.json
   ```

4. O arquivo será criado automaticamente.

## ✅ Resultado

Um arquivo JSON estruturado, pronto para integração com sistemas que utilizam padrão semelhante ao HL7.

## 💡 Observação

* O script depende totalmente de entrada manual do usuário.
* Certifique-se de inserir os dados no formato correto (principalmente datas e horários).
