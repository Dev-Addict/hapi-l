import TasksST from "./tasks-st";
import TaskDto from "./task-dto";

export const getTasks = () => TasksST.getInstance().getTasks();

export const createTask = (taskDto: TaskDto) => {
    if (!taskDto.title)
        throw new Error('title is required.');

    if (!taskDto.description)
        throw new Error('description is required');

    return TasksST.getInstance().addTask(taskDto);
};

export const getTask = (id: string) => TasksST.getInstance().getTask(id);

export const updateTask = (id: string, taskDto: TaskDto) =>  TasksST.getInstance().updateTask(id, taskDto);

export const deleteTask = (id: string) => TasksST.getInstance().deleteTask(id);
