import React from 'react';

function Todo({ index, todo, removeTodo }) {
  const handleRemove = () => {
    removeTodo(index);
  };

  return (
    <div>
      <span>{todo}</span>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Todo;
