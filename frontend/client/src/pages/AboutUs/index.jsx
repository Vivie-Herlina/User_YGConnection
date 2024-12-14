// src/pages/AboutUs/AboutUs.js
import React from "react";
import Footer from "../../components/Footer";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";

const AboutUs = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarWithAuth />

      {/* Main Content */}
      <main className="px-4 py-8 md:px-16 lg:px-32 bg-gray-50 ">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            About YGEntertainment.id
          </h1>

          <div className="space-y-12">
            {/* Mission Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Mission</h2>
              <p className="text-lg leading-relaxed">
                Become a trusted platform for YG Entertainment fans in Indonesia
                to get official merchandise and the latest information about
                concerts, in order to bring fans closer to their favorite
                artists.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Vision</h2>
              <p className="text-lg leading-relaxed">
                Providing easy and safe access for YG Entertainment fans in
                Indonesia to get quality official merchandise, while providing
                the latest information about YG concert schedules, events, and
                artist news. We are committed to establishing a solid fan
                community in Indonesia, offering a satisfying shopping
                experience and presenting exclusive products that can strengthen
                the relationship between fans and their favorite artists.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
