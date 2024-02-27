export interface RequestCreateExpense {
  Description: string,
  Date: string,
  User_id: string,
  Value: string,
}
export interface TokenUser {
  payload: {
    username: string,
    email: string,
  },
  iat: number,
  exp: number,
}
