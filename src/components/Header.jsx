import React from "react";
import "../styles/App.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <a className="navbar-brand ps-4" href="#about">
        <strong className="py-2 px-1 border border-3 border-dark border-radius-2 rounded h3">
          BM
        </strong>
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
      <div className="collapse navbar-collapse align-middle" id="navbarNav">
        <ul className="navbar-nav d-flex justify-content-between w-100">
          <li flex-grow-1 className="p-2">
            <ul className="background-hover navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </li>
          <li className="p-2">
            <ul className="navbar-nav">
              <li className="nav-item ps-3">
                <a className="navbar-brand" href="#footer">
                  <strong className="contact p-1 border border-3  border-radius-2 border-dark rounded h3">
                    Contact Me
                  </strong>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
