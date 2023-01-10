import { Select, Steps } from "antd";
import { useState } from "react";
import Calendar from "react-calendar";
import Time from "./time";
import Times from "./time";
import "react-calendar/dist/Calendar.css";

const handleChange = (value) => {};

function OnlineBooking(props) {
  const [current, setCurrent] = useState(0);
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const onChange = (value, number) => {
    setCurrent(value);
  };

  return (
    <div className="">
      <div className="onlinebooking-container">
        <>
          <Steps
            style={{ padding: 40 }}
            type="navigation"
            size="smaill"
            current={handleChange}
            onChange={onChange}
            className="site-navigation-steps"
            items={[
              { title: "Select" },
              {
                title: "Date and  time",
              },
              {
                title: "Appointment confirmed",
              },
            ]}
          />
        </>

        {current === 0 ? (
          <>
            <h1> Services</h1>
            <div className="">
              <Select
                labelInValue
                defaultValue={{ value: "Select Service" }}
                style={{ width: 600 }}
                onChange={handleChange}
                options={[
                  { value: "Manicure $20" },
                  { value: "Pedicure $40" },
                  { value: "Combo $70" },
                  { value: "Nail Art $10" },
                  { value: "Additional servive" },
                ]}
              />
            </div>

            <h1>Providor</h1>
            <div className="">
              <Select
                labelInValue
                defaultValue={{ value: "Select" }}
                style={{ width: 600 }}
                onChange={handleChange}
                options={[
                  { value: "John" },
                  { value: "Mary" },
                  { value: "Jenny" },
                  { value: "Hanna" },
                  { value: "Amy" },
                ]}
              />
            </div>
          </>
        ) : (
          <div>
            <Calendar
          
              onChange={setDate}
              value={date}
              onClickDay={() => {
                setShowTime(true);
              }}
            />
          </div>
        )}
        {date.length > 0 ? (
          <p>
            <span>Start:</span> {date[0].toDateString()} &nbsp; to &nbsp;
            <span>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p>
            <span>Defualt selected date : </span> {date.toDateString()} 
          </p>
        )}
        
        <br />
        <Time showTime={showTime} date={date} />
        <button
          onClick={() => {
            setCurrent((current) => current + 1);
          }}
        >
          Continue
        </button>
      </div>
      
    </div>
  );
}
export default OnlineBooking;
