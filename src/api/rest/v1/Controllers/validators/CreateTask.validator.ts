import { z } from 'zod';
import { type ITask as ITaskRequest } from '../../../../../common/types/Task.type';
import { ExtendedError } from '../../../../../utils/error/error';
import { StatusCodes } from 'http-status-codes';

export const createTaskValidator = async (
    request: ITaskRequest
): Promise<void> => {
    const schema = z.object({
        name: z.string().min(1, 'Name need to have at lest 1 char'),
    });
    try {
        await schema.parseAsync(request);
    } catch (e) {
        throw ExtendedError.of(
            'Create task validation error',
            StatusCodes.BAD_REQUEST
        );
    }
};
