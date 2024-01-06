export function TodoList({ todos }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No to-dos"}
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                //  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button
              // NOT : onClick={deleteTodo(todo.id)} => ONLY GIVES THE RETURN VALUE OF IT
              // onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger"
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}
