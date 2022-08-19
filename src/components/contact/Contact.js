import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-bg"></div>
      <div className="contact-wrap">
        <div className="contact-left">
          <h1 className="contact-title">I'd love to hear from you!</h1>
          <div className="contact-info">
            <div className="contact-item">
              <img src="img/iphone-icon.png" alt="" className="contact-icon" />
              (720) 429-4570
            </div>
            <div className="contact-item">
              <img src="img/gmail-icon.png" alt="" className="contact-icon" />
              will.glynn@gmail.com
            </div>
            <div className="contact-item">
              <img src="img/location.png" alt="" className="contact-icon" />
              3069 Tejon St. Denver, CO
            </div>
          </div>
        </div>
        <div className="contact-right"></div>
      </div>
    </div>
  );
}
