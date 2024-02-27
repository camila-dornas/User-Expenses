import { getUserByIdModel } from "../app/models/usersModels";
import Expense from "../validate/interfaceExpense";
const sgMail = require("@sendgrid/mail")

export default async function newExpenseEmail(userId: string, expense: Expense) {
  try {
    const user = await getUserByIdModel(userId)
    sgMail.setApiKey(process.env.SENDGRID_KEY)
    const message = {
      to: process.env.COMPANY_EMAIL,
      from: user.email,
      subject: `New expense registered`,
      text: `     
      Informamos que há uma nova despesa cadastrada em sua conta. 
      Segue os detalhes relacionados a ela:
      
      Descrição: ${expense.Description}
      Data: ${expense.Date}
      Valor: ${expense.Value}

      Atenciosamente`,
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail
      .send(message)
      .then((response: Response) => {
        console.log(response)
      })
      .catch((error: any) => {
        console.error(error)
      })
  } catch (error) {
    console.log("newExpenseEmail- ", error)
  }
}