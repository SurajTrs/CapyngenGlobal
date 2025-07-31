import React from "react";
import "../../../style.css"; // Ensure your main stylesheet is linked and can define global vars
import heroImage from "../../../assets/ai-chatgpt-image.png"; // Add your image

const CapyngenCompanyOverview = () => {
  return (
    <div className="capy-company-overview"> {/* Added a wrapper class for specific styling */}
      {/* Hero Section */}
      <section className="capy-hero-section bg-primary text-white py-5 py-md-5 py-lg-7">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div className="hero-content mb-4 mb-lg-0 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3 animate-fade-in-up">Delivering Tangible Results</h1>
            <p className="lead mb-4 animate-fade-in-up delay-1">
              See how Capyngen transforms businesses into digital powerhouses, driving growth,
              efficiency, and innovation across industries.
            </p>
            <button className="btn btn-light text-primary fw-semibold px-4 py-2 rounded-pill animate-fade-in-up delay-2">
              Let's Talk →
            </button>
          </div>
          <div className="hero-image animate-fade-in-right">
            <img
              src={heroImage}
              alt="Team collaborating on digital transformation"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "450px" }}
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="capy-metrics-section bg-black text-white py-5 py-lg-6">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold animate-fade-in">Our Impact, Quantified</h2>
          <div className="row justify-content-center g-4"> {/* Use row-cols for responsive columns */}
            {[
              { value: "150+", label: "Successful Projects Delivered" },
              { value: "98%", label: "Client Satisfaction Rate" },
              { value: "300%", label: "Average Traffic Increase for Clients" },
              { value: "75+", label: "Expert Team Members" },
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <div className="capy-metric-card bg-dark rounded-3 p-4 text-center border border-secondary animate-fade-in-up"
                     style={{animationDelay: `${0.1 * index}s`}}>
                  <h4 className="text-primary display-5 fw-bold mb-2">{item.value}</h4>
                  <p className="fs-6 opacity-75 mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="capy-story-section bg-dark text-white py-5 py-lg-6">
        <div className="container">
          <h3 className="text-center mb-5 fw-bold animate-fade-in">Our Story: Innovation Meets Execution</h3>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 animate-fade-in-left">
              <p className="lead mb-4">
                Capyngen is where **innovation meets execution**. As a full-stack IT and digital
                marketing agency, we specialize in transforming ideas into powerful digital
                experiences. From crafting industry-specific strategies to executing those visions
                through strategic marketing and advanced AI integrations, we empower startups, SMEs,
                and large-scale businesses to thrive in the digital era.
              </p>
            </div>
            <div className="col-lg-6 animate-fade-in-right">
              <p className="mb-0">
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
      <section className="capy-values-section bg-black text-white py-5 py-lg-6">
        <div className="container">
          <h3 className="text-center mb-5 fw-bold animate-fade-in">Our Core Values</h3>
          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Innovation",
                description:
                  "Continuously exploring new technologies and creative solutions to stay ahead.",
              },
              {
                title: "Integrity",
                description:
                  "Operating with honesty, transparency, and a strong ethical compass in all dealings.",
              },
              {
                title: "Collaboration",
                description:
                  "Fostering teamwork and partnerships, both internally and with our clients, for shared success.",
              },
              {
                title: "Excellence",
                description:
                  "Delivering exceptional quality and performance in every project we undertake.",
              },
              {
                title: "Client-Centricity",
                description:
                  "Prioritizing client needs and goals, tailoring solutions for their unique challenges.",
              },
              {
                title: "Adaptability",
                description:
                  "Embracing change and evolving strategies to meet dynamic market demands.",
              },
            ].map((value, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 d-flex"> {/* Use d-flex for equal height cards */}
                <div className="capy-value-card bg-dark rounded-3 p-4 border border-secondary flex-grow-1 animate-fade-in-up"
                     style={{animationDelay: `${0.1 * index}s`}}>
                  <h5 className="text-primary fw-bold mb-2">{value.title}</h5>
                  <p className="mb-0 opacity-75">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="capy-testimonials-section bg-dark text-white py-5 py-lg-6">
        <div className="container">
          <h3 className="text-center mb-5 fw-bold animate-fade-in">What Our Clients Say</h3>
          <p className="text-center text-muted mb-5 lead animate-fade-in delay-1">
            Hear directly from businesses we’ve partnered with, on how Capyngen’s expertise has driven
            their digital success.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="capy-testimonial-card bg-black p-5 rounded-3 shadow-lg text-center animate-fade-in-up">
                <p className="fst-italic lead mb-4">
                  “Capyngen transformed our outdated systems into a seamless digital experience. Their
                  team is exceptionally skilled and dedicated, truly going above and beyond!”
                </p>
                <h6 className="fw-bold text-primary mb-1">Eleanor Vance</h6>
                <small className="text-muted">CEO, Inventix Solutions</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="capy-cta-section bg-primary text-white text-center py-5 py-lg-6">
        <div className="container">
          <h3 className="mb-3 fw-bold animate-fade-in">Ready to Transform Your Business?</h3>
          <p className="lead mb-4 animate-fade-in delay-1">
            Join countless successful businesses that have partnered with Capyngen to achieve their
            digital ambitions. Let’s build your future, together.
          </p>
          <button className="btn btn-light text-primary fw-semibold px-4 py-2 rounded-pill animate-fade-in delay-2">
            Get a Free Consultation →
          </button>
        </div>
      </section>
    </div>
  );
};

export default CapyngenCompanyOverview;