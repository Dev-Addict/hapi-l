import {createTask, getTasks, getTask, updateTask, deleteTask} from "./task-repository";
import TaskDto from "./task-dto";

export default class TaskController {
    getTasks() {
        return getTasks();
    }

    createTask(taskDto: TaskDto) {
        return createTask(taskDto);
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
