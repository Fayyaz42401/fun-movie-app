import React from "react";
import "./contact.scss";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="contact-page" id="contact">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-div">
        <div className="contact-box text-side">
        <h1>If you Face Any Issue About The User Experience</h1>
          
          <div>
          <LocalPhoneIcon  sx={{fontSize:"40px" , }} /> : +92 320-7654321
          </div>
          <div>
          <EmailIcon sx={{fontSize:"40px" , }}  /> : xyz@gmail.com
          </div>
          
        </div>
        <div className=" contact-box contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
              className="input-name"
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
            <button type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
