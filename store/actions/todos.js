export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UNCOMPLETE_TODO = "UNCOMPLETE_TODO";
export const TOMORROW_TODO = "TOMORROW_TODO";
export const TODAY_TODO = "TODAY_TODO";


export const addTodo = (todo) => {
    return {type: ADD_TODO, todo: todo};
};

export const delTodo = (todoId) => {
    return {type: DEL_TODO, todoId: todoId};
};

export const comTodo = (todoId) => {
    return {type: COMPLETE_TODO, todoId: todoId};
};

export const uncompTodo = (todoId) => {
    return {type: UNCOMPLETE_TODO, todoId: todoId};
};

export const tomTodo = (todoId) => {
    return {type: TOMORROW_TODO, todoId: todoId};
};

export const todTodo = (todoId) => {
    return {type: TODAY_TODO, todoId: todoId};
};