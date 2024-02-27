import Expense from "../models/expenseConstructor"

const returnExpense: Expense = {
  Id: "1b311d20-483b-41e6-b10b-f672c8c6a122",
  Description: "Shopping center",
  Date: "01/02/2024",
  User_id: "84d3716f-42d7-45d4-8ecc-1940eb0c1e9f",
  Value: "540,56",
  Created_at: new Date()
}


const requestExpense = {
  Description: "Shopping center",
  Date: "01/02/2024",
  Value: 540.56,
  User_id: "84d3716f-42d7-45d4-8ecc-1940eb0c1e9f",
}

export { returnExpense, requestExpense }