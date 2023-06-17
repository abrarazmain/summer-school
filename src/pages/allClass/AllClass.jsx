import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllClass = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-12-server-silk-beta.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const mongoUser = users?.find((User) => User?.email === user?.email);

  useEffect(() => {
    fetch(`https://assignment-12-server-silk-beta.vercel.app/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const handleAction = (classId) => {
    fetch("https://assignment-12-server-silk-beta.vercel.app/selectedClasses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: mongoUser._id, classId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success!", "class added successfully!", "ok");
        }
      })
      .catch((error) => {});
  };

  return (
    <div>
      <h1 className="text-5xl uppercase text-center text-red-600 mt-12">
        Our Classes
      </h1>
      <div className="grid grid-cols-3 my-12 gap-6">
        {classes.map((Class) => (
          // eslint-disable-next-line react/jsx-key
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{Class.name}</h2>
              <h2>Instructor Name: {Class.Instructor}</h2>
              <h2>Available Seats: {Class.seat}</h2>
              <p>Price : ${Class.price}</p>
              {user ? (
                <>
                  <button
                    disabled={
                      mongoUser?.position == "admin" ||
                      mongoUser?.position == "instructor"
                    }
                    className="btn"
                    onClick={() => handleAction(Class._id)}
                  >
                    Select Class
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn items-center ">
                      Login to select Class
                    </button>
                  </Link>
                </>
              )}
            </div>
            <figure>
              <img src={Class.url} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
