// import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./Components/ShareModule/Header/Header";
import Footer from "./Components/ShareModule/Footer/Footer";
import Home from "./Components/CMS/Home/Home";
import About from "./Components/CMS/About/About";
import Services from "./Components/CMS/Services/Services";
import Contact from "./Components/CMS/Contact/Contact";
import Doctors from "./Components/CMS/Doctors/Doctors";
import Register from "./Components/Auth/Register/Register";
import Login from "./Components/Auth/Login/Login";
import { check_token } from "./Redux/AuthSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  function PrivateRoute({ children }) {
    console.log(children, "children");
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {toast.warn("Please Login First")}
      </>
    );
  }

  const PublicRoute = [
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/services",
      Component: <Services />,
    },
    {
      path: "/contact",
      Component: <Contact />,
    },

    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/register",
      Component: <Register />,
    },
  ];

  const PrivateRouteing = [
    {
      path: "/doctors",
      Component: <Doctors />,
    },
  ];

  useEffect(() => {
    dispatch(check_token());
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {PublicRoute?.map((route, index) => {
            return <Route exact path={route.path} element={route.Component} />;
          })}

          {PrivateRouteing?.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
              />
            );
          })}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
