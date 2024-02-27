CREATE TABLE IF NOT EXISTS users (
  id UUID,
  username VARCHAR(255) NOT null,
  password VARCHAR(255) NOT null,
  email VARCHAR(100) NOT null,

  PRIMARY KEY (id)
);

