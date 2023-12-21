import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../Redux/AuthSlice";
import "./Register.css";

export default function Register() {
  const dispatch = useDispatch();
  const [img, setImg] = useState();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");

  const validation = () => {
    let error = {};
    console.log(error, "error");
    if (!user.first_name) {
      error.first_name = "first_name is Important";
    }
    if (!user.last_name) {
      error.last_name = "last_name is Important";
    }

    if (!user.email) {
      error.email = "Email is Important";
    }

    if (!user.password) {
      error.password = "Password is Important";
    }

    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "first_name") {
      if (value.length === 0) {
        setUser({ ...user, first_name: "" });
        setError({ ...error, first_name: "first_name is Important" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: "" });
      }
    }

    if (name === "last_name") {
      if (value.length === 0) {
        setUser({ ...user, last_name: "" });
        setError({ ...error, last_name: "last_name is Important" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: "" });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Email is Important" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "password is Important" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(validation());
    const formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profile_pic", img);

    dispatch(register(formData));
  };

  // const submit = async (e) => {
  //   e.preventDefault();
  //   setError(validation());
  //   let data = {
  //     name: user.name,
  //     email: user.email,
  //     mobile: user.mobile,
  //     password: user.password,
  //   };

  //   try {
  //     const response = dispatch(register(data));
  //     // console.log(response);
  //     response.then((data) => {
  //       console.log(data.payload);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <form className="my-form">
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Bob"
            name="first_name"
            onChange={postUserData}
          />
          <span style={{ color: "red" }}>{error.first_name}</span>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your name with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Bob"
            name="last_name"
            onChange={postUserData}
          />
          <span style={{ color: "red" }}>{error.last_name}</span>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your name with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="bob@gmail.com"
            name="email"
            onChange={postUserData}
          />
          <span style={{ color: "red" }}>{error.email}</span>
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
            placeholder="bob@1234"
            name="password"
            onChange={postUserData}
          />
          <span style={{ color: "red" }}>{error.password}</span>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your password with anyone else.
          </small>
        </div>

        <div>
          <label>Image</label>
          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
            name="image"
            accept="image/*"
          />
          <span style={{ color: "red", marginLeft: "24px" }}>
            {" "}
            {error.image}{" "}
          </span>
        </div>
        <button type="submit" onClick={submit} class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
