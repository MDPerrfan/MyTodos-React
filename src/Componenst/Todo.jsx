import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Todo(props) {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const handleOnChange = event => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: uuidv4(),
        task: inputValue,
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
    }
    setInputValue('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id) => {
    let editedTodo = todos.find(todo => todo.id === id);
    setInputValue(editedTodo.task);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const handleCheckbox = (id) => {
    let index = todos.findIndex(todo => todo.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  return (
    <div className={`container todo-section ${props.isBlackTheme ? 'black-theme' : 'white-theme'}`}>
      <div className="d-flex">
        <input
          type="text"
          value={inputValue}
          className="form-control"
          aria-describedby="button-addon2"
          onChange={handleOnChange}
        />
        <button
          className="btn btn-outline-secondary mx-2"
          type="button"
          id="button-addon2"
          onClick={handleAddTodo}
        >
          ADD
        </button>
      </div>
      <h1 className="my-5">Todo List</h1>
      <ul style={{ listStyleType: "none" }}>
        {todos.length === 0 ? (
          <div className="">
            <h4 style={{ color: 'red' }}>No todos</h4>
          </div>
        ) : (
          todos.map(todo => (
            <li className="list-unstyled d-flex align-items-center justify-content-between" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} key={todo.id}>
              <div className="input">
                <input
                  className="form-check-input mx-1"
                  onChange={() => handleCheckbox(todo.id)}
                  type="checkbox"
                  checked={todo.isCompleted}
                />
                {todo.task}
              </div>
              <div className="button">
                <button
                  className="btn btn-outline-secondary mx-4 my-3"
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
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Todo;
