import React from "react";
import "./index.css";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";

const Footer = () => (
    <div id="footer">
          <div id="links"> 
          <h4> Connect with Us </h4>
            <div id="social">
              <a href="https://www.instagram.com/" target="_blank"> <LogoInstagram/> </a>
            </div>
            <div id="useful">
              <h4> Useful Links </h4>
              <a href="" target="_blank"> Create an Event </a>
            </div>
          </div>
    </div>
  )
  
  export default Footer;


// functions have to export like above
// classes can be exported like "export default class Home extends React.Component {"