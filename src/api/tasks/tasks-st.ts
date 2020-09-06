import Task from "./task";
import TaskDto from "./task-dto";

export default class TasksST {
    private static instance: TasksST;

    private tasks: Task[] = [];

    private constructor() {
    }

    public static getInstance() {
        if (!this.instance)
            this.instance = new TasksST();
        return this.instance;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(taskDto: TaskDto): Task {
        this.tasks.push({
            id: Date.now().toString(16),
            ...taskDto
        });

        return this.tasks[this.tasks.length - 1];
    }

    getTask(id: string): Task {
        const task = this.tasks.find(task => task.id === id);

        if (!task)
            throw new Error('Couldn\'t find task.');

        return task;
    }

    updateTask(id: string, taskDto: TaskDto): Task {
        const taskIndex = this.tasks.findIndex(task => task.id === id);

        if (taskIndex === -1)
            throw new Error('Couldn\'t find task.');

        this.tasks[taskIndex] = {...this.tasks[taskIndex], ...taskDto};

        return this.tasks[taskIndex];
    }

    deleteTask(id: string): void {
        const taskIndex = this.tasks.findIndex(task => task.id === id);

        if (taskIndex === -1)
            throw new Error('Couldn\'t find task.');

        this.tasks.splice(taskIndex, 1);
    }
}
