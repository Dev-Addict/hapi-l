import {Server} from 'hapi';

export const getServer = (): Server => {
    try {
        return new Server({
            port: process.env.PORT || 3000,
            host: '127.0.0.1',
            routes: {
                cors: {
                    origin: ["*"]
                }
            }
        });
    } catch (err) {
        console.log("Error initializing server: ", err);
        throw err;
    }
};
