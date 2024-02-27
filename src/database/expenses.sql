CREATE TABLE IF NOT EXISTS expenses (
  id UUID,
  "description" VARCHAR(191) NOT NULL,
  "date" DATE NOT NULL,
  user_id UUID,
  value DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),

  PRIMARY KEY (id)
  FOREIGN KEY (user_id) REFERENCES users (id)
);


