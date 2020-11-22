import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';
import { AiOutlineCaretLeft } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand brand-border" to="/">
          <BsFillHouseDoorFill />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                <AiOutlineCaretLeft className="pb-1" />
                Начало
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                Информация <BsInfoCircleFill className="ml-1" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Контакти <MdContactPhone className="ml-1" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
