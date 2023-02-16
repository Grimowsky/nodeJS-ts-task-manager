import { z, type ZodError } from 'zod';
import { ExtendedError } from '../../../../../utils/error/error';
import { StatusCodes } from 'http-status-codes';
import * as mongoose from 'mongoose';

export const taskRequestValidator = async (id: string): Promise<void> => {
    const DEFAULT_ERR_MESSAGE = 'Get task request validation error';

    const schema = z.string().refine((id) => mongoose.isValidObjectId(id), {
        message: 'Please provide valid id',
    });

    try {
        await schema.parseAsync(id);
    } catch (e) {
        const zodError = e as ZodError;
        throw ExtendedError.of(
            zodError?.errors[0]?.message || DEFAULT_ERR_MESSAGE,
            StatusCodes.BAD_REQUEST
        );
    }
};
