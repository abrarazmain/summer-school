import { useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const SelectedClass = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [allClass, setAllClass] = useState([]);
  const [reload, setReload] = useState(true);
  const commonClasses = allClass.filter((classItem) => {
    return classes.some((classObj) => classObj.classId === classItem._id);
  });

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/classes`)
      .then((res) => res.json())
      .then((data) => {
        setAllClass(data);
      });
  }, [reload]);

  const mongoUser = users?.find((User) => User?.email === user?.email);
  console.log(mongoUser);

  useEffect(() => {
    fetch(`http://localhost:5000/selectedClasses/${mongoUser?._id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setClasses(data);
      });
  }, [mongoUser?._id, reload]);

  const handleDelete = (classId) => {
    console.log(classId);
    fetch(`http://localhost:5000/selectedClasses/${classId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("deleted");
        setReload(!reload);
        console.log(data.message); // Display success message
        // Perform any additional actions or updates on the client-side
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log();

  return (
    <div>
      <h1 className="text-5xl uppercase text-center text-red-600 mt-12">
        <Fade delay={1e3} cascade damping={1e-1}>
          Your Selected Classes
        </Fade>
      </h1>
      <div className="grid grid-cols-3 my-12 gap-3">
        {commonClasses &&
          commonClasses.map((Class) => (
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
                  <button
                    onClick={() => handleDelete(Class?._id)}
                    className="btn btn-primary"
                  >
                    Delate
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectedClass;
