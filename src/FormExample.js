import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const user = { name, email };
    setUsers([...users, user]);
    setName("");
    setEmail("");
  };

  const removeUser = index => {
    setUsers([
      ...users.slice(0, index),
      ...users.slice(index + 1)
    ])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          onChange={event => setName(event.target.value)}
        />
        <input value={email} onChange={event => setEmail(event.target.value)} />
        <button>Submit</button>
      </form>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <ul>
        <h2>Users</h2>
        <button onClick={() => setUsers([])}>Clear List</button>
        {users.map((user, i) => (
          <li onDoubleClick={() => removeUser(i)} key={i}>
            <p>
              Name: <strong>{user.name}</strong>
            </p>
            <p>
              Email: <strong>{user.email}</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
