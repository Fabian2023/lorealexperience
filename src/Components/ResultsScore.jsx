import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./resultsScore.css";
import PantallaFinal from "../assets/PANTALLA FINALL.png";

// eslint-disable-next-line react/prop-types
const ResultsScore = ({ score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a la página de inicio después de 6 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 8000);

    // Limpia el temporizador si el componente se desmonta antes de que se cumplan los 6 segundos
    return () => clearTimeout(timer);
  }, [navigate]);

  console.log("Score en results:", score);

  return (
    <div className="results-score-container">
      <img
        src={PantallaFinal}
        alt="inicio"
        className="full-screen-imageFinal"
      />
      <h1>PUNTAJE: {score} pts</h1>
    </div>
  );
};

export default ResultsScore;
