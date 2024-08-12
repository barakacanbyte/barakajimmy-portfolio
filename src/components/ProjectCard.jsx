import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card mb-4">
      <Card.Img variant="top" src={project.image} alt={project.title} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text className="text-dark text-centre">{project.description}</Card.Text>
        <Card.Text className="text-dark">
          <strong>Technologies:</strong> {project.technologies}
        </Card.Text>
        {project.demoLink && (
          <Button
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-view1"
          >
            Live Demo
          </Button>
        )}
        {project.codeLink && (
          <Button
            variant="secondary"
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-view2 mx-2"
          >
            View Code
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
