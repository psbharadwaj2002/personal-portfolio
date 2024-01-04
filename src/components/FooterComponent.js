import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FooterComponent() {
  const [click, setClick] = useState(0);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [click]);

  return (
    <div className="footer">
      <div className="links">
        <Link
          className="link"
          to="/"
          style={{ textDecoration: "none", color: "black" }}
          onClick={() => setClick((click) => click + 1)}
        >
          HOME
        </Link>
        <Link
          className="link"
          to="/about-me"
          style={{ textDecoration: "none", color: "black" }}
          onClick={() => setClick((click) => click + 1)}
        >
          ABOUT
        </Link>
        <Link
          className="link"
          to="/projects"
          style={{ textDecoration: "none", color: "black" }}
          onClick={() => setClick((click) => click + 1)}
        >
          PROJECTS
        </Link>
        <Link
          className="link"
          style={{ textDecoration: "none", color: "black" }}
        >
          RESUME
        </Link>
        <a
          className="link"
          href="#contactFrom"
          style={{ textDecoration: "none", color: "black" }}
        >
          CONTACT
        </a>
      </div>
      <div>
        <h3>Srinivasa Bharadwaj Peddinti</h3>
      </div>
      <div>
        <p>
          {" "}
          &#169; 2023 Copyright : <b>Srinivasa Bharadwaj Peddinti</b>
        </p>
      </div>
    </div>
  );
}

export default FooterComponent;
