import { z } from 'zod';
import { ExtendedError } from '../../../../../utils/error/error';
import { StatusCodes } from 'http-status-codes';

export const taskRequestValidator = async (id: string): Promise<void> => {
    const schema = z.string().min(5);

    try {
        await schema.parseAsync(id);
    } catch (e) {
        throw ExtendedError.of(
            'Get task request validation error',
            StatusCodes.BAD_REQUEST
        );
    }
};
