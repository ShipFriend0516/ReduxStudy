import { connect } from "react-redux";
import { addTodoAction, removeTodoAction, removeAllAction } from "../actions";

import TodoApp from "../../Components/TodoApp";

const mapStateToProps = (state, ownProps) => {
  return {
    todoItems: state.todo,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => {
      dispatch(addTodoAction(text));
    },
    removeTodo: () => {
      dispatch(removeTodoAction());
    },
    removeAll: () => {
      dispatch(removeAllAction());
    },
  };
};

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
