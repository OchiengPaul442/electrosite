import React from "react";
import Screen from "../../layout/Screen";
import { Carousel } from "../../components";
import {
  Welcome,
  Ourstory,
  ElectroFounder,
  Volunteer,
  News,
  Reviews,
  Contact,
  Reasons,
  VolunteerBanner,
} from "../../containers";

const Home = () => {
  return (
    <Screen>
      <main>
        <section className="hero-section hero-section-full-height">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12 p-0">
                {/* Carousel */}
                <Carousel />
              </div>
            </div>
          </div>
        </section>

        {/* WELCOME SECTION */}
        <Welcome />

        {/* Our story section */}
        <Ourstory />

        {/* Founder section */}
        <ElectroFounder />

        {/* Become volunter section 1 */}
        <VolunteerBanner />

        {/* REASONS SECTION */}
        <Reasons />

        {/* VOLUNTEER SECTION */}
        <Volunteer />

        {/* News section */}
        <News />

        {/* CUSTOMER REVIEWS */}
        <Reviews />

        {/* CONTACT SECRTION */}
        <Contact />
      </main>
    </Screen>
  );
};

export default Home;
