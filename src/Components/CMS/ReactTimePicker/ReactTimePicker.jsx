import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

export default function ReactTimePicker() {
  const [time, setTime] = useState("10:00");

  const onChange = (value) => {
    setTime(value);
  };
  return (
    <>
      <TimePicker onChange={onChange} value={time} format="hh:mm a" />
    </>
  );
}
