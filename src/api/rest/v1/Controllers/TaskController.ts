import {
    type AppReq,
    type AppNext,
    type AppRes,
} from '../../../../common/types/Request.type';
import { Task } from '../../../../db/mongo/models/Task.model';
import { createTaskValidator } from './validators/CreateTask.validator';

const getAllTasks = async (
    req: AppReq,
    res: AppRes,
    next: AppNext
): Promise<void> => {
    try {
        const tasks = await Task.find({});
        res.status(200).send({ tasks });
    } catch (e) {
        next(e);
    }
};

const createTask = async (
    req: AppReq,
    res: AppRes,
    next: AppNext
): Promise<void> => {
    try {
        await createTaskValidator(req.body);
        await Task.create(req.body);
        res.status(201).send();
    } catch (e) {
        next(e);
    }
};

const getTask = async (
    req: AppReq,
    res: AppRes,
    next: AppNext
): Promise<void> => {
    const { id } = req.params;
    try {
        res.send({ hello: id });
    } catch (e) {
        next(e);
    }
};

const updateTask = async (
    req: AppReq,
    res: AppRes,
    next: AppNext
): Promise<void> => {
    try {
        res.send({ hello: 'update' });
    } catch (e) {
        next(e);
    }
};

const deleteTask = async (
    req: AppReq,
    res: AppRes,
    next: AppNext
): Promise<void> => {
    try {
        res.send({ hello: 'delete' });
    } catch (e) {
        next(e);
    }
};

export default { getAllTasks, createTask, getTask, updateTask, deleteTask };
