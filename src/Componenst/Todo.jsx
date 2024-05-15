import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Todo(props) {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
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
    saveToLS()
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    saveToLS()
  };

  const handleEdit = (id) => {
    let editedTodo = todos.find(todo => todo.id === id);
    setInputValue(editedTodo.task);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS()
  };

  const handleCheckbox = (id) => {
    let index = todos.findIndex(todo => todo.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS()
  };
  return (
    <div className={`container todo-section ${props.isBlackTheme ? 'black-theme' : 'white-theme'}`}>
      <h1>Manage Your Todos At One Place</h1>
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
      <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
      <label className='mx-2' htmlFor="show">Show Finished</label>
      <h2 className="my-5">Todo List</h2>
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
