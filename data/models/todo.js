class Todo {
    constructor(id, dueDate, title, description, gradient, optionalData, completed) {
        this.id = id;
        this.dueDate = dueDate;
        this.title = title;
        this.description = description;
        this.gradient = gradient;
        this.optionalData = optionalData;
        this.completed = completed;
    }
}

export default Todo;