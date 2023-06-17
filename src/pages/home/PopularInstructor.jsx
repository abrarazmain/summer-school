import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const PopularInstructor = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-12-server-silk-beta.vercel.app/popularInstructor`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-5xl uppercase text-center text-red-600 mt-12">
        <Fade delay={1e3} cascade damping={1e-1}>
          Popular Instructors
        </Fade>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 my-12 gap-3">
        {classes.map((Class) => (
          // eslint-disable-next-line react/jsx-key
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{Class.name}</h2>
              <p>Email :{Class.email}</p>
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
