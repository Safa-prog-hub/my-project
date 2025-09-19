import React from "react";
import Products from "../components/Products";

function Services() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="imgs/9.jpg"
            alt="Our Services"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">Our Services</h2>
          <p className="text-muted">
            At <strong>Skill Swap</strong> platform offers a range of services designed to connect students, promote collaboration, and enhance learning experiences. Each service is created to support personal growth, knowledge exchange, and stronger campus communities.
          </p>
         
           </div>
      </div>

      <div className="container my-2 gap-5">
  <div className="row mb-2">
    <div className="col-sm-6 col-md-4 col-lg-3">
      <Products
        imgSrc="/imgs/1.jpg"
        title="Skill Sharing"
        text=" Students can showcase the skills they already have and offer them to others in exchange for learning something new."
        btnText="Explore"
      />
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <Products
        imgSrc="/imgs/2.jpg"
        title="Skill Requests"
        text=" Users can search for the skills they want to learn and connect with peers who are ready to teach them. Easy reach to seniors."
        btnText="Explore"
      />
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <Products
        imgSrc="/imgs/3.jpg"
        title="Campus Events"
        text=" Get notified about workshops, competitions, or seminars happening in your college, so you never miss an opportunity."
        btnText="Explore"
      />
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <Products
        imgSrc="/imgs/4.jpg"
        title="Peer-to-Peer Barter"
        text=" Exchange skills without money! Teach what you know, and in return, learn what you want building a collaborative learning environment."
        btnText="Explore"
      />
    </div>
  </div>
</div>

    </div>
  );
}

export default Services;