# User Expenses
O repositório contém uma implementação CRUD de uma API REST em Node.js, com jsonwebtoken na validação de usuário e funcionalidades de gerenciamento de despesas.

## Iniciar o Projeto

1. Clone o repositório: `git clone git@github.com:camila-dornas/User-Expenses.git`
2. Instale as dependências: `npm install`
3. Execute o servidor: `npm start`

## Entidade Despesas

- **Id:** Identificador único da despesa.
- **User_id:** Usuário associado à despesa.
- **Description:** Descrição da despesa.
- **Value:** Valor em reais da despesa.
- **Date:** Data em que a despesa foi criada.

## Funcionalidades da API

- Garante que a data não seja no futuro.
- Confirma se o usuário existe.
- Limita a descrição em 191 caracteres.
- Garante que o valor da despesa não é negativo.
- Envia email com título "despesa cadastrada" ao cadastrar uma despesa

## Tecnologias

- Node.js
- Framework Express
- MySQL
- Jest
- TypeScript

### Observações

Estou aberta à possíveis melhorias. 
Caso haja dúvidas estou à disposição no email: *camiladornas@gmail.com*