import path from 'path';
import {config} from "dotenv";
import {getServer} from './server';

config({
    path: path.join(__dirname, './config.env').replace('dist', 'src')
});

console.log(`Running environment ${process.env.NODE_ENV || "dev"}`);

process.on("uncaughtException", (error: Error) => {
    console.error(`uncaughtException ${error.message}`);
});

process.on("unhandledRejection", (reason: any) => {
    console.error(`unhandledRejection ${reason}`);
});

const server = getServer();

server.start().then( () =>
    console.log('server is running at %s', server.info.uri)
);
