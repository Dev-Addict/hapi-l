import {Server} from "hapi";

import TaskController from "./task-controller";

export const setRoutes = (server: Server): void => {
    const taskController = new TaskController();

    server.route({
        method: 'GET',
        path: '/tasks',
        options: {
            handler: taskController.getTasks
        }
    })
};
