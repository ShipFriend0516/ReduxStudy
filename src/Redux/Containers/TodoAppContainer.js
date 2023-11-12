import { connect } from "react-redux";
// import { addTodoAction, removeTodoAction, removeAllAction } from "../Ducks/TodoDuck";

import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../Actions/TodoAction";

import TodoApp from "../../Components/TodoApp";

const mapStateToProps = (state, ownProps) => {
  return {
    todoItems: state.todo,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => {
      dispatch(addTodoActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
    triggerAsyncFunction: (asyncFunction) => {
      dispatch(asyncFunction);
    },
  };
};

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
