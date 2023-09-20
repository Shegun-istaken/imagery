import logo from "../assets/ImageryLogo.svg";
import AuthConsumer from "../context/UserContext";
import { signOutAction } from "../firebase_setup/firebase";
import { useNavigate, Link } from "react-router-dom";
import person from "../assets/personIcon.svg";

export default function NavBar() {
  const { authed, userMail } = AuthConsumer();
  const navigate = useNavigate();

  function handleSignOut() {
    signOutAction();
    navigate("/login");
  }

  return (
    <div className="flex flex-col items-center pt-8 gap-y-4 sm:flex-row sm:justify-between sm:px-16 md:px-20 lg:px-28 xl:px-36">
      <img
        src={logo}
        alt="Imagery Logo"
        className="w-2/3 xsm:w-1/2 msm:w-1/3 md:w-1/4 xl:w-[15%] "
      />
      {authed ? (
        <nav className="flex justify-center items-end gap-y-2 py-2 gap-x-4 sm:items-center">
          <div className="flex flex-col gap-x-2 items-center">
            <img src={person} alt="personIcon" className="w-4 sm:w-8 " />
            {typeof userMail == "string" && <p>{userMail.split("@")[0]}</p>}
          </div>
          <button
            onClick={handleSignOut}
            className="bg-rosewood text-sm py-1 px-2 rounded-lg text-fairy_tale sm:py hover:opacity-80 sm:text-base sm:py-2 sm:px-4"
          >
            Sign Out
          </button>
        </nav>
      ) : (
        <nav className="flex gap-x-2 xsm:gap-x-4">
          <Link to="/login">
            <button className="bg-rosewood py-2 px-4 rounded-lg text-fairy_tale sm:py hover:opacity-80">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-rosewood py-2 px-4 rounded-lg text-fairy_tale sm:py hover:opacity-80">
              Sign Up
            </button>
          </Link>
        </nav>
      )}
    </div>
  );
}
