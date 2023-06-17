import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const AdminClass = () => {
  const [classes, setClasses] = useState([]);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    fetch(`https://assignment-12-server-silk-beta.vercel.app/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [reload]);

  const handleAction = (status, id) => {
    fetch(
      `https://assignment-12-server-silk-beta.vercel.app/updateClass/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire('Status Updated')
        setReload(!reload);
      })
     
  };

  return (
    <div className="max-w-[70%] mx-auto">
       <h1 className="text-2xl md:text-5xl uppercase text-center text-red-600 mt-12">
        <Fade delay={1e3} cascade damping={1e-1}>
          Manage Classes
        </Fade>
      </h1>
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
                <button
                  disabled={Class.status == "approved"}
                  onClick={() => handleAction("approved", Class._id)}
                  className="btn btn-primary"
                >
                  Approve
                </button>
                <button
                  disabled={Class.status == "denied"}
                  onClick={() => handleAction("denied", Class._id)}
                  className="btn btn-primary"
                >
                  Deny
                </button>
                <button className="btn btn-primary">Send Feedback</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminClass;
