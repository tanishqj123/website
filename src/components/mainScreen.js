import React from "react";
import "./mainScreen.css";
import resumeSVG from ".//media/resume.951480716fd7a3e3933a345e74224c68.svg";
import linkinSVG from ".//media/linkedin.950a20a284b8ab67c1a667a58e164903.svg";
import githubSVG from ".//media/github.3520c72add2bcadac80d409a9961ecdb.svg";
import emailSVG from ".//media/email.13572907aa42802fc0fab9eaec24cc81.svg";
import headshot from ".//media/headshot.8191ecf0b9dbdf89eed0.png";

function MainScreen() {
  return (
    <div className="full-app">
      <div className="header">
        <div className="words">
          <h1 className="Name">Tanishq Jain</h1>
          <p className="text"> Software Engineer</p>
        </div>

        <img src={headshot} alt="headshot" className="headshot-image"></img>
      </div>

      <div className="svg-list">
        <a
          href={require("./media/TJAIN_Resume1.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={resumeSVG} alt="resumeSVG" />
        </a>
        <a
          href="https://www.linkedin.com/in/tanishq-jain-data/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkinSVG} alt="linkinSVG"></img>
        </a>

        <a
          href="https://github.com/tanishqj123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubSVG} alt="githubSVG" />
        </a>
        <a href="mailto:tjaincodes44@gmail.com">
          <img src={emailSVG} alt="emailSVG" />
        </a>
      </div>
    </div>
  );
}

export default MainScreen;
