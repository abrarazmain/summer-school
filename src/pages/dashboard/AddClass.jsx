import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Fade } from "react-awesome-reveal";

const AddClass = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const { email, displayName } = user || {};

  const onSubmit = (data) => {
    const processedData = {
      ...data,
      price: parseFloat(data.price),
      seat: parseFloat(data.seat),
      status: "pending",
    };

    fetch("https://assignment-12-server-silk-beta.vercel.app/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(processedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Success!", "class added successfully!", "ok");
        }
      });
  };
  return (
    <form className="mb-36 rounded" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl md:text-5xl uppercase text-center text-red-600 mt-12">
        <Fade delay={1e3} cascade damping={1e-1}>
          Add A CLass
        </Fade>
      </h1>
      <div className="grid gap-6  md:grid-cols-2 bg-base-400 py-4 px-3  ">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Picture URL
          </label>
          <input
            {...register("url")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="URL"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Class Name
          </label>
          <input
            {...register("name")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="Class Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Instructor name
          </label>
          <input
            value={displayName || ""}
            {...register("Instructor")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Instructor Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Instructor Email
          </label>
          <input
            value={email || ""}
            {...register("email")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Instructor Email"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            {...register("price")}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="price"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            {...register("seat")}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Available seat"
          />
        </div>
        <input
          className="btn bg-[#65C3C8] text-black"
          type="submit"
          value="Add"
        />
      </div>
    </form>
  );
};

export default AddClass;
