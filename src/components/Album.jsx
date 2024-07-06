import { useEffect, useState } from "react";
import Card from "./shared/Card";

const Album = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <p>{users.length}</p>
      {users.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          // email={user.email}
          // username={user.username}
          // name={user.name}
          user={user}
        />
      ))}
    </div>
  );
};

export default Album;
