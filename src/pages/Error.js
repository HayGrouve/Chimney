import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs';

function Error() {
  return (
    <div className="error-holder text-light">
      <h1>Грешна страница!</h1>
      <Link to="/" className="btn btn-info">
        Начало <BsFillHouseDoorFill />
      </Link>
    </div>
  );
}

export default Error;
