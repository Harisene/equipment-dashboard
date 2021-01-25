import React from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" width="50px" height="50px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
        <a className="nav-link" aria-current="page" href="/">
          login
        </a>
        <img src={user} alt="user" width="50px" height="50px" />
      </div>
    </nav>
  );
};

export default Navbar;
