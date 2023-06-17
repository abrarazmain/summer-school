import { useEffect, useState } from "react";

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
        setReload(!reload);
      })
      .catch((error) => {});
  };

  return (
    <div className="max-w-[70%] mx-auto">
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
                  onClick={() => handleAction("approved", Class._id)}
                  disabled={Class.status == "denied"}
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
