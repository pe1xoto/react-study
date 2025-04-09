import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Peixoto", "Flakao", "Neymar"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Peixoto", age: 20 },
    { id: 24245252552, name: "Flakao", age: 30 },
    { id: 353537675756833, name: "Neymar", age: 33 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
