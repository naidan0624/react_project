import { React } from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { useNavigate, Outlet } from "react-router-dom";
import "./index.css";
import image from "./salon pictures/IMG_1256.JPG";
import image1 from "./salon pictures/IMG_1257.JPG";
import { Carousel } from "antd";

export function WebsiteHeader() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="website-header"
        onClick={() => {
          ("");
        }}
      >
        L'amour Nail Spa
      </div>
      <div className="website-navigation-menu">
        <div
          onClick={() => {
            navigate("");
          }}
        >
          HOME
        </div>
        <div
          onClick={() => {
            navigate("services");
          }}
        >
          SERVICES{" "}
        </div>
        <a href="https://www.fresha.com/a/lamour-nail-spa-park-ridge-1101-west-touhy-avenue-t11ub6bm/vouchers">
          <div>GIFTCARD </div>
        </a>

        <div
          onClick={() => {
            navigate("onlinebooking");
          }}
        >
          BOOK NOW
        </div>

        <div
          onClick={() => {
            navigate("booking");
          }}
        >
          NEWS
        </div>
        <div>CONTACT US</div>
      </div>
      <Outlet />
      <div className="website-footer1">
        <div className="form">
          {" "}
          Join Our Newsletter
          <form>
            <br />
            <input placeholder="Email" type="text" />
            <br />
            <br />
            <div className="website-sign">Sign Up</div>
          </form>
        </div>
        <div className=" website-map"> Map</div>
        <div className="social">
          Keep Updated
          <div className="website-logo">
            <BsFacebook />
            <BsInstagram />
          </div>
        </div>
      </div>
      <div className="website-footer2">
        Copyright © 2022 Lamour Nail Spa - 1101 W Touhy ave, Park Ridge, IL
        60068. Phone: (224)585-6125
      </div>
    </div>
  );
}

export default function HomePage() {
  const contentStyle = {
    height: "750px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <div
      className="website-big-container"
      // style={{
      //   backgroundImage: `url(https://img.freepik.com/free-vector/unfocused-winter-landscape-with-snowflakes_1393-210.jpg?w=1800&t=st=1670367223~exp=1670367823~hmac=18d30a806ea528f0d022d7771e9b2845eb2ba2098eec076e13ada840dee3804c)`,
      // }}
    >
      {/* <WebsiteHeader/> */}
      <div className="website-image-slider">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img src={image} alt="" width="1500" height="800" />1
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={image1} alt="" width="1500" height="800" />2
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={image} alt="" width="1500" height="800" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={image1} alt="" width="1500" height="800" />4
            </h3>
          </div>
        </Carousel>
      </div>

      <div className="website-second-content">
        <div className="website-content1">
          <img
            src="https://images.pexels.com/photos/939835/pexels-photo-939835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="450px"
            height="330px"
            alt=""
          />
        </div>
        <div className="website-content2">
          <img
            src="https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg"
            width="450px"
            height="330px"
            alt=""
          />
        </div>
        <div className="website-content3">
          <img
            src="https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg"
            width="450px"
            height="330px"
            alt=""
          />
        </div>
        <div className="website-content4">
          <img
            src="https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg"
            width="450px"
            height="330px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
