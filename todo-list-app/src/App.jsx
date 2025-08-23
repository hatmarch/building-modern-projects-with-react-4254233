import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    { text: 'Take out the garbage', isCompleted: true },
    { text: 'Make dinner', isCompleted: true }
  ]);
  const [incompleteTodos, setIncompleteTodos] = useState([
    { text: 'Paint the house', isCompleted: false }
  ]);

  function markTodoAsCompleted(text) {
    setIncompleteTodos(incompleteTodos.filter(todo => todo.text !== text));
    setCompletedTodos([...completedTodos, { text, isCompleted: true }]);
  }

  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter(todo => todo.text !== text));
  }

  function createTodo(text) {
    setIncompleteTodos([...incompleteTodos, { text, isCompleted: false }]);
  }

  return (
    <>
      <TodoList completedTodos={completedTodos} incompleteTodos={incompleteTodos}
      onCompletedClicked={markTodoAsCompleted}
      onDeleteClicked={deleteTodo} 
      onCreateClicked={createTodo} />
    </>
  )
}

export default App
