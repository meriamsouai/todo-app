import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      {todo}
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
