import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-between align-items-center nav py-3">
      <div className="nav__appname">
        <h1>SWAPIKU</h1>
      </div>
      <div className="nav__menuitem">
        <Link to="/">
          <span className="mx-4">Films</span>
        </Link>
        <Link to="/people">
          <span className="mx-4">People</span>
        </Link>
      </div>
    </div>
  );
}
