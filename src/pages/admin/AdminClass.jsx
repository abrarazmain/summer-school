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
    <div className="max-w- mx-auto grid grid-cols-">
    
      {classes&& classes.map((Class) => (
        // eslint-disable-next-line react/jsx-key
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
                  <img
                      className="w-[200px]"
              src={Class.url}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
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
