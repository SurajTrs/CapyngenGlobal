import React from "react";
import "../../style.css"; // Optional for custom styling
import heroImage from "../../assets/ai-chatgpt-image.png"; // Add your image

const CompanyOverview = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div className="mb-4 mb-lg-0">
            <h1 className="fw-bold">Delivering Tangible Results</h1>
            <p>
              See how Capyngen transforms businesses into digital powerhouses, driving growth,
              efficiency, and innovation across industries.
            </p>
            <button className="btn btn-light text-primary fw-semibold">Let's Talk →</button>
          </div>
          <img
            src={heroImage}
            alt="Team"
            className="img-fluid rounded"
            style={{ maxWidth: "400px" }}
          />
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-black text-white text-center py-5">
        <h2 className="mb-4">Our Impact, Quantified</h2>
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          {[
            { value: "150+", label: "Successful Projects Delivered" },
            { value: "98%", label: "Client Satisfaction Rate" },
            { value: "300%", label: "Average Traffic Increase for Clients" },
            { value: "75+", label: "Expert Team Members" },
          ].map((item, index) => (
            <div key={index} className="bg-dark rounded p-4" style={{ width: "240px" }}>
              <h4 className="text-primary fw-bold">{item.value}</h4>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-black text-white py-5">
        <div className="container">
          <h3 className="text-center mb-4">Our Story: Innovation Meets Execution</h3>
          <div className="row">
            <div className="col-md-6">
              <p>
                Capyngen is where innovation meets execution. As a full-stack IT and digital
                marketing agency, we specialize in transforming ideas into powerful digital
                experiences. From crafting industry-specific strategies to executing those visions
                through strategic marketing and advanced AI integrations, we empower startups, SMEs,
                and large-scale businesses to thrive in the digital era.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Our team of experts blends creativity with technology to deliver tailored, scalable,
                and future-ready solutions across every step of your digital journey. We do this by
                building lasting partnerships, optimizing client success models, and fostering
                continuous learning and innovation. With a deep understanding of market dynamics and
                cutting-edge technologies, we are committed to helping businesses navigate the
                complexities of the digital landscape and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-black text-white py-5">
        <div className="container">
          <h3 className="text-center mb-4">Our Core Values</h3>
          <div className="row g-3">
            {[
              "Innovation",
              "Integrity",
              "Collaboration",
              "Excellence",
              "Client-Centricity",
              "Adaptability",
            ].map((value, index) => (
              <div key={index} className="col-md-4">
                <div className="bg-dark rounded p-3 h-100">
                  <h5 className="text-primary">{value}</h5>
                  <p className="mb-0">
                    {
                      {
                        Innovation:
                          "Continuously exploring new technologies and creative solutions to stay ahead.",
                        Integrity:
                          "Operating with honesty, transparency, and a strong ethical compass in all dealings.",
                        Collaboration:
                          "Fostering teamwork and partnerships, both internally and with our clients, for shared success.",
                        Excellence:
                          "Delivering exceptional quality and performance in every project we undertake.",
                        "Client-Centricity":
                          "Prioritizing client needs and goals, tailoring solutions for their unique challenges.",
                        Adaptability:
                          "Embracing change and evolving strategies to meet dynamic market demands.",
                      }[value]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white text-center py-5">
        <h3>What Our Clients Say</h3>
        <p className="text-muted mb-4">
          Hear directly from businesses we’ve partnered with, on how Capyngen’s expertise has driven
          their digital success.
        </p>
        <div className="container">
          <div className="bg-dark p-4 rounded">
            <p className="fst-italic">
              “Capyngen transformed our outdated systems into a seamless digital experience. Their
              team is exceptionally skilled and dedicated!”
            </p>
            <h6 className="mb-0">Eleanor Vance</h6>
            <small className="text-muted">CEO, Inventix Solutions</small>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h3 className="mb-3">Ready to Transform Your Business?</h3>
          <p>
            Join countless successful businesses that have partnered with Capyngen to achieve their
            digital ambitions. Let’s build your future, together.
          </p>
          <button className="btn btn-primary">Get a Free Consultation →</button>
        </div>
      </section>
    </div>
  );
};

export default CompanyOverview;
