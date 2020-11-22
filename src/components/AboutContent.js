import React from 'react';
import komin1 from '../assets/images/komin-1.jpg';
import komin12 from '../assets/images/komin-1_2.jpg';
import komin2 from '../assets/images/komin-2.jpg';
import komin3 from '../assets/images/komin-3.jpg';
import vutre from '../assets/images/vutre.jpg';
import otvun from '../assets/images/otvun.jpg';

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
    </div>
  );
}

export default AboutContent;
