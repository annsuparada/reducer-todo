import React, { useState } from "react";
function TodoForm({ add }) {
  const [value, setValues] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    add(value);
    setValues('')
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={value}
          placeholder="Enter a Todo"
          onChange={e => setValues(e.target.value)}
        />
        <button>Add Todos</button>
      </form>
      <button>Clear Completed</button>
    </div>
  );
}
export default TodoForm;