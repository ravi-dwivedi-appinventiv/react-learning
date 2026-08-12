import { useState, type ChangeEvent } from "react";

const ManageUser = () => {
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState<string[]>([]);

  const updateUsers = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUser(value);
  };

  const addUser = () => {
    setUserList((prev) => [...prev, user]);
    setUser('');
  };

  const removeUser = (removeIndex: number) => {
    setUserList((pre) => pre.filter((_, index) => index != removeIndex));
  };

  return (
    <>
      <div>
        <h3>User Form</h3>
        <input type="text" onChange={updateUsers} value={user} />
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        {userList?.length > 0 &&
          userList.map((usr, i) => (
            <div key={i}>
              <div>
                <span>
                  {" "}
                  {usr}{" "}
                  <button onClick={() => removeUser(i)}>Delete</button>{" "}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ManageUser;
