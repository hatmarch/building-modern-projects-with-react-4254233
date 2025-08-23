import TodoListItem from "./TodoListItem"

export default function TodoList({ completedTodos, incompleteTodos }) {
  return (
    <div>
      <h1>My Todos</h1>
      <p>New todo form will go here...</p>
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => {
        return <TodoListItem key={index} todo={todo} />
      })}
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo, index) => {
        return <TodoListItem key={index} todo={todo} />
      })}
    </div>
  );
}