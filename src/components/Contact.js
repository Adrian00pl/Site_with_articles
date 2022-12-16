import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [messages, setMessages] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xvxg2sj",
        "template_8vi3mup",
        form.current,
        "m5AsGolKF4-bw05FA"
      )
      .then(
        (result) => {
        alert("Wiadomość wysłana")
          setUsername("");
          setUseremail("");
          setMessages("");

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
        <h1>Skontaktuj sie z nami</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" onChange={event => setUsername(event.target.value)}
          value={username} />
        <label>Email</label>
        <input type="email" name="user_email" onChange={event => setUseremail(event.target.value)}
          value={useremail}/>
        <label>Message</label>
        <textarea name="message" onChange={event => setMessages(event.target.value)}
          value={messages}/>
        <input type="submit" value="Send"/>
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 700px;
  margin-top: 100px;
  border-radius: 15px;
  border: 1px solid white;
  padding: 15px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;