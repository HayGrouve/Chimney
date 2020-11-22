import React, { useState, useEffect, useCallback } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

function ContactContent() {
  const [size, setSize] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkSize = useCallback(() => {
    setSize(window.innerWidth);
    if (parseInt(size) < 400) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [size]);

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, [checkSize]);
  useEffect(() => {
    setSize(window.innerWidth);
    if (parseInt(size) < 400) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);

  if (isSmallScreen) {
    return (
      <ul className="ul-smallScreen text-light">
        <li>Милан Манчев</li>
        <li>0895 655 895</li>
        <li>
          <a
            className="text-light btn btn-info"
            href="https://www.facebook.com/%D0%9A%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B0%D1%87-1760617057317045"
            target="_blank"
            rel="noreferrer"
          >
            Коминочистач <FaFacebookSquare />
          </a>
        </li>
      </ul>
    );
  }
  if (!isSmallScreen) {
    return (
      <div className="container">
        <table className="table text-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Име</th>
              <th scope="col">Телефон</th>
              <th scope="col">Фейсбук</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Милан Манчев</td>
              <td>0895 655 895</td>
              <td>
                <a
                  className="text-light btn btn-info"
                  href="https://www.facebook.com/%D0%9A%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B0%D1%87-1760617057317045"
                  target="_blank"
                  rel="noreferrer"
                >
                  Коминочистач <FaFacebookSquare />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactContent;
