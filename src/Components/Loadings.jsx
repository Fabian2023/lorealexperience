import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import conteo from "../assets/CONTEO.png";
import "./loading.css";

// eslint-disable-next-line react/prop-types
const Loading = ({ onTimeout }) => {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/drops");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onTimeout]);

  return (
    <div>
      <img src={conteo} alt="inicio" className="full-screen-imageLoading"></img>
      <div className="title-loading">
        <h1 className="title">! PREPÁRATE !</h1>
        <div className="loading-circle">{counter}</div>
      </div>
      <div className="timesload">
        <h2>TIEMPO: 30 seg</h2>
      </div>
    </div>
  );
};

export default Loading;
