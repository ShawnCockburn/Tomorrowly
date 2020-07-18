export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

export const addTodo = (todo) => {
    return {type: ADD_TODO, todo: todo};
};

export const delTodo = (todoId) => {
    return {type: DEL_TODO, todoId: todoId};
};