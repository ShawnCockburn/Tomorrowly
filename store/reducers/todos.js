import { ADD_TODO, DEL_TODO, COMPLETE_TODO, TOMORROW_TODO, UNCOMPLETE_TODO, TODAY_TODO, EDIT_TODO } from "../actions/todos";
import Todo from "../../data/models/todo";
import { getDueDate, getTomorrow, getToday } from "../../util/dateHelper";

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [action.todo, ...state.todos] };
        case COMPLETE_TODO:
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.todoId) {
                        return new Todo(
                            todo.id,
                            todo.dueDate,
                            todo.title,
                            todo.description,
                            todo.gradient,
                            todo.optionalData,
                            true
                        );
                    }
                    return todo;
                })
            };
        case UNCOMPLETE_TODO:

            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.todoId) {
                        return new Todo(
                            todo.id,
                            todo.dueDate,
                            todo.title,
                            todo.description,
                            todo.gradient,
                            todo.optionalData,
                            false
                        );
                    }
                    return todo;
                })
            };
        case TOMORROW_TODO:
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.todoId) {
                        return new Todo(
                            todo.id,
                            getDueDate(getTomorrow()),
                            todo.title,
                            todo.description,
                            todo.gradient,
                            todo.optionalData,
                            todo.completed
                        );
                    }
                    return todo;
                })
            };
        case TODAY_TODO:
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.todoId) {
                        return new Todo(
                            todo.id,
                            getDueDate(getToday()),
                            todo.title,
                            todo.description,
                            todo.gradient,
                            todo.optionalData,
                            todo.completed
                        );
                    }
                    return todo;
                })
            };
        case DEL_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.todoId) };
        case EDIT_TODO:
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.todo.id) {
                        return action.todo;
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
}

export default reducer;