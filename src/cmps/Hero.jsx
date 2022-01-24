import React from "react";

function Hero() {
  return (
    <section className="hero-wrapper flex space-between">
      <div className="content-container">
        <h1 className="logo">
          read<span>Books.</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse velit
          nam, repellendus unde.
        </p>
        <button className="main-btn">find out more</button>
      </div>
      <div className="hero-img"></div>
    </section>
  );
}

export default Hero;
