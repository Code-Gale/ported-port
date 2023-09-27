import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/4.png";
import emotion from "../../Assets/Projects/.6png";
import editor from "../../Assets/Projects/3.png";
import chatify from "../../Assets/Projects/1.png";
import suicide from "../../Assets/Projects/5.png";
import leaf from "../../Assets/Projects/2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Coded Store"
              description="An ecommerce store I built with valid backend for electronics, phones and gadgets purchase. Contains lots of features like search for item, categories, pricing, add to cat, checkout and lots more."
              ghLink="https://github.com/Code-Gale/E-store.git"
              demoLink="https://codedstore.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Food Booking Site"
              description="A complete food ordering website where you can order food, pay on delivery and it gets delivered to you ASAP. Built this for this purpose of responsive website testing and it came out well."
              ghLink="https://github.com/Code-Gale/bimbo"
              demoLink="https://bimboolobespecial.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Media Downloader"
              description="Online gallery that contains image media for a particular event and can then be downloaded to local storage via the site. Built with only HTMl and CSS"
              ghLink="https://github.com/Code-Gale/web"
              demoLink="https://ttogmedia.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Praise_concert registration"
              description="Built a website for music (praise) concert registration / ticket reservation with the aim to improve online concert registration. Site also contains details about events such as time, date, ministers etc and users can reach out to host of event."
              ghLink="https://github.com/Code-Gale/onesound"
              demoLink="https://onesound23.netlify.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Quadratic equation solver"
              description="Using simple python, I  built a simple script that could solve quadratic equation and also handles errors from users such as ValueError."
              ghLink="https://github.com/Code-Gale/quad_solver"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="System Encrypt"
              description="This Python script is designed to provide a means of encrypting files and directories on a system. It uses strong encryption algorithms to protect sensitive data from unauthorized access."
              ghLink="https://github.com/Code-Gale/SHA-256"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
