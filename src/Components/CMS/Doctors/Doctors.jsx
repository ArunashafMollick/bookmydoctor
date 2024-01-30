import "./Doctors.css";
import React, { useEffect, useState } from "react";
// import teamImg2 from "../../../img/team-2.jpg";
// import teamImg3 from "../../../img/team-3.jpg";
// import teamImg4 from "../../../img/team-4.jpg";

import docImg1 from "../../../img/doc/drkunal-sarkar.webp";
import docImg2 from "../../../img/doc/Dr-L.-N.-Tripathy.webp";
import docImg3 from "../../../img/doc/dilip-pahari.webp";
import docImg4 from "../../../img/doc/sourav-dutta.webp";
import docImg5 from "../../../img/doc/dr-anirban-ash.avif";
import docImg6 from "../../../img/doc/vikash.webp";
import docImg7 from "../../../img/doc/ranjan-kumar.webp";
import docImg8 from "../../../img/doc/rabin.webp";
import docImg9 from "../../../img/doc/Dr.Dilip-Kumar.webp";
import docImg10 from "../../../img/doc/abhay.webp";
import docImg11 from "../../../img/doc/Dr-Sayan-Das.webp";
import docImg12 from "../../../img/doc/shashwati.webp";
import docImg13 from "../../../img/doc/Dr-Suman-Kumari.webp";
import docImg14 from "../../../img/doc/tanmoy.webp";
import docImg15 from "../../../img/doc/chandrima.webp";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

