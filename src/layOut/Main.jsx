
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
    </>
  );
};

export default Main;
