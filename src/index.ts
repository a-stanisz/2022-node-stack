import express from 'express';
import morgan from 'morgan';

const app = express();
const port = Number(process.env.PORT ?? 8080);
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json ({hello: 'world'});
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at port ${port}`);
});