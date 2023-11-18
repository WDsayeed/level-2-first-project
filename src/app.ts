import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './modules/students/student.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', StudentRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worldddbb!');
});

export default app;
