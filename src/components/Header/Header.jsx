import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .then((error) => console.log(error));
  };

  return (
    <>
      <header className="bg-slate-900 py-4 px-8 rounded flex-col space-y-5 md:space-y-0 md:flex-row flex justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className="flex items-center space-x-5 text-white">
            <Link to="/">Shop</Link>
            <Link to="/Order">Order</Link>
            <Link to="/Inventory">Inventory</Link>
            <Link to="/Login">Login</Link>

            {user ? (
              <button onClick={handleLogOut}>
                <Link>Sign out</Link>
              </button>
            ) : (
              <Link to="/signUp">Sign Up</Link>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
