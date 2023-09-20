import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../components/Auth/LoginPage";
import SignUpPage from "../components/Auth/SignUpPage";
import MainPage from "../components/MainPage/MainPage";
import { RequireAuth, RequireNoAuth } from "./RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: (
          <RequireNoAuth>
            <LoginPage />
          </RequireNoAuth>
        ),
      },
      {
        path: "/signup",
        element: (
          <RequireNoAuth>
            <SignUpPage />
          </RequireNoAuth>
        ),
      },
      {
        path: "/images",
        element: (
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export { router };
