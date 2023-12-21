import React, { useEffect, useState } from "react";
import {
  handleRegister,
  login,
  reset_redirectToo,
} from "../../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../CMS/Loader/Loader";

export default function Login() {
  const [isSignedIn, setLoader] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirectTo, redirectToo } = useSelector((s) => s?.Auth);

  const validation = () => {
    let error = {};
    if (!user.email) {
      error.email = "Email is important!";
    }
    if (!user.password) {
      error.password = "Password is important!";
    }

    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Email is important" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "Password is important" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };

  // ====================== using localhost:2000 server

  const submit = async (e) => {
    setLoader(true);
    e.preventDefault();
    setError(validation());
    setTimeout(() => {
      setLoader(false);
    }, 3000);
    let data = {
      email: user.email,
      password: user.password,
    };

    try {
      const response = dispatch(login(data));
      // console.log(response);
      response.then((data) => {
        console.log(data.payload);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(reset_redirectToo(null));
  }, [redirectToo]);

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      // window.location.pathname = getPathname;
      isInLoginPage && navigate("/doctors");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectTo]);

  const reg = () => {
    dispatch(handleRegister());
  };

  return (
    <>
      <form className="my-form">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={postUserData}
          />
          <p style={{ color: "red" }}>{error.email}</p>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={postUserData}
          />
          <p style={{ color: "red" }}>{error.password}</p>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your password with anyone else.
          </small>
        </div>

        {isSignedIn ? (
          <Loader />
        ) : (
          <button type="submit" class="btn btn-primary" onClick={submit}>
            Submit
          </button>
        )}

        <Link
          onClick={reg}
          to="/register"
          style={{ color: "green", marginLeft: "10px" }}
        >
          Go For Reg
        </Link>
      </form>
    </>
  );
}
