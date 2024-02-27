export interface TokenUser {
  payload: {
    username: string,
    email: string,
  },
  iat: number,
  exp: number,
}
