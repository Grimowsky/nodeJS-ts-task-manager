import { connect } from 'mongoose';

export const mongoConnect = async (URL: string): Promise<void> => {
    await connect(URL, {}, (e) => {
        if (e) throw e;
        console.log('---MONGO-STARTED---');
    });
};
