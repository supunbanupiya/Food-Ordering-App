import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        <h4>How do I order Pizza Hut online?</h4>
        <p>Once you’ve selected a Pizza Hut location to order from in Kelaniya, you can browse its menu, select the items you’d like to purchase, and place your Pizza Hut delivery order online.</p>

        <h4>Does Pizza Hut deliver to my area?</h4>
        <p>Enter your delivery address to see if there’s a Pizza Hut in Kelaniya on Uber Eats that offers delivery to you.</p>
        </p>

        
      </div>
    </div>
  );
}

export default About;
