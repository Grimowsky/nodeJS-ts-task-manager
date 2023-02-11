import * as http from 'http';
import { app } from './app';
import { mongoConnect } from './db/mongo/mongoConnect';
import dotenv from 'dotenv-safe';

dotenv.config();
const PORT = process?.env?.PORT || 8080;
const MONGO_PASS = process?.env?.MONGO_PASS || '';

const server = http.createServer(app);

const startServer = async (): Promise<void> => {
    await mongoConnect(MONGO_PASS);
    server.listen(PORT, () => {
        console.log(`---Listening on port ${PORT}---`);
    });
};

void (async () => {
    await startServer();
})();
