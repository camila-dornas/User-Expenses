import { randomUUID } from "crypto";

export interface RequestCreateExpense {
  Description: string,
  Date: string,
  User: string,
  Value: string,
}

export default class Expense {
  Id: string;
  Description: string;
  Date: string;
  User_id: string;
  Value: string;
  Created_at: Date;

  constructor(data :RequestCreateExpense) {
    this.Id = randomUUID();
    this.Description = data.Description
    this.Date = data.Date
    this.User_id = data.User
    this.Value = data.Value
    this.Created_at = new Date();
  }
}
