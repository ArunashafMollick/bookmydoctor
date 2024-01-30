import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    const inputs = document.querySelectorAll("input");
    console.log(inputs);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const messageBox = document.getElementById("message");
    inputs.forEach((input) => (input.value = ""));
    console.log(messageBox);
    messageBox.value = "";

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Congratulations ${name}, you have successfuly availed for this package. Our consultant will call you. Keep in touch! `,
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <>
      {/* <!-- Contact Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-4">
              <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-map-marker-alt text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Address</p>
                  <h5 class="mb-0">123 Sector-V, College More, India</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="h-100 bg-light rounded d-flex align-items-center p-5">
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
            </div>
            <div class="col-lg-4">
              <div class="h-100 bg-light rounded d-flex align-items-center p-5">
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
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="bg-light rounded p-5">
                <p class="d-inline-block border rounded-pill py-1 px-4">
                  Contact Us
                </p>
                <h1 class="mb-4">Have Any Query? Please Contact Us!</h1>
                <p class="mb-4">
                  It's crucial to maintain a high standard of security, data
                  privacy, and user support throughout the process. 24x7
                  Customer support feature to assist users with any issues they
                  may encounter
                </p>
                <form action="/" onSubmit={handleSubmit}>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        class="btn btn-primary w-100 py-3"
                        type="submit"
                        onClick={handleClick}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="h-100" style={{ minHeight: "400px" }}>
                <iframe
                  class="rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1039987526347!2d88.4248595743533!3d22.57521333287647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1706625246004!5m2!1sen!2sin"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
}
