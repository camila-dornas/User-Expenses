import app from './src/api/app';

const PORT = 3000;

app.listen(PORT, () => console.log(
  `Running on PORT: ${PORT}`,
));