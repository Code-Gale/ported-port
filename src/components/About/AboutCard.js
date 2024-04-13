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
            <br /> I am a tech savvy bro with proficiency in backend software engineering,
            web development and an enthusiast in cybersecurity domain.
            <br />
            Additionally, I currently freelance as a backend developer
            and I'm open to work.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Leetcoding
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Mentoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Rubiks Cube.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Conceive it, build on it then achieve it.!"{" "}
          </p>
          <footer className="blockquote-footer">Code Singer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
