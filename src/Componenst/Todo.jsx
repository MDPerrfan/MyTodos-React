import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleOnchange = event => {
    setInputValue(event.target.value);
  };
  const handleAddtodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
    }
    setInputValue('');
  };
  const handleDelete = index => {
    let newTodo = todos.filter((_, i) => i !== index);
    setTodos(newTodo);
  };
  return (
    <>
    <div className="container todo-section">     
    <div class="input-group mb-3">
      <input type="text"value={inputValue} className="form-control"  aria-describedby="button-addon2"onChange={handleOnchange}/>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2"onClick={handleAddtodo}>ADD</button>
    </div>
      <h1 className='my-5'>Todo List</h1>
      <ul>
          {todos.length === 0 ? (
            <div className="mssg">
              <h4 style={{color:"red"}}>No todos</h4>
            </div>
          ) : (
            todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button className="btn btn-danger mx-4" onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
export default Todo;