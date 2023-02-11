import * as express from 'express';
import TaskController from '../Controllers/TaskController';

export const createRouter = (): express.Router => {
    const router = express.Router();

    router.get('/', TaskController.getAllTasks);
    router.post('/', TaskController.createTask);
    router.get('/:id', TaskController.getTask);
    router.patch('/:id', TaskController.updateTask);
    router.delete('/:id', TaskController.deleteTask);
    return router;
};
