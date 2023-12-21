import React from "react";
import video1 from "./../../../img/video.mp4";
import { Link } from "react-router-dom";

import priceImg1 from "../../../img/price-1.jpg";
import priceImg2 from "../../../img/price-2.jpg";
import priceImg3 from "../../../img/price-3.jpg";
import priceImg4 from "../../../img/price-4.jpg";

import testimonialImg1 from "../../../img/testimonial-1.jpg";
import testimonialImg2 from "../../../img/testimonial-2.jpg";
import testimonialImg3 from "../../../img/testimonial-3.jpg";

export default function About() {
  return (
    <>
      <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
        <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">
          Medical Packages
        </h5>
        <h1 class="display-4">Awesome Medical Programs</h1>
      </div>
      {/* <!-- Pricing Plan Start --> */}
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row programs-row">
              <div class="col-6 col-md-4">
                <div class="card">
                  <div class="bg-light rounded text-center">
                    <div class="position-relative">
                      <img
                        class="img-fluid rounded-top"
                        src={priceImg1}
                        alt=""
                      />
                      <div
                        class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                        style={{ background: "rgba(29, 42, 77, 0.8)" }}
                      >
                        <h3 class="text-primary">Pregnancy Care</h3>
                        <h1 class="display-4 text-white mb-0">
                          <small
                            class="align-top fw-normal"
                            style={{ fontSize: "22px", lineHeight: "45px" }}
                          >
                            $
                          </small>
                          49
                          <small
                            class="align-bottom fw-normal"
                            style={{ fontSize: "16px", lineHeight: "40px" }}
                          >
                            / Year
                          </small>
                        </h1>
                      </div>
                    </div>
                    <div class="text-center py-5">
                      <p>Emergency Medical Treatment</p>
                      <p>Highly Experienced Doctors</p>
                      <p>Highest Success Rate</p>
                      <p>Telephone Service</p>
                      <Link
                        to="/contact"
                        class="btn btn-primary rounded-pill py-3 px-5 my-2"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4">
                <div class="bg-light rounded text-center">
                  <div class="position-relative">
                    <img class="img-fluid rounded-top" src={priceImg3} alt="" />
                    <div
                      class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, 0.8)" }}
                    >
                      <h3 class="text-primary">Dental Care</h3>
                      <h1 class="display-4 text-white mb-0">
                        <small
                          class="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        149
                        <small
                          class="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div class="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <Link
                      to="/contact"
                      class="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4">
                <div class="bg-light rounded text-center">
                  <div class="position-relative">
                    <img class="img-fluid rounded-top" src={priceImg4} alt="" />
                    <div
                      class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 class="text-primary">Operation & Surgery</h3>
                      <h1 class="display-4 text-white mb-0">
                        <small
                          class="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        199
                        <small
                          class="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div class="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <Link
                      to="/contact"
                      class="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Pricing Plan End --> */}
      {/* <!-- Testimonial Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p class="d-inline-block border rounded-pill py-1 px-4">
              Testimonial
            </p>
            <h1>What Say Our Patients!</h1>
          </div>

          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="testimonial-item text-center">
                  <img
                    class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                    src={testimonialImg1}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div class="testimonial-text rounded text-center p-4">
                    <p>
                      I've been seeing Dr. Richardson for a few years now, after
                      scratching my cornea while out on a walk. I see him
                      annually for dilation and monitoring my eye health. His
                      entire office is professional and so caring. I had a very
                      thorough exam after having LongCovid and am happy to have
                      his insights on my eye care. Thankfully, my eyes are still
                      stable and well. He takes the time to answer questions and
                      communicates clearly. So wonderful to have this kind of
                      attentive care. Plus? HIs staff is terrific.
                    </p>
                    <h5 class="mb-1">Ailia M.</h5>
                    <span class="fst-italic">Pasadena, CA</span>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial-item text-center">
                  <img
                    class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                    src={testimonialImg2}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div class="testimonial-text rounded text-center p-4">
                    <p>
                      I have advanced glaucoma. After 10 years on IOP lowering
                      drops my quality of life was suffering. Surgical
                      intervention was required. I did my due diligence. For 3
                      years I evaluated surgeons and surgeries. I chose ABiC
                      combined with cataract surgery performed by Dr David
                      Richardson at San Marino Eye, a mere 8,000 + miles from my
                      home in Australia. The surgery was successfully performed
                      on Friday Nov 8 & 22. Did I make the right decision? You
                      bet I did! Along with his team at San Marino Eye, Dr
                      Richardson's priority was my eyesight. I could wax on
                      positively about patient access, generosity of time,
                      professionalism, up to the minute procedures etc etc, all
                      of which is true. However, the comment made to me by a
                      theatre nurse, as I was in hospital recovery, sums up my
                      whole experience perfectly, "... you were lucky having
                      this Surgeon" I couldn't agree more!
                    </p>
                    <h5 class="mb-1">Robert</h5>
                    <span class="fst-italic">McCracken, Australia</span>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial-item text-center">
                  <img
                    class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                    src={testimonialImg3}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div class="testimonial-text rounded text-center p-4">
                    <p>
                      Dr Richardson is great. I have a high level of confidence
                      in him. I am picky, and tried several retinologists before
                      finding Dr. Richardson, but was very pleased with his care
                      of me while I lived in Califfornia.
                    </p>
                    <h5 class="mb-1">Steve S.</h5>
                    <span class="fst-italic">Hillsborough, NC</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
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
      {/* <!-- Testimonial End --> */}
    </>
  );
}
