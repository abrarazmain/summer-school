import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const mongoUser = users?.find((User) => User?.email === user?.email);
  console.log(mongoUser);

  console.log(mongoUser?.position);

  let navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Instructor</Link>
      </li>
      <li>
        <Link to='/classes'>Classes</Link>
      </li>
    </>
  );

  if (user) {
    if (mongoUser?.position === "student") {
      navItems = (
        <>
          {navItems}
          <li>
            <Link to="selectedClass">Selected Class</Link>
          </li>
        </>
      );
    } else if (mongoUser?.position === "instructor") {
      navItems = (
        <>
          {navItems}
          <li>
            <Link to="/addClass">Add Class</Link>
          </li>
        </>
      );
    } else if (mongoUser?.position === "admin") {
      navItems = (
        <>
          {navItems}
          <li>
            <Link to="/adminClass">Manage Class</Link>
          </li>
          <li>
            <Link to="/adminUser">Manage User</Link>
          </li>
        </>
      );
    }
  }
  return (
    <div className="navbar bg-base-300 rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          ></ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SummerLanguage</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="w-10 rounded mr-4 group relative  flex justify-center">
            <img src={user.photoURL} />
            <span className="absolute right-10 scale-0 rounded bg-gray-800 p-4 text-xs text-white group-hover:scale-100">
              {user.displayName}{" "}
            </span>
          </div>
        )}
        {user ? (
          <NavLink onClick={logOut} className="btn">
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
