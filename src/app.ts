import express from 'express';
import cors from 'cors';
import { createRouter as apiV1Router } from './api/rest/v1/Routes/routes';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/error';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/api/v1', apiV1Router());
app.use(notFound);
app.use(errorHandler());

export { app };
