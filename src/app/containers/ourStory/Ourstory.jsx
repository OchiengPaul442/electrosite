import React from "react";
import { OurStory } from "../../constants";

const Ourstory = () => {
  return (
    <section className="section-padding section-bg" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <img
              src={OurStory}
              className="custom-text-box-image img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-text-box">
              <h2 className="mb-2">Our Story</h2>

              <h5 className="mb-3">
                Kind Heart Charity, Non-Profit Organization
              </h5>

              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam est explicabo id dolore dolorum, esse rem dolores
                corporis maiores soluta. Consequatur pariatur autem voluptate,
                soluta debitis hic laboriosam adipisci quisquam.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box mb-lg-0">
                  <h5 className="mb-3">Our Mission</h5>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <ul className="custom-list mt-2">
                    <li className="custom-list-item d-flex">
                      <i className="bi-check custom-text-box-icon me-2"></i>
                      lorem ipsum dolor sit amet
                    </li>

                    <li className="custom-list-item d-flex">
                      <i className="bi-check custom-text-box-icon me-2"></i>
                      Sed ut perspiciatis unde omnis
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                  <div className="counter-thumb">
                    <div className="d-flex">
                      <span className="counter-number"></span>
                      <span className="counter-number-text">300</span>
                    </div>

                    <span className="counter-text">Founded</span>
                  </div>

                  <div className="counter-thumb mt-4">
                    <div className="d-flex">
                      <span className="counter-number">120</span>
                      <span className="counter-number-text">B</span>
                    </div>

                    <span className="counter-text">Donations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
