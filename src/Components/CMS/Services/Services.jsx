import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowModal from "../ShowModal/ShowModal";
import "./Services.css";

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [disease, setDisease] = useState("");

  const closeModal = () => setShowModal(false);

  return (
    <>
      {/* <!-- Service Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p class="d-inline-block border rounded-pill py-1 px-4">Services</p>
            <h1>Health Care Solutions</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-heartbeat text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Cardiology</h4>
                <p class="mb-4">
                  Cardiology is a branch of medicine that concerns diseases and
                  disorders of the heart...
                </p>
                <Link
                  class="btn"
                  to=""
                  onClick={() => {
                    setDisease("Cardiology");
                    setShowModal(true);
                  }}
                >
                  <i class="fa fa-plus text-primary me-3"></i>Read More
                </Link>
                {showModal && disease === "Cardiology" && (
                  <ShowModal params={"Cardiology"} closeModal={closeModal} />
                )}
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-x-ray text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Pulmonary</h4>
                <p class="mb-4">
                  Pulmonary hypertension is a type of high blood pressure that
                  affects the arteries in the lungs and the right side of the
                  heart.
                </p>
                <Link
                  class="btn"
                  to=""
                  onClick={() => {
                    setDisease("Pulmonary");
                    setShowModal(true);
                  }}
                >
                  <i class="fa fa-plus text-primary me-3"></i>Read More
                </Link>
                {showModal && disease === "Pulmonary" && (
                  <ShowModal params={"Pulmonary"} closeModal={closeModal} />
                )}
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-brain text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Neurology</h4>
                <p class="mb-4">
                  Neurology is the branch of medicine that deals with the study
                  and treatment of nervous system disorders.
                </p>
                <Link
                  class="btn"
                  to=""
                  onClick={() => {
                    setDisease("Neurology");
                    setShowModal(true);
                  }}
                >
                  <i class="fa fa-plus text-primary me-3"></i>Read More
                </Link>
                {showModal && disease === "Neurology" && (
                  <ShowModal params={"Neurology"} closeModal={closeModal} />
                )}
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-wheelchair text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Orthopedics</h4>
                <p class="mb-4">
                  Orthopedics, medical specialty concerned with the preservation
                  and restoration of function of the skeletal system and its
                  associated structures, i.e., spinal and other bones, joints,
                  and muscles...
                </p>
                <Link
                  class="btn"
                  to=""
                  onClick={() => {
                    setDisease("Orthopedics");
                    setShowModal(true);
                  }}
                >
                  <i class="fa fa-plus text-primary me-3"></i>Read More
                </Link>
                {showModal && disease === "Orthopedics" && (
                  <ShowModal params={"Orthopedics"} closeModal={closeModal} />
                )}
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-tooth text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Dental Surgery</h4>
                <p class="mb-4">
                  Oral surgery refers to any surgical procedure performed on
                  your teeth, gums, jaws or other oral structures. This includes
                  extractions, implants, gum grafts and jaw surgeries...
                </p>
                <Link
                  class="btn"
                  to=""
                  onClick={() => {
                    setDisease("Dental Surgery");
                    setShowModal(true);
                  }}
                >
                  <i class="fa fa-plus text-primary me-3"></i>Read More
                </Link>
                {showModal && disease === "Dental Surgery" && (
                  <ShowModal params={"Dental Surgery"} closeModal={closeModal} />
                )}
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-vials text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Laboratory</h4>
                <p class="mb-4">
                  Many surgeons order routine lab tests before you are admitted
                  to the hospital or before certain outpatient procedures. The
                  tests help find possible problems that might complicate
                  surgery if not found and treated early...
                </p>
                <Link
                  class="btn"
                  to=""
                  onClick={() => {
                    setDisease("Laboratory");
                    setShowModal(true);
                  }}
                >
                  <i class="fa fa-plus text-primary me-3"></i>Read More
                </Link>
                {showModal && disease === "Laboratory" && (
                  <ShowModal params={"Laboratory"} closeModal={closeModal} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
    </>
  );
}
