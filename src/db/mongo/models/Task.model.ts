import { Schema, model } from 'mongoose';
import { type ITask } from '../../../common/types/Task.type';

const TaskSchema = new Schema<ITask>({
    name: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
});

export const Task = model<ITask>('Task', TaskSchema);
