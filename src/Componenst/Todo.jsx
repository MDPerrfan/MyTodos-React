import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = event => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: uuidv4(), task: inputValue, isCompleted: false }]);
    }
    setInputValue('');
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = id => {
    // Logic for editing a todo item
  };

  const handleCheckbox = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="container todo-section">
      <div className="input-group mb-3">
        <input
          type="text"
          value={inputValue}
          className="form-control"
          aria-describedby="button-addon2"
          onChange={handleOnChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleAddTodo}
        >
          ADD
        </button>
      </div>
      <h1 className="my-5">Todo List</h1>
      <ul style={{listStyleType:"none"}}>
        {todos.length === 0 ? (
          <div className="">
            <h4 style={{ color: 'red' }}>No todos</h4>
          </div>
        ) : (
          todos.map(todo => (
            <li className=""style={{textDecoration:todo.isCompleted?"line-through":""}} key={todo.id}>
              <input
                className="form-check-input"
                onChange={() => handleCheckbox(todo.id)}
                type="checkbox"
                checked={todo.isCompleted}
              />
              {todo.task}
              <button
                className="btn btn-outline-secondary mx-4"
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Todo;
