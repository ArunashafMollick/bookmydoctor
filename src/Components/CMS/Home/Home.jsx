import React, { useState } from "react";
import CountUp from "react-countup";
import Carousel1 from "../../../img/carousel-1.jpg";
import Carousel2 from "../../../img/carousel-2.jpg";
import Carousel3 from "../../../img/carousel-3.jpg";
import AboutImg1 from "../../../img/about-1.jpg";
import AboutImg2 from "../../../img/about-2.jpg";
import FeatureImg from "../../../img/feature.jpg";
import { Link } from "react-router-dom";
import ReactTimePicker from "../ReactTimePicker/ReactTimePicker";
import Swal from "sweetalert2";

export default function Home() {
  const [name, setName] = useState("");
  const inputs = document.querySelectorAll("input");
  const textArea = document.getElementsByTagName("textarea");

  const handleClick = (e) => {
    e.preventDefault();
    inputs.forEach((input) => (input.value = ""));
    textArea.value = "";
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to change date!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setName("");
        Swal.fire({
          title: "Success!",
          text: `Congratulation ${name}. You have successfully been booked. Our counsellor will call you.`,
          icon: "success",
        });
      }
    });

    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: `Congratulation ${name}. You have successfully been booked. Our counsellor will call you.`,
    //   showConfirmButton: true,
    //   timer: 1500,
    // });
  };

  return (
    <>
      {/* <!-- Header Start --> */}
      <div class="container-fluid header bg-primary  p-0 mb-5">
        <div class="row g-0 align-items-center flex-column-reverse flex-lg-row ">
          <div class="col-lg-6 p-5 wow fadeIn col-6 " data-wow-delay="0.1s">
            <h1 class="display-4 text-white mb-5">
              Good Health Is The Root Of All Happiness
            </h1>
            <div class="row g-4">
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-white mb-1" data-toggle="counter-up">
                    <CountUp end={123} />
                  </h2>
                  <p class="text-light mb-0">Expert Doctors</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-white mb-1" data-toggle="counter-up">
                    <CountUp end={1234} />
                  </h2>
                  <p class="text-light mb-0">Medical Stuff</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-white mb-1" data-toggle="counter-up">
                    <CountUp end={12345} />
                  </h2>
                  <p class="text-light mb-0">Total Patients</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeIn col-6" data-wow-delay="0.5s">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={Carousel1} class="d-block w-100" alt="Carousel1" />
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-1 text-white mb-0">Cardiology</h1>
                    <Link to="/doctors">
                      <button type="button" class="btn btn-primary">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={Carousel2} class="d-block w-100" alt="Carousel2" />
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-1 text-white mb-0">Neurology</h1>
                    <Link to="/doctors">
                      <button type="button" class="btn btn-primary">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={Carousel3} class="d-block w-100" alt={Carousel3} />
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-1 text-white mb-0">Pulmonary</h1>
                    <Link to="/doctors">
                      <button type="button" class="btn btn-primary">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
      {/* <!-- About Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="d-flex flex-column">
                <img
                  class="img-fluid rounded w-75 align-self-end"
                  src={AboutImg1}
                  alt=""
                />
                <img
                  class="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src={AboutImg2}
                  alt=""
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p class="d-inline-block border rounded-pill py-1 px-4">
                About Us
              </p>
              <h1 class="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
              <p>
                An excellent team of dedicated cardiologists, cardiothoracic
                surgeons, anaesthetists, perfusionists, nursing and other
                paramedical staff make cardiac care complete and affordable at
                most of the Hospital.
              </p>
              <p class="mb-4">
                We have dedicated cath lab, modular operation theatres, 30
                bedded modular ICCU, ITU, 6 bedded CTVS ITU, cardiac step down
                ward to ensure safe treatment and finally ambulances for
                comfortable transportation.
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Quality
                health care
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Only
                Qualified Doctors
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Medical
                Research Professionals
              </p>
              <Link
                class="btn btn-primary rounded-pill py-3 px-5 mt-3"
                to="/about"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About End --> */}
      {/* <!-- Feature Start --> */}
      <div class="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div
              class="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div class="p-lg-5 ps-lg-0">
                <p class="d-inline-block border rounded-pill text-light py-1 px-4">
                  Features
                </p>
                <h1 class="text-white mb-4">Why Choose Us</h1>
                <p class="text-white  mb-4 pb-2">
                  When it comes to your healthcare, we understand that you have
                  choices. Our mission is to improve the lives of our patients
                  through comprehensive, compassionate, and evidence-based
                  healthcare. We believe in fostering a healing environment that
                  promotes trust, respect, and open communication.
                </p>
                <div class="row g-4">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i class="fa fa-user-md text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">Experience</p>
                        <h5 class="text-white mb-0">Doctors</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i class="fa fa-check text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">Quality</p>
                        <h5 class="text-white mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i class="fa fa-comment-medical text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">Positive</p>
                        <h5 class="text-white mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i class="fa fa-headphones text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">24 Hours</p>
                        <h5 class="text-white mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px" }}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute img-fluid w-100 h-100"
                  src={FeatureImg}
                  style={{ objectFit: "cover" }}
                  alt="FeatureImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End --> */}
      {/* <!-- Appointment Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p class="d-inline-block border rounded-pill py-1 px-4">
                Appointment
              </p>
              <h1 class="mb-4">Make An Appointment To Visit Our Doctor</h1>
              <p class="mb-4">
                Enable doctors to e-prescribe medications and allow patients to
                access and refill their prescriptions through the app. Offer
                video and chat consultation options for patients who prefer
                remote medical advice. Incorporate a secure messaging system
                that allows patients to communicate with their healthcare
                providers, seek advice, and ask questions.
              </p>
              <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-phone-alt text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Call Us Now</p>
                  <h5 class="mb-0">+012 345 6789</h5>
                </div>
              </div>
              <div class="bg-light rounded d-flex align-items-center p-5">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-envelope-open text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Mail Us Now</p>
                  <h5 class="mb-0">bookmydoctor@gmail.com</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                <form
                  className="ismForm"
                  onSubmit={(e) => handleClick(e, name)}
                >
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        type="email"
                        class="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <select
                        class="form-select border-0"
                        style={{ height: "55px" }}
                      >
                        <option selected>Dr. Chandrima Dasgupta</option>
                        <option value="1">Dr. Kunal Sarkar</option>
                        <option value="2">Dr. L. N. Tripathy</option>
                        <option value="3">Dr. Sourav Datta</option>
                      </select>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div
                        id="datepicker1"
                        className="input-group date my-date-fav"
                        data-date-format="mm-dd-yyyy"
                        style={{ height: "55px" }}
                      >
                        <input class="form-control" type="text" readonly />
                        <span class="input-group-addon">
                          <i class="far fa-calendar-alt"></i>
                        </span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div
                        className="input-group time my-time-fav"
                        style={{ height: "55px" }}
                      >
                        <ReactTimePicker />
                      </div>
                    </div>
                    <div class="col-12">
                      <textarea
                        class="form-control border-0"
                        rows="5"
                        placeholder="Describe your problem"
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Appointment End --> */}
    </>
  );
}
