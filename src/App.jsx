import { useState } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Drops from "./Components/drops";
import Landing from "./Components/Landing";
import Loadings from "./Components/Loadings";


import "./App.css";

const AppRoutes = ({ score, setScore }) => {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/loading", element: <Loadings /> },
    { path: "/drops", element: <Drops score={score} setScore={setScore} /> },
  
  ]);
  return routes;
};

function App() {
  const [score, setScore] = useState(0);
  

  return (
    <BrowserRouter>
      <AppRoutes score={score} setScore={setScore} />
    </BrowserRouter>
  );
}

export default App;
