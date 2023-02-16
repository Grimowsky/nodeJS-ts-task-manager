import { type AppReq, type AppRes } from '../common/types/Request.type';

export const notFound = (_req: AppReq, res: AppRes): void => {
    res.status(400).send('Route not found');
};
