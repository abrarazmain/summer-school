import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/popularInstructor`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  console.log(classes);

  return (
    <div>
      <h1 className="text-5xl uppercase text-center text-red-600 mt-12">
        Popular Instructors
      </h1>
      <div className="grid grid-cols-3 my-12 gap-3">
        {classes.map((Class) => (
          // eslint-disable-next-line react/jsx-key
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{Class.name}</h2>
              <p>Price : ${Class.email}</p>
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

export default PopularInstructor;
