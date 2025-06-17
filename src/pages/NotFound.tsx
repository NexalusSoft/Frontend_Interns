import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../css/NotFound.css";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <h1 className="background-404">404</h1>

      <div className="content">
        <h1 className="error-heading">Oops! The Page<br />Not Found.</h1>
        <p className="description">
          Proin non eros elementum, sagittis diam at, feugiat nunc. Ut velit arcu, posuere at neque quis,
          vestibulum vehicula dui. Praesent at felis ante. Cras sed ultricies risus. Nullam porta fermentum
          egestas. Praesent quis mauris ultrices.
        </p>
        <button className="home-btn" onClick={goHome}>
          Back To Home <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
