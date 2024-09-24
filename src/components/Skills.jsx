import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const languages = [
  {
    title: "Java",
    application: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    title: "Javascript",
    application: "Backend and Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    title: "Python",
    application: "Backend and Data Analysis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    title: "",
    application: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    title: "",
    application: "Relational Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  {
    title: "Solidity",
    application: "Smart Contracts",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
  },
];

  const frameworks = [
    {
      title: "React",
      application: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "Express",
      application: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      title: "Django & Django Rest",
      application: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    },
    {
      title: "Next.JS",
      application: "Frontend & Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
  ];

  const graphicToolset = [
    {
      title: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    },
    {
      title: "Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
    },
    {
      title: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
    }
  ];
      

const Skills = () => (
  <section id="skills" className="my-5">
    <Container>
      <div className="mb-5">
        <h3 className="section-title">Programming Languages</h3>
        <Row className="d-flex justify-content-center">
          {languages.map((language, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3} className="mb-4">
              <div className="skill-card text-center p-4">
                <img
                  src={language.icon}
                  alt={"image of " + language.title}
                  className="icon img-fluid mb-3"
                />
                <strong>{language.title}</strong>
                <p>
                  Application:{" "}
                  <span className="application">{language.application}</span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mb-5">
        <h3 className="section-title">Frameworks</h3>
        <Row className="d-flex justify-content-center">
          {frameworks.map((framework, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3} className="mb-4">
              <div className="skill-card text-center p-4">
                <img
                  src={framework.icon}
                  alt={"image of " + framework.title}
                  className="icon img-fluid mb-3"
                />
                <strong>{framework.title}</strong>
                <p>
                  Application:{" "}
                  <span className="application">{framework.application}</span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <h3 className="section-title">Graphics Design Toolset</h3>
        <Row className="d-flex justify-content-center">
          {graphicToolset.map((tool, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3} className="mb-4">
              <div className="skill-card text-center p-4">
                <img
                  src={tool.icon}
                  alt={"image of " + tool.title}
                  className="icon img-fluid mb-3"
                />
                <strong>{tool.title}</strong>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  </section>
  // <section
  //   id="skills"
  //   className="container my-5 rounded"
  //   // style={{ height: 100 + "vh" }}
  // >
  //   <div>
  //     <h3 className="text-success">Programming Languages</h3>
  //     <Row className=" d-flex justify-content-between mx-auto ps-4">
  //       {languages.map((language, index) => (
  //         <Col key={index} xs={6} md={4} lg={3} className="mb-3">
  //           <div className="skill-card p-1 border border-3 border-warning border-dark rounded row">
  //             <img
  //               src={language.icon}
  //               alt={"image of" + language.title}
  //               className="icon img-fluid mx-auto"
  //             />
  //             <strong>{language.title}</strong>
  //             <p className="">
  //               Application:{" "}
  //               <span className="fw-bold text-success">
  //                 {language.application}
  //               </span>
  //             </p>
  //           </div>
  //         </Col>
  //       ))}
  //     </Row>
  //   </div>
  //   <div>
  //     <h3 className="text-success">Frameworks</h3>
  //     <Row className=" d-flex justify-content-between mx-auto ps-4">
  //       {frameworks.map((language, index) => (
  //         <Col key={index} xs={6} md={4} lg={3} className="mb-3">
  //           <div className="skill-card p-1 border border-3 border-warning border-dark rounded row">
  //             <img
  //               src={language.icon}
  //               alt={"image of" + language.title}
  //               className="icon img-fluid mx-auto"
  //             />
  //             <strong>{language.title}</strong>
  //             <p className="">
  //               Application:{" "}
  //               <span className="fw-bold text-success">
  //                 {language.application}
  //               </span>
  //             </p>
  //           </div>
  //         </Col>
  //       ))}
  //     </Row>
  //   </div>
  //   <div>
  //     <h3 className="text-success">Graphics Design Toolset </h3>
  //     <Row className=" d-flex justify-content-between mx-auto ps-4">
  //       {graphicToolset.map((language, index) => (
  //         <Col key={index} xs={6} md={4} lg={3} className="mb-3">
  //           <div className="skill-card p-1 border border-3 border-warning border-dark rounded row">
  //             <img
  //               src={language.icon}
  //               alt={"image of" + language.title}
  //               className="icon img-fluid mx-auto"
  //             />
  //             <strong>{language.title}</strong>
  //           </div>
  //         </Col>
  //       ))}
  //     </Row>
  //   </div>
  // </section>
);

export default Skills;
