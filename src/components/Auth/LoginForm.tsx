import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import validateForm from "./formValidation";
import { signIn } from "../../firebase_setup/firebase";

export default function LoginForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (emailRef.current?.value && passwordRef.current?.value) {
      const emailValue = emailRef.current.value;
      const passwordValue = passwordRef.current.value;
      const result = validateForm(emailValue, passwordValue);
      if (result == "success") {
        await signInAction(emailValue, passwordValue);
      } else if (result?.error) {
        setError(result.error);
      } else {
        setError("There was an error somwhere. Try Again");
      }
    } else {
      setError("Fill in all the required fields");
    }
  }

  async function signInAction(email, password) {
    const response = await signIn(email, password);
    if (response == "success") {
      navigate("/images");
    } else {
      if (response?.error) {
        setError(response.error);
      } else {
        setError("An error occurred. Please try again");
      }
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-y-6">
        {error && <p className="text-rosewood italic">{error}</p>}
        <div className="flex flex-col gap-y-2 w-5/6">
          <label htmlFor="email">Your Email address</label>
          <input
            className="bg-transparent border border-rosewood rounded-lg py-1 px-2 hover:outline-none  focus:outline-none focus:border-white"
            ref={emailRef}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-y-2 w-5/6">
          <label htmlFor="password">Your Password</label>
          <input
            className="bg-transparent border border-rosewood rounded-lg py-1 px-2 hover:outline-none  focus:outline-none focus:border-white"
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button
          className="bg-rosewood w-5/6 px-4 py-2 rounded-lg hover:bg-rosewood-400"
          onClick={handleSubmit}
        >
          Login
        </button>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-rosewood font-bold">Sign Up here</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
