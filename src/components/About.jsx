import React from "react";

const About = () => (
  <section id="about" className="container my-5">
    <div className="container-lg mt-5 text-center">
      <div className="circle-background mx-auto mb-4">
        <img
          src="https://res.cloudinary.com/dglqu5yh3/image/upload/v1723445097/main-portfolio/about_pic_cf06im.png"
          alt="Circular Image"
          className="circle-image mt-5"
        />
      </div>
      <p className="lead text">
        Hey, I'm <span className="text-orange">Baraka Mangesho</span>. I have a
        passion for developing innovative solutions, I'm also exploring the world of blockchain
        development, blending creativity with cutting-edge technology to bring
        ideas to life. Dive in and explore what I've been up to!
      </p>
    </div>
  </section>
  // <section id="about" className="container my-5">
  //   <div className="container-lg mt-5">
  //     <div className="circle-background mx-auto">
  //       <img src="" alt="Circular Image" className="circle-image" />
  //     </div>
  //     <p className="lead text mt-5">
  //       Hey, I'm <span className="text-orange">Baraka Mangesho</span>, I have a
  //       passion for creating visually engaging designs. I also strive to build
  //       innovative solutions and bring ideas to life with creativity. Dive in
  //       and see what I've been up to!
  //     </p>
  //   </div>
  // </section>
);

export default About;
