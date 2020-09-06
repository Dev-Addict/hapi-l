import {Request, ResponseToolkit} from "hapi";

import {createTask, deleteTask, getTask, getTasks, updateTask} from "./task-repository";
import TaskDto from "./task-dto";

export default class TaskController {
    getTasks(request: Request, h: ResponseToolkit) {
        return h.response({
            status: 'success',
            data: getTasks()
        }).code(200);
    }

    createTask(request: Request, h: ResponseToolkit) {
        const taskDto = <TaskDto>JSON.parse(<string>request.payload);

        try {
            return h.response({
                status: 'success',
                data: createTask(taskDto)
            }).code(201);
        } catch (err) {
            return h.response({
                status: 'fail',
                message: 'invalid request body'
            }).code(400);
        }
    }

    getTask(id: string) {
        return getTask(id);
    }

    updateTask(id: string, taskDto: TaskDto) {
        return updateTask(id, taskDto)
    }

    deleteTask(id: string) {
        return deleteTask(id);
    }
}
