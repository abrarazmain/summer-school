import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch(`https://assignment-12-server-silk-beta.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [reload]);

  const handleAction = (position, id) => {
    fetch(
      `https://assignment-12-server-silk-beta.vercel.app/updateUser/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ position }),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Success!", "successfully changed the role!", "ok");
        setReload(!reload);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                <button
                  onClick={() => handleAction("instructor", user._id)}
                  className="btn btn-primary"
                >
                  Make Instructor
                </button>
                <button
                  onClick={() => handleAction("admin", user._id)}
                  className="btn btn-primary"
                >
                  Make Admin
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminUser;
