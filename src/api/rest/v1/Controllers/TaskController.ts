import {
    type AppReq,
    type AppRes,
} from '../../../../common/types/Request.type';
import { Task } from '../../../../db/mongo/models/Task.model';
import { createTaskValidator } from './validators/CreateTask.validator';
import { taskRequestValidator } from './validators/TaskRequestValidator';
import { updateTaskValidator } from './validators/UpdateTaskValidator';
import { taskRequestError } from '../../../../utils/error/taskRequestError';

const getAllTasks = async (req: AppReq, res: AppRes): Promise<void> => {
    const tasks = await Task.find({});
    res.status(200).send({ tasks });
};

const createTask = async (req: AppReq, res: AppRes): Promise<void> => {
    await createTaskValidator(req.body);
    await Task.create(req.body);
    res.status(201).send();
};

const getTask = async (req: AppReq, res: AppRes): Promise<void> => {
    const { id: taskId } = req.params;
    await taskRequestValidator(taskId);
    const task = await Task.findOne({ _id: taskId });

    if (!task) taskRequestError(taskId);

    res.status(200).send(task);
};

const updateTask = async (req: AppReq, res: AppRes): Promise<void> => {
    const { id: taskId } = req.params;
    await updateTaskValidator(req.body);

    const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
        new: true,
    });

    if (!task) taskRequestError(taskId);

    res.send({ task });
};

const deleteTask = async (req: AppReq, res: AppRes): Promise<void> => {
    const { id: taskId } = req.params;
    await taskRequestValidator(taskId);
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) taskRequestError(taskId);

    await res.status(200).send();
};

export default { getAllTasks, createTask, getTask, updateTask, deleteTask };
