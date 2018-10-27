import React, { useState } from "react";
import uuidv4 from "uuid/v4";

const initialFormState = { name: "", email: "" };

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [editForm, setEditForm] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleEditInputChange = event => {
    const { name, value } = event.target;

    setEditForm({ ...editForm, [name]: value });
  };

  const addUser = event => {
    event.preventDefault();

    if (!form.name || !form.email) return;

    const user = { id: uuidv4(), ...form };

    setUsers([...users, user]);
    setForm(initialFormState);
  };

  const updateUser = event => {
    event.preventDefault();
    const updatedUsers = users.map(
      user => (user.id === editForm.id ? editForm : user)
    );
    setUsers(updatedUsers);
    setEditing(false);
  };

  const editUserData = user => {
    setEditing(true);

    setEditForm({ ...user });
  };

  const deleteUser = index => {
    setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
        <button>Add new user</button>
      </form>

      <h2>Users</h2>

      {users.length > 0 ? (
        users.map((user, i) => (
          <div key={user.id}>
            <span>{user.name}</span>
            {"  "}
            <span>{user.email}</span>
            <button onClick={() => editUserData(user)}>Edit</button>
            <button onClick={() => deleteUser(i)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No users</p>
      )}
      {editing && (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={updateUser}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleEditInputChange}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={editForm.email}
              onChange={handleEditInputChange}
            />
            <button>Update user</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
