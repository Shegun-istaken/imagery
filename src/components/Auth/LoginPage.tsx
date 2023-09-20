import AuthDesign from "./AuthDesign";
// import { Outlet } from "react-router-dom";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <AuthDesign type="login">
     <div className="bg-glaucous py-8 my-8 pl-4 text-basicWhite xsm:pl-8 msm:pl-12 md:p-8 md:w-2/3 lg:pl-10 lg:pr-4 xl:pl-16 rounded-lg">
        <div className="flex flex-col gap-y-8">
          <h1 className="text-2xl text-rosewood lg:text-3xl " >Log In to Imagery</h1>
          <LoginForm />
        </div>
      </div>
    </AuthDesign>
  );
}

export default LoginPage;
