import { randomUUID } from "crypto";
import { RequestCreateExpense } from "../validate/interfaceExpense";

export default class Expense {
  Id: string;
  Description: string;
  Date: string;
  User_id: string;
  Value: string;
  Created_at: Date;

  constructor(data: RequestCreateExpense) {
    this.Id = randomUUID();
    this.Description = data.Description
    this.Date = data.Date
    this.User_id = data.User_id
    this.Value = data.Value
    this.Created_at = new Date();
  }
}