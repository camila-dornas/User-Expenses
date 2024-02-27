import mysql from 'mysql';

const connection = mysql.createConnection({
  host: process.env.HOST_MYSQL,
  port: process.env.PORT,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE
})

connection.connect();

export default connection