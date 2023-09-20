import { PropsWithChildren } from "react";
import AuthConsumer from "../context/UserContext";
import { Navigate } from "react-router-dom";

function LoadingHeading() {
  return (
    <div className="flex justify-center items-center mt-24">
      <div className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-melon to-rosewood animate-spin">
        <div className="h-9 w-9 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}

function RequireAuth({ children }: PropsWithChildren) {
  const { authed } = AuthConsumer();

  return typeof authed == "boolean" ? (
    authed ? (
      children
    ) : (
      <Navigate to="/signup" />
    )
  ) : (
    <LoadingHeading />
  );
}

function RequireNoAuth({ children }: PropsWithChildren) {
  const { authed } = AuthConsumer();

  return typeof authed == "boolean" ? (
    !authed ? (
      children
    ) : (
      <Navigate to="/images" />
    )
  ) : (
    <LoadingHeading />
  );
}

export { RequireAuth, RequireNoAuth };
