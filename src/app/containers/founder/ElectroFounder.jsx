import React from "react";
import { Founder } from "../../constants";

function ElectroFounder() {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-12">
            <img
              src={Founder}
              className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-5 col-md-7 col-12">
            <div className="custom-text-block">
              <h2 className="mb-0">Paul Ochieng</h2>

              <p className="text-muted mb-lg-4 mb-md-4">Co-Founding Partner</p>

              <p>
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito Professional charity theme based
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quae voluptatum quis, nostrum aperiam, corrupti doloribus nisi
                veniam nam laborum repellendus in odit deserunt facilis culpa
                accusamus magnam expedita sed.
              </p>

              <ul className="social-icon mt-4">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElectroFounder;
