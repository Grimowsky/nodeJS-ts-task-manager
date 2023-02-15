import { z, type ZodError } from 'zod';
import { ExtendedError } from '../../../../../utils/error/error';
import { StatusCodes } from 'http-status-codes';

export interface UpdatedTask {
    name?: string;
    completed?: boolean;
}

export const updateTaskValidator = async (
    request: UpdatedTask
): Promise<void> => {
    const schema = z
        .object({
            name: z.string().min(1).optional(),
            completed: z.boolean().optional(),
        })
        .partial()
        .refine(
            (data) => data.name || data.completed,
            'Please provide either name or completed'
        );

    try {
        await schema.parseAsync(request);
    } catch (e) {
        const zodErr = e as ZodError;
        throw ExtendedError.of(
            zodErr?.errors[0]?.message || 'Update task validation error',
            StatusCodes.BAD_REQUEST
        );
    }
};
