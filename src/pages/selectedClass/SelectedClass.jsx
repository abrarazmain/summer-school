import { useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const SelectedClass = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const mongoUser = users?.find((User) => User?.email === user?.email);
  console.log(mongoUser);

  useEffect(() => {
    fetch(`http://localhost:5000/selectedClasses/${mongoUser?._id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setClasses(data);
      });
  }, [classes]);

  console.log(classes);

  return (
    <div>
      <h1 className="text-5xl uppercase text-center text-red-600 mt-12">
        Popular Language Classes
      </h1>
      <div className="grid grid-cols-3 my-12 gap-3">
        {classes &&
          classes.map((Class) => (
            <div
              key={Class._id}
              className="card card-side bg-base-100 shadow-xl my-4"
            >
              <figure>
                <img className="w-[200px]" src={Class.url} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{Class.name}</h2>
                <p>Instructor name: {Class.Instructor}</p>
                <p>Instructor Email: {Class.email}</p>
                <p>Price: ${Class.price}</p>
                <p>Available Seats{Class.seat}</p>
                <p>Approve status: {Class.status}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Approve</button>

                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectedClass;
