import React from 'react';

function TodoItem(props) {
  const deleteTodoList = (target) => {
    target.parentNode.remove();
  }

  return (
    <div className="todo-item" id={props.index}>
      <div >{props.item}</div>
      <button onClick={(event) => deleteTodoList(event.target)}>삭제</button>
    </div>
  )
}

export default TodoItem;