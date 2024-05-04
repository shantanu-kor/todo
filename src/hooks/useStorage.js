// hook to save task to local storage
export const useAddToStorage = (task) => {
    let tasks = localStorage.getItem("tasks");
    if (!tasks) {
        tasks = "[]";
    }
    tasks = [{ task, completed: false }, ...JSON.parse(tasks)];
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// hook to delete task from local storage
export const useDeleteFromStorage = (id) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// hook to set local storage task to completed
export const useSetCompleted = (id) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[id] = { ...tasks[id], completed: true };
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// hook to set local storage task to not completed
export const useSetPending = (id) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[id] = { ...tasks[id], completed: false };
    localStorage.setItem('tasks', JSON.stringify(tasks));
};