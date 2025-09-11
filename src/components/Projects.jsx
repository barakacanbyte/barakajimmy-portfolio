import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "../styles/projectsSection.css";

const projects = {
  programming: [
    {
      title: "Online Gaming Shop",
      description:
"One of my self-assigned projects from theodinproject.com, inspired by and recreated from the work of Alex Dishen.",      technologies: "JavaScript, React",
      image:
        "https://res.cloudinary.com/dglqu5yh3/image/upload/v1723196734/graphics%20portifolio/projects_thumbnails/buywithbm_glxdbo.png",
      demoLink: "https://barakacanbyte.github.io/gameShop-app-react/",
      codeLink: "https://github.com/barakacanbyte/gameShop-app-react.git",
    },
    {
      title: "Memory-Card Game",
      description: "One of my self-assigned projects from theodinproject.com",
      technologies: "JavaScript, React",
      image:
        "https://res.cloudinary.com/dglqu5yh3/image/upload/v1723196734/graphics%20portifolio/projects_thumbnails/pokemon_game_uvez0v.png",
      demoLink: "https://barakacanbyte.github.io/memory-card-game-react/",
      codeLink: "https://github.com/barakacanbyte/memory-card-game-react.git",
    }
  ],
  dataAnalysis: [
    {
      title: "Data Analysis Project 1",
      description: "Description of data analysis project 1",
      technologies: "Python, Pandas, Matplotlib",
      image: "path_to_image",
      codeLink: "https://github.com/example",
    },
    // Add more data analysis projects
  ],
  currentProject: [
    {
      title: "NedaPay",
      description: "Part of the NedaPay Product Team. NedaPay is a platform that facilitates stablecoins transactions including payment links, swaps, invoices, on/offramps for you and your business.",
      technologies: "Javascript, Typescript, Web3, Solidity, NextJs",
      image: "https://res.cloudinary.com/dglqu5yh3/image/upload/v1757572796/main-portfolio/Screenshot_from_2025-09-11_09-36-24_f60skg.png",
      demoLink: "https://nedapay.xyz",
    },
    // Add more current projects
  ]
};

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h3 className="mb-4">Projects</h3>
      <section className="mx-auto">
        {/* <h4 className="text-success">Projects</h4> */}
        <Row className="mx-auto">
          {projects.currentProject.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={6} className="mx-auto my-2">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
        <Row className="mx-auto">
          {projects.programming.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={6} className="mx-auto my-2">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </section>
      {/* <section className="mt-5 mx-auto p-4">
        <h4 className="text-success">Graphics Design Portfolio</h4>
        <Row>
          <Card>
            <a
              href="https://barakacanbyte.github.io/graphics-portfolio-main/"
              target="blank"
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dglqu5yh3/image/upload/v1723204665/graphics%20portifolio/projects_thumbnails/graphic-portfolio_wparng.png"
                alt="paortfolio image"
              />
            </a>

            <Card.Body>
              <a
                href="https://barakacanbyte.github.io/graphics-portfolio-main/"
                target="blank"
              >
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#ff9c07",
                    fontWeight: "bold",
                  }}
                  className="rounded p-2 text-white"
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "black")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#ff9c07")
                  }
                >
                  Click to View Portfolio
                </button>
              </a>
            </Card.Body>
          </Card>
        </Row>
      </section> */}
    </Container>
  );
};

export default Projects;
