import path from 'path';
import {config} from "dotenv";
import {init as initServer} from './server';

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

initServer().catch(err => {
    console.log('Error while initializing server:', err);
    throw err;
});
