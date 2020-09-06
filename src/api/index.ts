import {Server} from "hapi";

import {setRoutes as setTaskRoutes} from "./tasks";

export const setRoutes = (server: Server): void => {
    setTaskRoutes(server);
};
