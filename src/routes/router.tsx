/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
// import LandingPage from "../components/LandingPage/LandingPage";
import SignUp from "../auth/SignUp";
import Hero from "../components/Hero/Hero";
import PrivateRoute from "../routes/PrivateRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LogIn from "../auth/LogIn";
import NewLandingPage from "../components/LandingPage/NewLandingPage";

const GoogleWrapper = ({ children }: any) => (
  <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ""}>
    {children}
  </GoogleOAuthProvider>
);

export const router = createBrowserRouter([
  { path: "/", element: <NewLandingPage /> },
  {
    path: "/signup",
    element: (
      <GoogleWrapper>
        {" "}
        <SignUp />
      </GoogleWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <GoogleWrapper>
        {" "}
        <LogIn />
      </GoogleWrapper>
    ),
  },
  {
    path: "/new",
    element: (
      <PrivateRoute>
        <Hero />
      </PrivateRoute>
    ),
  },
]);
