import { useState } from "react";

const ManageUser = () => {
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState([]);

  const updateUsers = (event) => {
    setUser(event.target.value);
  };

  const addUser = () => {
    const trimmedUser = user.trim();

    if (!trimmedUser) {
      return;
    }

    setUserList((prev) => [...prev, trimmedUser]);
    setUser("");
  };

  const removeUser = (removeIndex) => {
    setUserList((prev) =>
      prev.filter((_, index) => index !== removeIndex)
    );
  };

  return (
    <>
      <div>
        <h3>User Form</h3>

        <input
          type="text"
          value={user}
          onChange={updateUsers}
        />

        <button onClick={addUser}>
          Add User
        </button>
      </div>

      <div>
        {userList.map((usr, index) => (
          <div key={index}>
            <span>{usr}</span>

            <button onClick={() => removeUser(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManageUser;