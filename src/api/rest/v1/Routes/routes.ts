import * as express from 'express';
import { createRouter as createTaskRouter } from './Task.route';

export const createRouter = (): express.Router => {
    const router = express.Router();

    router.use('/task', createTaskRouter());
    return router;
};
