import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMediumSquare,
  AiFillMessage
} from "react-icons/ai";
import "../styles/socialMedia.css"; // Make sure to create this CSS file

const SocialMedia = () => {
  return (
    <section id="social-media" className="container text-center">
      {/* <h2 className="text-success mb-4">Connect with Me</h2> */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <a
          href="https://www.linkedin.com/in/barakamangesho"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <AiFillLinkedin size={50} /><br/>
          LinkedIn
        </a>
        <a
          href="https://wa.me/255654246975"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <AiFillMessage size={50} /><br/>
          Whatsapp
        </a>
        {/* <a
          href="https://www.instagram.com/barakajimmy"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <AiFillInstagram size={50} />
        </a> */}
        <a
          href="https://medium.com/@barackjimmy1"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <AiFillMediumSquare size={50} /><br/>
          Medium
        </a>
        <a
          href="https://github.com/barakacanbyte"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <AiFillGithub size={50} /><br/>
          Github
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
