import React from "react";
import { Link } from "react-router-dom";

export default function ShowModal({ val, params, closeModal }) {
  if (params === "Cardiology") {
    return (
      <>
        <h5 className="muted mt-2 mb-2 text-center">Symptoms</h5>
        <ul>
          <li>Chest pain or discomfort.</li>
          <li>Dizziness.</li>
          <li>Fainting (syncope) or near fainting.</li>
          <li>Fluttering in the chest.</li>
          <li>Lightheadedness.</li>
          <li>Racing heartbeat (tachycardia)</li>
          <li>Shortness of breath.</li>
          <li>Slow heartbeat (bradycardia)</li>
        </ul>
        <p
          style={{
            color: "green",
            textAlign: "right",
            marginTop: "10px",
          }}
          onClick={closeModal}
        >
          Less
        </p>
      </>
    );
  } else if (params === "Pulmonary") {
    return (
      <>
        <h5 className="muted mt-2 mb-2 text-center">Symptoms</h5>

        <ul>
          <li>Increased shortness of breath.</li>
          <li>Fatigue.</li>
          <li>
            Edema, or swelling of the feet, legs and eventually the abdomen and
            neck.
          </li>
          <li>Dizziness and fainting spells.</li>
          <li>Chest pain.</li>
          <li>Heart palpitations (racing or pounding)</li>
          <li>Lips and fingers turning blue.</li>
        </ul>
        <p
          style={{
            color: "green",
            textAlign: "right",
            marginTop: "10px",
          }}
          onClick={closeModal}
        >
          Less
        </p>
      </>
    );
  } else if (params === "Neurology") {
    return (
      <>
        <h5 className="muted mt-2 mb-2 text-center">Symptoms</h5>
        <ul>
          <li>Weakness or paralysis.</li>
          <li>Abnormal movement, such as tremors or difficulty walking.</li>
          <li>Loss of balance.</li>
          <li>
            Seizures or episodes of shaking and apparent loss of consciousness
            (nonepileptic seizures)
          </li>
          <li>Difficulty swallowing or feeling "a lump in the throat"</li>
          <li>Episodes of unresponsiveness.</li>
        </ul>
        <p
          style={{
            color: "green",
            textAlign: "right",
            marginTop: "10px",
          }}
          onClick={closeModal}
        >
          Less
        </p>
      </>
    );
  } else if (params === "Orthopedics") {
    return (
      <>
        <h5 className="muted mt-2 mb-2 text-center">Symptoms</h5>
        <ul>
          <li>Scraping or crunching sound when joints move.</li>
          <li>Swelling or redness of joints.</li>
          <li>
            Intermittent or steady pain in joints that gets worse with activity.
          </li>
          <li>Pain with range of motion.</li>
          <li>Can't move joints comfortably (limited range of motion)</li>
        </ul>
        <p
          style={{
            color: "green",
            textAlign: "right",
            marginTop: "10px",
          }}
          onClick={closeModal}
        >
          Less
        </p>
      </>
    );
  } else if (params === "Dental Surgery") {
    return (
      <>
        <h5 className="muted mt-2 mb-2 text-center">Symptoms</h5>
        <ul>
          <li>
            Toothache, spontaneous pain or pain that occurs without any apparent
            cause.
          </li>
          <li>Tooth sensitivity.</li>
          <li>
            Mild to sharp pain when eating or drinking something sweet, hot or
            cold.
          </li>
          <li>Visible holes or pits in your teeth.</li>
          <li>Brown, black or white staining on any surface of a tooth.</li>
          <li>Pain when you bite down.</li>
        </ul>
        <p
          style={{
            color: "green",
            textAlign: "right",
            marginTop: "10px",
          }}
          onClick={closeModal}
        >
          Less
        </p>
      </>
    );
  } else if (params === "Laboratory") {
    return (
      <>
        <h5 className="muted mt-2 mb-2 text-center">References</h5>
        <ul>
          <li>
            <Link to="https://www.clinicallab.com/">
              https://www.clinicallab.com/
            </Link>
          </li>
          <li>
            {" "}
            <Link to="https://www.mayocliniclabs.com/">
              https://www.mayocliniclabs.com/
            </Link>{" "}
          </li>
          <li>
            <Link to="http://www.clinicallab.in/">
              http://www.clinicallab.in/
            </Link>
          </li>
        </ul>
        <p
          style={{
            color: "green",
            textAlign: "right",
            marginTop: "10px",
          }}
          onClick={closeModal}
        >
          Less
        </p>
      </>
    );
  } else {
    return;
  }
}
