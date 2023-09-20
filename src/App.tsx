import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/images");
    }
  }, [location]);

  return (
    <div className="bg-basicWhite">
      <NavBar />
      <Outlet />
      <FooterBar />
    </div>
  );
}

export default App;
