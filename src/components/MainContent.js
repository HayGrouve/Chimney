import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';
import logo from '../assets/images/logo.jpg';
import selfie from '../assets/images/selfie.jpg';
import golqm_komin from '../assets/images/big-komin.jpg';
function MainContent() {
  return (
    <>
      <div className="jumbotron jumbotron-main bg-dark text-light pl-5">
        <img className="jumbotron-bg" src={logo} alt="" />
        <h1 className="display-4">Запушен комин?</h1>
        <p className="lead">
          Добре дошли! Ние почистваме, отпушваме и ремонтираме комини и
          отдушници. Изработваме шапки за комини и други.
        </p>
        <hr className="my-4" style={{ background: 'white' }} />
        <Link to="/contact" className="btn btn-success">
          За контакти <MdContactPhone />
        </Link>
      </div>

      <div className="card-holder mt-5 mb-5">
        <div className="card bg-dark text-light" style={{ width: '25rem' }}>
          <img
            src={selfie}
            className="card-img-top"
            alt="Logo"
            height="500px"
          />
          <div className="card-body">
            <h5 className="card-title">За мен</h5>
            <p className="card-text">
              Професионален коминочистач съм от 20 години, работил съм в няколко
              държави, работя бързо и качественно...
            </p>
            <Link to="/about" className="btn btn-success">
              Информация <BsInfoCircleFill />
            </Link>
          </div>
        </div>
        <div className="card bg-dark text-light" style={{ width: '25rem' }}>
          <img
            src={golqm_komin}
            className="card-img-top"
            alt="Logo"
            height="500px"
          />
          <div className="card-body">
            <h5 className="card-title">Цени и срокове</h5>
            <p className="card-text">
              Всеки комин изисква различен подход, който налага повече/по-малко
              време и ресурси. Свържете се с мен, с радост ще помогна!
            </p>
            <Link to="/contact" className="btn btn-success">
              Контакти <MdContactPhone />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
