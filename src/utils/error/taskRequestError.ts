import { ExtendedError } from './error';
import { StatusCodes } from 'http-status-codes';

export const taskRequestError = (taskId: string): void => {
    throw ExtendedError.of(
        `Cannot find task with id ${taskId}`,
        StatusCodes.BAD_REQUEST
    );
};
