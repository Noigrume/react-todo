export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        // NOT : onClick={deleteTodo(id)} => ONLY GIVES THE RETURN VALUE OF IT
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        x
      </button>
    </li>
  );
}
