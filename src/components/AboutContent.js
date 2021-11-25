import React from 'react';
import komin1 from '../assets/images/komin-1.jpg';
import komin12 from '../assets/images/komin-1_2.jpg';
import komin2 from '../assets/images/komin-2.jpg';
import komin3 from '../assets/images/komin-3.jpg';
import vutre from '../assets/images/vutre.jpg';
import otvun from '../assets/images/otvun.jpg';
import chimney1 from '../assets/images/1.jpg';
import chimney2 from '../assets/images/2.jpg';
import chimney3 from '../assets/images/3.jpg';
import chimney4 from '../assets/images/4.jpg';
import chimney5 from '../assets/images/5.jpg';
import chimney6 from '../assets/images/6.jpg';
import chimney7 from '../assets/images/7.jpg';
import chimney8 from '../assets/images/8.jpg';
import chimney9 from '../assets/images/9.jpg';
import chimney10 from '../assets/images/10.jpg';
import chimney11 from '../assets/images/11.jpg';
import chimney12 from '../assets/images/12.jpg';
import chimney13 from '../assets/images/13.jpg';
import chimney14 from '../assets/images/14.jpg';
import chimney15 from '../assets/images/15.jpg';

function AboutContent() {
  return (
    <div className="jumbotron bg-dark text-light pl-0 mt-5 pr-0">
      <h1 className="display-4">Допълнителна информация</h1>
      <ul className="lead mt-5">
        <li className="border-left pl-3">
          Почистването се извършва по следния начин, димоотвода се почиства с
          различен диаметър четки и става, като нов. Саждите и нагара, които
          падат в ревизионния отвор се издърпват със строителна машина, като
          преди това всичко се облепва и няма никаква прах.
        </li>
        <li className="mt-5 border-left pl-3">
          Отпушване и почистване на комини. Много хора не знаят, че камината
          иска поддържане (обслужване) на всеки 10 кубически изгорели дървета.
          Камината е като на колата двигателя, който например на всеки 50 000
          километра иска сервизна поддръжка. Мога да предложа професионалните си
          услуги, като коминочистач.
        </li>
      </ul>
      <div className="img-holder mt-5">
        <div className="card bg-dark">
          <img
            src={komin1}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={komin12}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={komin2}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
      </div>
      <div className="img-holder mt-3">
        <div className="card bg-dark">
          <img
            src={komin3}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img src={vutre} className="card-img-top" alt="Logo" height="400px" />
        </div>
        <div className="card bg-dark">
          <img src={otvun} className="card-img-top" alt="Logo" height="400px" />
        </div>
      </div>
      <div className="img-holder mt-3">
        <div className="card bg-dark">
          <img
            src={chimney1}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney2}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney3}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
      </div>

      <div className="img-holder mt-3">
        <div className="card bg-dark">
          <img
            src={chimney4}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney5}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney6}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
      </div>

      <div className="img-holder mt-3">
        <div className="card bg-dark">
          <img
            src={chimney7}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney8}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney9}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
      </div>

      <div className="img-holder mt-3">
        <div className="card bg-dark">
          <img
            src={chimney10}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney11}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney12}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
      </div>

      <div className="img-holder mt-3">
        <div className="card bg-dark">
          <img
            src={chimney13}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney14}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
        <div className="card bg-dark">
          <img
            src={chimney15}
            className="card-img-top"
            alt="Logo"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
