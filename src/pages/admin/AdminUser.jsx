import { useEffect, useState } from "react";

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  console.log(users);
  return (
    <div className="max-w-[70%] mx-auto">
      {users &&
        users.map((user) => (
          <div
            key={user._id}
            className="card card-side bg-base-100 shadow-xl my-4"
          >
            <figure>
              <img className="w-[200px]" src={user.url} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>

              <p>Email: {user.email}</p>
              <p>Position: ${user.position}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">make instructor</button>
                <button className="btn btn-primary">make admin</button>

              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminUser;
