import * as express from 'express';
import TaskController from '../Controllers/TaskController';
import { asyncWrapper } from '../../../../middleware/asyncWrapper';

export const createRouter = (): express.Router => {
    const router = express.Router();

    router.get('/', asyncWrapper(TaskController.getAllTasks));
    router.post('/', asyncWrapper(TaskController.createTask));
    router.get('/:id', asyncWrapper(TaskController.getTask));
    router.patch('/:id', asyncWrapper(TaskController.updateTask));
    router.delete('/:id', asyncWrapper(TaskController.deleteTask));
    return router;
};
