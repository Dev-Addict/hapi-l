import {Server} from 'hapi';

const init = async (): Promise<Server> => {
    try {
        const server: Server = new Server({
            port: 3000,
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
