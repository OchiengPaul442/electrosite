import React from "react";
import { Carousel1, Carousel2, Carousel3 } from "../../constants";

function Carousel() {
  return (
    <div
      id="hero-slide"
      className="carousel carousel-fade slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Carousel1} className="carousel-image img-fluid" alt="..." />

          <div className="carousel-caption d-flex flex-column justify-content-end">
            <h1>be an Electro </h1>

            <p>Compasitonate people who are willing to help others in need</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={Carousel2} className="carousel-image img-fluid" alt="..." />

          <div className="carousel-caption d-flex flex-column justify-content-end">
            <h1>Non-profit</h1>

            <p>You can support us to grow more</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={Carousel3} className="carousel-image img-fluid" alt="..." />

          <div className="carousel-caption d-flex flex-column justify-content-end">
            <h1>Humanity</h1>

            <p>
              We are here to help you in any way we can, we are here to help you
            </p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-slide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-slide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
