import { useState, useEffect } from "react";
import "./drops.css";
import gotaImg from "../assets/gotas.png";
import numero10Img from "../assets/numero-10-1.jpg";
import juego from "../assets/JUEGOG.png";
import ResultsScore from "./ResultsScore";

// eslint-disable-next-line react/prop-types
const Drops = ({ score, setScore }) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [showDrops, setShowDrops] = useState(true);
  const [showResultsScore, setShowResultsScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Estado para el tiempo restante

  const handleClick = (index) => {
    if (!clicked[index]) {
      setScore((prevScore) => prevScore + 10);
      console.log("score drops", score);
    }
    setClicked((prevClicked) =>
      prevClicked.map((c, i) => (i === index ? true : c))
    );

    setTimeout(() => {
      setClicked((prevClicked) =>
        prevClicked.map((c, i) => (i === index ? false : c))
      );
    }, 1000);
  };

  useEffect(() => {
    if (showDrops) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setShowDrops(false);
            setShowResultsScore(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showDrops]);

  return (
    <div>
      <img src={juego} alt="inicio" className="full-screen-imageDrops" />
      <div className="subtitle">
        <p >TIEMPO: {timeLeft} seg </p> 
        <p >PUNTAJE: {score} pts</p>
      </div>
      {showDrops && (
  <div className="gotas">
    {clicked.map((isClicked, index) => (
      <div
        key={index}
        className="gota"
        style={{
          backgroundImage: `url(${isClicked ? numero10Img : gotaImg})`,
          ...(isClicked && { width: "5vw", height: "5vw" }), // Solo aplica el tamaño si isClicked es verdadero
        }}
        onClick={() => handleClick(index)}
      ></div>
    ))}
  </div>
)}
      {showResultsScore && <ResultsScore score={score} />}
    </div>
  );
};

export default Drops;
