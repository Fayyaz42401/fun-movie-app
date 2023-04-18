import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about" >
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-div">
        <div className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          provident eius ab adipisci quaerat enim incidunt accusantium possimus
          quibusdam impedit optio odio perspiciatis doloremque, obcaecati modi
          beatae repellendus eaque iusto aperiam mollitia, assumenda delectus.
        </div>

        <div className="about-img">
            <img src="https://images.pexels.com/photos/4545943/pexels-photo-4545943.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""  />
        </div>
       
      </div>
    </div>
  );
};

export default About;
