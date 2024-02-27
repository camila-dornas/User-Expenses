# User Expenses
O repositório contém uma implementação CRUD de uma API REST em Node.js, com jsonwebtoken na validação de usuário e funcionalidades de gerenciamento de despesas.

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

## Entidade Despesas
```
{
"id": "Identificador único da despesa",
"user_id": "Usuário associado à despesa",
"description": "Descrição da despesa",
"value": "Valor em reais da despesa",
"date": "Data em que a despesa foi criada"
}
```

## Iniciar o Projeto

É premissa que o banco de dados MYSQL já esteja configurado e disponível no ambiente de desenvolvimento

1. Clone o repositório: `git clone git@github.com:camila-dornas/User-Expenses.git`
2. Instale as dependências: `npm install`
3. Execute o servidor: `npm start`


### Observações

Estou aberta à possíveis melhorias. 
Caso haja dúvidas estou à disposição no email: *camiladornas@gmail.com*
