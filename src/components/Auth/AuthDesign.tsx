import { ReactNode } from "react";
import login from "../../assets/login.svg";
import signup from "../../assets/signup.svg";

type AuthDesignProps = {
  children: ReactNode;
  type: string;
};

function AuthDesign({ children, type }: AuthDesignProps) {
  return (
    <main className="md:flex md:mx-4 md:items-center md:justify-between md:mt-4 md:px-16 xmd:mx-16 lg:w-3/4 lg:mx-auto lg:gap-x-16">
      <div>
        <img
          className="hidden md:block md:w-5/6"
          src={type == "login" ? login : signup}
          alt="login illustration"
        />
      </div>
      {children}
    </main>
  );
}

export default AuthDesign;
