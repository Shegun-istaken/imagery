import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-basicWhite">
      <NavBar />
      <Outlet />
      <FooterBar />
    </div>
  );
}

export default App;
