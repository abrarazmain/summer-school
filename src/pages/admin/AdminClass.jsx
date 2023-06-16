import { useEffect, useState } from "react";

const AdminClass = () => {
  const [classes, setClasses] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  console.log(classes);
  return (
    <div className="max-w-[70%] mx-auto">
      {classes &&
        classes.map((Class) => (
          // eslint-disable-next-line react/jsx-key
          <div className="card card-side bg-base-100 shadow-xl my-4">
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
                <button className="btn btn-primary">Watch</button>
                <button className="btn btn-primary">Watch</button>
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminClass;
