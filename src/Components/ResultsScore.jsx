import "./resultsScore.css";
import PantallaFinal from "../assets/PANTALLA FINALL.png";

// eslint-disable-next-line react/prop-types
const ResultsScore = ({ score }) => {
  console.log("Score en results:", score);

  return (
    <div className="results-score-container">
      <img
        src={PantallaFinal}
        alt="inicio"
        className="full-screen-imageFinal"
      />
      <h1>PUNTAJE: {score} pts</h1>
      {/* {score >= 30 && <p className="prize-message">¡Ganaste un premio!</p>} */}
    </div>
  );
};

export default ResultsScore;
