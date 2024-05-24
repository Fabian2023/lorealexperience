import { useNavigate } from "react-router-dom";
import "./landing.css";
import inicio from "../assets/INCIO.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/loading");
  };

  

  return (
    <div className="page-container">
      <div className="picture-container">
        <img src={inicio} alt="inicio"  className="full-screen-image"></img>
      </div>
      
      <div className="button-container">
        <button onClick={handleClick}>JUEGA YA</button>
      </div>
    </div>
  );
};

export default Landing;
