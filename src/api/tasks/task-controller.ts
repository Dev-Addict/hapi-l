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
        try {
            return h.response({
                status: 'success',
                data: createTask(<TaskDto>JSON.parse(<string>request.payload))
            }).code(201);
        } catch (err) {
            return h.response({
                status: 'fail',
                message: 'invalid request body'
            }).code(400);
        }
    }

    getTask(request: Request, h: ResponseToolkit) {
        try {
            return h.response({
                status: 'success',
                data: getTask(request.params.id)
            }).code(200);
        } catch (err) {
            return h.response({
                status: 'fail',
                message: 'not found'
            }).code(404);
        }
    }

    updateTask(request: Request, h: ResponseToolkit) {
        try {
            return h.response({
                status: 'success',
                data: updateTask(request.params.id, <TaskDto>JSON.parse(<string>request.payload))
            }).code(200);
        } catch (err) {
            return h.response({
                status: 'fail',
                message: 'not found'
            }).code(400)
        }
    }

    deleteTask(request: Request, h: ResponseToolkit) {
        try {
            return h.response({
                status: 'success',
                data: deleteTask(request.params.id)
            }).code(200);
        } catch (err) {
            return h.response({
                status: 'fail',
                message: 'not found'
            }).code(400);
        }
    }
}
