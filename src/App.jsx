// import './App.css';
// import TodoForm from './Components/TodoForm';
// import TodoList from './Components/TodoList';
// import Todo from './Components/Todo';

// function App() {
//   return ( 
//      <div className='todo-app'>
//     <TodoList />
//     <Todo/>
//     <TodoForm/>
//   </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleSaveEdit = () => {
    if (editValue.trim()) {
      const updatedTodos = todos.map((todo, index) => 
        index === editIndex ? editValue : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo} className="add-btn">Add ToDo</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <button onClick={handleSaveEdit} className="save-btn">Save</button>
              </>
            ) : (
              <>
                <span className="todo-text">{todo}</span>
                <div className="button-group">
                  <button onClick={() => handleEditTodo(index)} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => handleRemoveTodo(index)} className="remove-btn">
                    Remove
                  </button>
                </div>
                
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
