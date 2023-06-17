import { useEffect, useState } from "react";

const AdminClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const handleAction = (status, id) => {
    fetch(`http://localhost:5000/updateClass/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(classes);
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
                  onClick={() => handleAction("approved", Class._id)}
                  className="btn btn-primary"
                >
                  Approve
                </button>
                <button className="btn btn-primary">Deny</button>
                <button className="btn btn-primary">Send Feedback</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminClass;