export default function Doctors() {
  const [option, setOption] = useState();
  const [values, setValue] = useState([
    {
      docName: "Dr. Kunal Sarkar",
      docImg: docImg1,
      docDep: "Cardiac Surgery",
      docDes: "Senior Vice Chairman, Senior Cardiac Heart Surgeon & Head MICS",
      docQual: "FRCS (ED), FRCS (Glasg), MNMS",
      docTime: "10am -4pm",
    },
    {
      docName: "Dr. L. N. Tripathy",
      docImg: docImg2,
      docDep: "Lower Back Pain, Neurosurgery (Mind)",
      docDes: "Senior Vice Chairman, Director & Senior Consultant",
      docQual: "MS, M.Ch (PGI), FRCS (Neurosurgery),     CCST (UK)",
      docTime: "10AM - 3PM",
    },
    {
      docName: "Dr. Chandrima Dasgupta",
      docImg: docImg15,
      docDep: "Obstetrics & Gynaecology, Thyroid Diseases",
      docDes: "Consultant (Visiting)",
      docQual: "FRCOG (London), CCT, DFFP",
      docTime: "11am - 2pm",
    },
    {
      docName: "Dr. Sourav Datta",
      docImg: docImg4,
      docDep: "Surgical Oncology",
      docDes: "Senior Consultant & Director (Medica Oncology)",
      docQual:
        "MS (ENT), Senior Research Fellow in Head and Neck Oncosurgery, HBNI Fellowship in Head and Neck Oncosurgery",
      docTime: "3pm - 5pm",
    },

    {
      docName: "Dr. Suman Kumari",
      docImg: docImg13,
      docDep: "Obstetrics & Gynaecology",
      docDes: "Consultant Preventive Gynae-Oncology, Cancer Screening Incharge",
      docQual:
        "MS in Obstetrics and Gynaecology (OBGY), Certified in Cancer Screening",
      docTime: "10.30 am - 2 pm",
    },
  ]);

  const doctorsArr = [
    {
      day: "Monday",
      value: [
        {
          docName: "Dr. Kunal Sarkar",
          docImg: docImg1,
          docDep: "Cardiac Surgery",
          docDes:
            "Senior Vice Chairman, Senior Cardiac Heart Surgeon & Head MICS",
          docQual: "FRCS (ED), FRCS (Glasg), MNMS",
          docTime: "10am -4pm",
        },
        {
          docName: "Dr. L. N. Tripathy",
          docImg: docImg2,
          docDep: "Lower Back Pain, Neurosurgery (Mind)",
          docDes: "Senior Vice Chairman, Director & Senior Consultant",
          docQual: "MS, M.Ch (PGI), FRCS (Neurosurgery),     CCST (UK)",
          docTime: "10AM - 3PM",
        },
        {
          docName: "Dr. Chandrima Dasgupta",
          docImg: docImg15,
          docDep: "Obstetrics & Gynaecology, Thyroid Diseases",
          docDes: "Consultant (Visiting)",
          docQual: "FRCOG (London), CCT, DFFP",
          docTime: "11am - 2pm",
        },
        {
          docName: "Dr. Sourav Datta",
          docImg: docImg4,
          docDep: "Surgical Oncology",
          docDes: "Senior Consultant & Director (Medica Oncology)",
          docQual:
            "MS (ENT), Senior Research Fellow in Head and Neck Oncosurgery, HBNI Fellowship in Head and Neck Oncosurgery",
          docTime: "3pm - 5pm",
        },

        {
          docName: "Dr. Suman Kumari",
          docImg: docImg13,
          docDep: "Obstetrics & Gynaecology",
          docDes:
            "Consultant Preventive Gynae-Oncology, Cancer Screening Incharge",
          docQual:
            "MS in Obstetrics and Gynaecology (OBGY), Certified in Cancer Screening",
          docTime: "10.30 am - 2 pm",
        },
      ],
    },
    {
      day: "Tuesday",
      value: [
        {
          docName: "(Prof.) Dr. Rabin Chakraborty",
          docImg: docImg8,
          docDep: "Cardiology",
          docDes:
            "Senior Consultant lnterventional Cardiologist & Electrophysiologist Senior Vice Chairman-Head of Cardiology Services Medica Institute of Cardiac Science",
          docQual:
            "MBBS (Honours, Gold Medalist) MD ( Internal Medicine, PGIMER, Chandigarh), DNB ( Internal Medicine), DM ( Cardiology) PGIMER, (Chandigarh)",
          docTime: "10am - 1pm",
        },
        {
          docName: "(Prof.) Dr. Dilip Kumar Pahari",
          docImg: docImg3,
          docDep: "Nephrology",
          docDes:
            "HOD Nephrology Senior Vice Chairman, Director & Senior Consultant - Nephrology",
          docQual:
            "MD (Internal Medicine), DM (Nephrology), DNB (Nephrology), FISN, FASN (USA), FRCP (Glasgow)",
          docTime: "10AM - 5PM",
        },
        {
          docName: "Dr. Chandrima Dasgupta",
          docImg: docImg15,
          docDep: "Obstetrics & Gynaecology, Thyroid Diseases",
          docDes: "Consultant (Visiting)",
          docQual: "FRCOG (London), CCT, DFFP",
          docTime: "11am - 2pm",
        },
        {
          docName: "Dr. Dilip Kumar",
          docImg: docImg9,
          docDep: "Cardiology",
          docDes:
            "Director-Cardiac Cath Lab Senior Consultant Interventional Cardiologist and Electrophysiologist Chief Academic Co-Ordinator Medica Institute of Cardiac Science",
          docQual:
            "MBBS, MD(Medicine), DM( Cardiology), FACC, FRCP (GLAS), FSCAI, FESC, FICC, FHRS",
          docTime: "10am -5pm",
        },
        {
          docName: "Dr. Sayan Das",
          docImg: docImg11,
          docDep: "Radiation Oncology",
          docDes: "Senior Consultant & Head (Radiation Oncology)",
          docQual: "MD(Radio Therapy)",
          docTime: "10am - 2pm",
        },
        {
          docName: "Dr. Abhay Kumar",
          docImg: docImg10,
          docDep: "Surgical Oncology, Urology",
          docDes:
            "Senior Consultant & Head (Urology, Surgical Oncology, Robotic Surgery)",
          docQual: "MS- General Surgery, DNB (Genito-Urinary Surgery)",
          docTime: "9am - 5pm",
        },
      ],
    },
    {
      day: "Wednesday",
      value: [
        {
          docName: "Dr. Vikash Kapoor",
          docImg: docImg6,
          docDep: "Orthopaedic Sciences",
          docDes: "Sr. Consultant & Faculty - DNB Orthopedics",
          docQual: "MBBS, MS (Orthopaedics) Fellow Sports Medicine (Singapore)",
          docTime: "11am - 2pm",
        },
        {
          docName: "Dr. Sayan Das",
          docImg: docImg11,
          docDep: "Radiation Oncology",
          docDes: "Senior Consultant & Head (Radiation Oncology)",
          docQual: "MD(Radio Therapy)",
          docTime: "10am - 2pm",
        },
        {
          docName: "Dr. Abhay Kumar",
          docImg: docImg10,
          docDep: "Surgical Oncology, Urology",
          docDes:
            "Senior Consultant & Head (Urology, Surgical Oncology, Robotic Surgery)",
          docQual: "MS- General Surgery, DNB (Genito-Urinary Surgery)",
          docTime: "9am - 5pm",
        },
        {
          docName: "Dr. Kunal Sarkar",
          docImg: docImg1,
          docDep: "Cardiac Surgery",
          docDes:
            "Senior Vice Chairman, Senior Cardiac Heart Surgeon & Head MICS",
          docQual: "FRCS (ED), FRCS (Glasg), MNMS",
          docTime: "10am -4pm",
        },
        {
          docName: "Dr. L. N. Tripathy",
          docImg: docImg2,
          docDep: "Lower Back Pain, Neurosurgery (Mind)",
          docDes: "Senior Vice Chairman, Director & Senior Consultant",
          docQual: "MS, M.Ch (PGI), FRCS (Neurosurgery),     CCST (UK)",
          docTime: "10AM - 3PM",
        },
      ],
    },
    {
      day: "Thursday",
      value: [
        {
          docName: "Dr. Ranjan Kumar Das",
          docImg: docImg7,
          docDep: "Respiratory Medicine",
          docDes: "Consultant - (Head of the Department)",
          docQual: "MD (TB & Respiratory Disease) & DMRD",
          docTime: "10am - 2pm",
        },
        {
          docName: "Dr. Tanmay Banerjee",
          docImg: docImg14,
          docDep:
            "Respiratory MedicineHeat Stroke, High Blood Pressure, Internal Medicine & Critical Care, Thyroid Diseases ",
          docDes: "Sr. Consultant & Faculty - DNB General Medicine",
          docQual:
            "MD (Internal Medicine), MRCP, SCE in Acute Medicine, EDIC, CCST (Acute Medicine and Intensive Care)",
          docTime: "5pm - 7pm",
        },
        {
          docName: "(Prof.) Dr. Rabin Chakraborty",
          docImg: docImg8,
          docDep: "Cardiology",
          docDes:
            "Senior Consultant lnterventional Cardiologist & Electrophysiologist Senior Vice Chairman-Head of Cardiology Services Medica Institute of Cardiac Science",
          docQual:
            "MBBS (Honours, Gold Medalist) MD ( Internal Medicine, PGIMER, Chandigarh), DNB ( Internal Medicine), DM ( Cardiology) PGIMER, (Chandigarh)",
          docTime: "10am - 1pm",
        },
        {
          docName: "(Prof.) Dr. Dilip Kumar Pahari",
          docImg: docImg3,
          docDep: "Nephrology",
          docDes:
            "HOD Nephrology Senior Vice Chairman, Director & Senior Consultant - Nephrology",
          docQual:
            "MD (Internal Medicine), DM (Nephrology), DNB (Nephrology), FISN, FASN (USA), FRCP (Glasgow)",
          docTime: "10AM - 5PM",
        },
        {
          docName: "Dr. Sourav Datta",
          docImg: docImg4,
          docDep: "Surgical Oncology",
          docDes: "Senior Consultant & Director (Medica Oncology)",
          docQual:
            "MS (ENT), Senior Research Fellow in Head and Neck Oncosurgery, HBNI Fellowship in Head and Neck Oncosurgery",
          docTime: "3pm - 5pm",
        },
        {
          docName: "Dr. L. N. Tripathy",
          docImg: docImg2,
          docDep: "Lower Back Pain, Neurosurgery (Mind)",
          docDes: "Senior Vice Chairman, Director & Senior Consultant",
          docQual: "MS, M.Ch (PGI), FRCS (Neurosurgery),     CCST (UK)",
          docTime: "10AM - 3PM",
        },
      ],
    },
    {
      day: "Friday",
      value: [
        {
          docName: "Dr. Suman Kumari",
          docImg: docImg13,
          docDep: "Obstetrics & Gynaecology",
          docDes:
            "Consultant Preventive Gynae-Oncology, Cancer Screening Incharge",
          docQual:
            "MS in Obstetrics and Gynaecology (OBGY), Certified in Cancer Screening",
          docTime: "10.30 am - 2 pm",
        },
        {
          docName: "Dr. Chandrima Dasgupta",
          docImg: docImg15,
          docDep: "Obstetrics & Gynaecology, Thyroid Diseases",
          docDes: "Consultant (Visiting)",
          docQual: "FRCOG (London), CCT, DFFP",
          docTime: "11am - 2pm",
        },
        {
          docName: "Dr. L. N. Tripathy",
          docImg: docImg2,
          docDep: "Lower Back Pain, Neurosurgery (Mind)",
          docDes: "Senior Vice Chairman, Director & Senior Consultant",
          docQual: "MS, M.Ch (PGI), FRCS (Neurosurgery),     CCST (UK)",
          docTime: "10AM - 3PM",
        },
        {
          docName: "Dr. Sourav Datta",
          docImg: docImg4,
          docDep: "Surgical Oncology",
          docDes: "Senior Consultant & Director (Medica Oncology)",
          docQual:
            "MS (ENT), Senior Research Fellow in Head and Neck Oncosurgery, HBNI Fellowship in Head and Neck Oncosurgery",
          docTime: "3pm - 5pm",
        },
        {
          docName: "Dr. Dilip Kumar",
          docImg: docImg9,
          docDep: "Cardiology",
          docDes:
            "Director-Cardiac Cath Lab Senior Consultant Interventional Cardiologist and Electrophysiologist Chief Academic Co-Ordinator Medica Institute of Cardiac Science",
          docQual:
            "MBBS, MD(Medicine), DM( Cardiology), FACC, FRCP (GLAS), FSCAI, FESC, FICC, FHRS",
          docTime: "10am -5pm",
        },
        {
          docName: "Dr. Shaswati Sengupta Datta",
          docImg: docImg12,
          docDep: "ENT ",
          docDes: "Consultant - AMA Accredited by NASBS (USA)",
          docQual:
            "MBBS, MS ENT Gold Medalist, Fellowship in Sleep Apnoea Surgery (Singapore) Trained in Sialendoscopy & Cochlear Implant ( Mumbai, RCS, London) ",
          docTime: "10am -5pm",
        },
      ],
    },
    {
      day: "Saturday",
      value: [
        {
          docName: "Dr. Abhay Kumar",
          docImg: docImg10,
          docDep: "Surgical Oncology, Urology",
          docDes:
            "Senior Consultant & Head (Urology, Surgical Oncology, Robotic Surgery)",
          docQual: "MS- General Surgery, DNB (Genito-Urinary Surgery)",
          docTime: "9am - 5pm",
        },
        {
          docName: "Dr. Shaswati Sengupta Datta",
          docImg: docImg12,
          docDep: "ENT ",
          docDes: "Consultant - AMA Accredited by NASBS (USA)",
          docQual:
            "MBBS, MS ENT Gold Medalist, Fellowship in Sleep Apnoea Surgery (Singapore) Trained in Sialendoscopy & Cochlear Implant ( Mumbai, RCS, London) ",
          docTime: "10am -5pm",
        },
        {
          docName: "Dr. Chandrima Dasgupta",
          docImg: docImg15,
          docDep: "Obstetrics & Gynaecology, Thyroid Diseases",
          docDes: "Consultant (Visiting)",
          docQual: "FRCOG (London), CCT, DFFP",
          docTime: "11am - 2pm",
        },
        {
          docName: "Dr. Suman Kumari",
          docImg: docImg13,
          docDep: "Obstetrics & Gynaecology",
          docDes:
            "Consultant Preventive Gynae-Oncology, Cancer Screening Incharge",
          docQual:
            "MS in Obstetrics and Gynaecology (OBGY), Certified in Cancer Screening",
          docTime: "10.30 am - 2 pm",
        },
      ],
    },
  ];

  const onChangeFn = (e) => {
    setOption(e.target.value);
    doctorsArr.map((el) => {
      if (el.day === e.target.value) {
        setValue(el.value);
      }
    });
  };

  const handleClick = (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Congratulation . Your have successfully been booked. Our counsellor will call you.`,
      showConfirmButton: false,
      timer: 3000,
    });
  };
  console.log(option);
  console.log(values);

  return (
    <>
      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5 container-doctors">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Doctors
            </p>
            <h1>Our Experience Doctors</h1>
          </div>

          <div className="container-doctor-content d-flex justify-content-between">
            <div className="days">
              <select className="custom-select" onChange={onChangeFn}>
                {doctorsArr.map((doctor, indx) => (
                  <option className="custom-option" key={indx}>
                    {doctor.day}
                  </option>
                ))}
              </select>
            </div>
            <div className="row row-cols-2">
              {values.map((val) => (
                <div className="col wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src={val.docImg} alt="" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>{val.docName}</h5>
                      <p className="text-primary">
                        {val.docDes},
                        <small className="ms-2 text-muted fst-italic">
                          {val.docDep}
                        </small>
                        <span className="d-inline-block">{val.docTime}</span>
                      </p>

                      <Link to="/" onClick={handleClick}>
                        <button type="button" className="btn btn-primary">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>

        {/* <!-- Team End --> */}
      </div>
    </>
  );
}
