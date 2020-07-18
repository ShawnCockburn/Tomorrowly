import { ADD_TODO, DEL_TODO } from "../actions/todos";

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.todo] };
        case DEL_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.todoId) };
        default:
            return state;
    }
}

export default reducer;