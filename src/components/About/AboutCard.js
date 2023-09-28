import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Code Singer </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br /> I am a tech savvy bro with great interest in software development,
            web development and an enthusiast cybersecurity domain.
            <br />
            Additionally, I am currently freelance as a fullstack website developer
            and I'm open to work.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ethical hacking
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Mentoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Solve Rubiks Cube.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Conceive it, Idealise it then achieve it.!"{" "}
          </p>
          <footer className="blockquote-footer">Code Singer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
