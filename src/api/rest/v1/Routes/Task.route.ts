import * as express from 'express';
import taskController from '../Controllers/TaskController';

export const createRouter = (): express.Router => {
    const router = express.Router();

    router.get('/', taskController.getAllTasks);
    router.post('/', taskController.createTask);
    router.get('/:id', taskController.getTask);
    router.patch('/:id', taskController.updateTask);
    router.delete('/:id', taskController.deleteTask);
    return router;
};
