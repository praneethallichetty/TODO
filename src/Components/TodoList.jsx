// import React, { useState } from "react";
// import TodoForm from "./TodoForm";
// import Todo from "./Todo";
// import { RiFacebookBoxFill } from "react-icons/ri";

// const TodoList = () => {
//     const [todos, setTodos] = useState([]);

//     const addTodo = todo => {
//         if (!todo.text || /^\s*$/.test(todo.text)) {
//             return;
//         }
//         const newTodos = [todo, ...todos];
//         setTodos(newTodos);
//         console.log(newTodos);  // Corrected to log the updated todos
//     };

//     const updateTodo = (todoId, newValue) => {
//         if (!newValue.text || /^\s*$/.test(newValue.text)) {  // Changed `todo.text` to `newValue.text`
//             return;
//         }
//         setTodos(prev =>
//             prev.map(item =>
//                 item.id === todoId ? { ...item, ...newValue } : item  // Corrected the map function
//             )
//         );
//     };

//     const removeTodo = id => {
//         const removedArr = todos.filter(todo => todo.id !== id);
//         setTodos(removedArr);
//     };

//     const completeTodo = id => {
//         const updatedTodos = todos.map(todo => 
//             todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
//         );
//         setTodos(updatedTodos);
//     };

//     return (
//         <>
//             <h1>What's the plan for Today?</h1>
//             <TodoForm onSubmit={addTodo} />
//             <Todo
//                 todos={todos}
//                 completeTodo={completeTodo}
//                 removeTodo={removeTodo}
//                 updateTodo={updateTodo}
//             />
//         </>
//     );
// };

// export default TodoList;


// import React, { useState } from "react";
// import TodoForm from "./TodoForm";
// import Todo from "./Todo"; // Assuming Todo is the component that renders the list of todos

// const TodoList = () => {
//     const [todos, setTodos] = useState([]);

//     const addTodo = todo => {
//         if (!todo.text || /^\s*$/.test(todo.text)) {
//             return;
//         }
//         const newTodos = [todo, ...todos];
//         setTodos(newTodos);
//     };

//     const updateTodo = (todoId, newValue) => {
//         if (!newValue.text || /^\s*$/.test(newValue.text)) {
//             return;
//         }
//         setTodos(prev =>
//             prev.map(item =>
//                 item.id === todoId ? { ...item, text: newValue.text } : item
//             )
//         );
//     };

//     const removeTodo = id => {
//         const removedArr = todos.filter(todo => todo.id !== id);
//         setTodos(removedArr);
//     };

//     const completeTodo = id => {
//         const updatedTodos = todos.map(todo => 
//             todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
//         );
//         setTodos(updatedTodos);
//     };

//     return (
//         <>
//             <h1>What's the plan for Today?</h1>
//             <TodoForm onSubmit={addTodo} />
//             <Todo
//                 todos={todos}
//                 completeTodo={completeTodo}
//                 removeTodo={removeTodo}
//                 updateTodo={updateTodo}
//             />
//         </>
//     );
// };

// export default TodoList;
