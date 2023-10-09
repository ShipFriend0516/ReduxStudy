export const ACTION_TYPE_ADD_TODO = "ADD_TODO";
export const ACTION_TYPE_REMOVE_TODO = "REMOVE_TODO";
export const ACTION_TYPE_REMOVE_ALL = "REMOVE_ALL";

export const addTodoAction = (text) => {
  return {
    type: ACTION_TYPE_ADD_TODO,
    text,
  };
};

export const removeTodoAction = () => {
  return {
    type: ACTION_TYPE_REMOVE_TODO,
  };
};

export const removeAllAction = () => {
  return {
    type: ACTION_TYPE_REMOVE_ALL,
  };
};
