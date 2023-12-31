import { MenuOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
  }, [click]);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top pb-4"
      style={{ backgroundColor: "#111111", marginTop: 0, paddingTop: 10 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BHARADWAJ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "1px solid white", color: "white" }}
        >
          <MenuOutlined />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={() => setClick((click) => click + 1)}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about-me"
                onClick={() => setClick((click) => click + 1)}
              >
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/projects"
                onClick={() => setClick((click) => click + 1)}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactFrom">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
