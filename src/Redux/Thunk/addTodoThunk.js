import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
} from "../Actions/TodoAction";

const TODO_MAX_COUNT = 3;

const addTodoThunkActionCreator = (text) => {
  return async function addTodoThunk(dispatch, getState) {
    const state = getState();

    if (state.todo.length < TODO_MAX_COUNT) {
      dispatch(addTodoActionCreator("아이템 추가 중.."));
      setTimeout(() => {
        dispatch(removeTodoActionCreator());
        dispatch(addTodoActionCreator(text));
      }, 3000);
      return;
    } else {
      dispatch(addTodoActionCreator("최대 개수 초과!"));
      setTimeout(() => {
        dispatch(removeTodoActionCreator());
      }, 3000);
    }
  };
};

export default addTodoThunkActionCreator;
