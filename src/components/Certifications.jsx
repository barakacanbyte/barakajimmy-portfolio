import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/certifications.css";

const certifications = [
  {
    title: "Data Analysis With python",
    description: "datacamp.com",
  },
  {
    title: "Responsive Web Design",
    description: "freecodecamp.com",
  },
  {
    title: "Javascript Algorithms and Data Structure",
    description: "freecodecamp.com",
  },
  {
    title: "AI Career Essentials",
    description: "ALX Africa",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="container my-5">
      <h3 className="mb-4">Certifications</h3>
      <div className="row p-2">
        {certifications.map((cert, index) => (
          <div key={index} className="col-md-6 mb-4">
            <Card className="w-100 card-cert p-2">
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Text>{cert.description}</Card.Text>
                {/* <Button
                  variant="primary"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certification
                </Button> */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
