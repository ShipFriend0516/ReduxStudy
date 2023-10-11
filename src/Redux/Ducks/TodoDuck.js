// Actions

export const ACTION_TYPE_ADD_TODO = "todo/ADD_TODO";
export const ACTION_TYPE_REMOVE_TODO = "todo/REMOVE_TODO";
export const ACTION_TYPE_REMOVE_ALL = "todo/REMOVE_ALL";

//Reducer
const initialState = ["처음 해야할일"];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_ADD_TODO:
      return state.concat(action.text);
    case ACTION_TYPE_REMOVE_TODO:
      return state.slice(0, -1);
    case ACTION_TYPE_REMOVE_ALL:
      return [];
    default:
      return state;
  }
};

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

export default reducer;
