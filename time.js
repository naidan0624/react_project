import { useState } from "react";
import React from "react";

const time = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
];

function Times(props) {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.value);
  }

  return (
    <div style={{ width: 500, height: 50 }}>
      {time.map((times) => {
        return (
          <ul>
            <button
              style={{ width: 100, height: 30, backgroundColor: "white" }}
              onClick={(e)=>{
                displayInfo(e)
              }}
            >
              {times}
            </button>
          </ul>
        );
      })}
      <div>
        {info
          ? `Your appointment is set to ${event} ${props.date.toDateString()}`
          : null}
      </div>
    </div>
  );
}

export default Times;
