import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="imgs/8.jpg"
            height={80}
            width={500}
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">About Us</h2>
          <p className="text-muted">
            Welcome to <strong>Skill Swap</strong> Our platform is designed exclusively for college communities, where students can connect, collaborate, and contribute. Whether it’s sharing skills, finding study groups, or staying updated with campus events, we provide a one-stop solution that helps students grow academically, creatively, and socially.
          </p>
          
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h4>Our Mission</h4>
          <p className="text-muted">
            To empower students by offering a platform that encourages knowledge-sharing, collaboration, and innovation. We aim to make learning engaging, accessible, and community-driven.    </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Our Vision</h4>
          <p className="text-muted">
            We believe in collaboration, where students grow together by sharing knowledge and skills. Innovation drives us to encourage creativity and new ideas, while inclusivity ensures that every student and every skill is valued.  </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Our Values</h4>
          <p className="text-muted">
            We believe in integrity, transparency, and continuous learning 
            building trust with clients while nurturing talent within our team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;