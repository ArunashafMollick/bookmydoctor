import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLoggedout, reset_redirectTo } from "../../../Redux/AuthSlice";

export default function Header() {
  const dispatch = useDispatch();

  const setClassnameFn = (e) => {
    const navLinks = document.querySelectorAll(".nav-item");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    e.target.classList.toggle("active");
  };

  const { toggle,redirectTo } = useSelector((s) => s?.Auth);

  const logout = () => {
    dispatch(handleLoggedout());
  };

  console.log(toggle);

  useEffect(() => {
    dispatch(reset_redirectTo(null));
  }, [redirectTo]);

  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div
        class="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="row gx-0 d-none d-lg-flex">
          <div class="col-lg-7 px-5 text-start">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <small class="fa fa-map-marker-alt text-primary me-2"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center py-3">
              <small class="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <small class="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center">
              <Link
                class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                to=""
              >
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link
                class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                to=""
              >
                <i class="fab fa-twitter"></i>
              </Link>
              <Link
                class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                to=""
              >
                <i class="fab fa-linkedin-in"></i>
              </Link>
              <Link
                class="btn btn-sm-square rounded-circle bg-white text-primary me-0"
                to=""
              >
                <i class="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}
      {/* <!-- Navbar Start --> */}
      <nav
        class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link
          to="/"
          class="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 class="m-0 text-primary">
            <i class="far fa-hospital me-3"></i>BookMyDoctor
          </h1>
        </Link>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              to="/"
              className="nav-item nav-link active"
              onClick={setClassnameFn}
            >
              Home
            </Link>
            <Link
              to="/about"
              class="nav-item nav-link"
              onClick={setClassnameFn}
            >
              About
            </Link>
            <Link
              to="/services"
              class="nav-item nav-link"
              onClick={setClassnameFn}
            >
              Service
            </Link>
            <Link
              to="/doctors"
              class="nav-item nav-link"
              onClick={setClassnameFn}
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              class="nav-item nav-link"
              onClick={setClassnameFn}
            >
              Contact
            </Link>

            <Link class="nav-item" onClick={setClassnameFn}>
              {toggle ? (
                <Link class=" nav-link" to="/login" onClick={logout}>
                  <u>Logout</u>
                </Link>
              ) : (
                <Link class=" nav-link" to="/login">
                  <u>Login</u>
                </Link>
              )}
            </Link>
          </div>
          <Link
            to="/doctors"
            class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Appointment<i class="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
}
