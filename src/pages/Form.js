import React, { useEffect, useState } from "react";
import emailjs, { init } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import backgroundImage from "./images/mailBox.jpg";
init("user_wDDr0OQVCk88Xw4XU1Q4O");

const Background = styled.div`
  background-color: black;
  top: 0;
  left: 0;
  width: 50vw;
  height: cover;
  min-width: 100%;
  min-height: 90vh;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: -1;
`;

const Container = styled.div`
background-color: #283747;
`;

const Button = styled.div`
  margin-top: 60px;
  background-color: #000d1a;
  padding: 20px;
  color: white;
  font-size: 2rem;
  text-align: center;
  font-family: monospace;
  cursor: pointer;

  &:hover {
    background-color: #00fa9a;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 1rem;
  }
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    console.log("state changed");
  }, []);

  // EmailJS function for sending email with the FORM.
  const sendMessage = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name + " (" + email + ")",
      to_name: "dannebb.10@gmail.com",
      feedback: message,
    };

    emailjs.send("service_upq4gtj", "template_ybrb1lo", templateParams).then(
      function (response) {
        toast.success("Your message was sent!", {
          position: toast.POSITION.TOP_CENTER,
          className: "black-background",
          bodyClassName: "grow-font-size",
          progressClassName: "fancy-progress-bar",
        });
        console.log("SUCCESS!", response.status, response.text);
      },
      function (err) {
        toast.error("Your message was not able to be sent", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("ERROR!", err.status, err.text);
      }
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Container>
        <Navbar />
        <Background>
          <form onSubmit={sendMessage} method="POST">
            <div className="form-group">
              <label className="form-label-name">Name</label>
              <input
                key="random1"
                className="form-message"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
                required
              ></input>
            </div>

            <div className="form-group">
              <label className="form-label-name">Email adress</label>
              <input
                key="random2"
                className="form-message"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              ></input>
            </div>

            <div className="form-group">
              <label className="form-label-name">Message</label>
              <textarea
                key="random3"
                className="form-message form-textarea"
                rows="3"
                placeholder="Enter message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <Button onClick={sendMessage}>Submit</Button>
            <ToastContainer />
          </form>
        </Background>
      </Container>
    </>
  );
};

export default Form;
