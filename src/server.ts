import {Server} from 'hapi';

export const init = async (): Promise<Server> => {
    try {
        const server: Server = new Server({
            port: process.env.PORT || 3000,
            host: '127.0.0.1'
        });

        await server.start();

        console.log('server is running at %s', server.info.uri);

        return server;
    } catch (err) {
        console.log("Error initializing server: ", err);
        throw err;
    }
};
