import { infer, z } from 'zod';
import { ExtendedError } from '../../../../../utils/error/error';
import { StatusCodes } from 'http-status-codes';

export interface UpdatedTask {
    name: string;
    completed: boolean;
}

export const updateTaskValidator = async (
    request: UpdatedTask
): Promise<void> => {
    const schema = z.object({
        name: z.string().min(1),
        completed: z.boolean(),
    });

    try {
        await schema.parseAsync(request);
    } catch (e) {
        throw ExtendedError.of(
            'Update task validation error',
            StatusCodes.BAD_REQUEST
        );
    }
};
