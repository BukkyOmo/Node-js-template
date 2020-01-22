import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Template!');
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

export default app;
