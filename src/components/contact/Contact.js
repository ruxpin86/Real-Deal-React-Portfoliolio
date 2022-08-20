import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef;

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_iq25q6c",
        "service_iq25q6c",
        formRef.current,
        "GJ-B1FzQgvcQeCTuj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div className="contact-right">
          <p className="contact-question">
            Need a solid new member on your team?
          </p>
          <p className="contact-p">
            Then let's talk! I'm enjoying the process of learning on all levels;
            from building projects to solve problems I used to face behind the
            bar, to figuring out new ones in making native apps, and I'm even
            enjoying learning how to navigate this new job market. Let me know
            if you think I might be the right fit for you!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" name="user_name" />
            <input type="text" placeholder="Company Name" name="user_subject" />
            <input type="text" placeholder="Email Address" name="user_email" />
            <textarea
              rows="5"
              placeholder="Your message and questions you have for me"
              name="message"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
