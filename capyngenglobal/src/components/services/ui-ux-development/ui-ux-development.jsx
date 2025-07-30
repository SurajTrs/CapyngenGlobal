import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: "1. Website Designing ",
      description: " Capyngen can help you design a website that is both creative and responsive, and that fits your brand. We make websites that are easy to use, look good, and work well on all devices, including desktops, tablets, and phones. These websites help businesses grow by getting more people to use them.",
      image: "https://img.icons8.com/clouds/500/wordpress.png",
    },
    {
      title: "2. Logo Designing",
      description: "Capyngen makes one-of-a-kind logo designs that show who you are and what you want your brand to be. Our skilled designers create logos that can be used in both print and digital formats. This helps your firm stand out and make a lasting impression.",
      image: "https://img.icons8.com/clouds/500/domain.png",
      reverse: true,
    },
    {
      title: "3. 3. Landing Page Designing",
      description: "Capyngen produces landing pages that are targeted to your company objectives and are designed to get people to convert.  We create sites that are responsive, interesting, and focused on getting results. These pages may help you get leads, signups, or sales.  This gets you the most return on investment (ROI) for each marketing campaign you undertake.",
      image: "https://img.icons8.com/clouds/500/angularjs.png",
    },
    
  ];

  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#191919ff" }}>
      <div className="text-center mb-5 mt-4">
        <h1 className="fw-bold">
          <span className="text-primary"> UI/UX Development </span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            We provide a wide range of UI/UX development services to help you create a visually appealing and
            user-friendly interface for your website or application. Our team of experts will work with you to
            design and develop a custom UI/UX solution that meets your specific needs and goals.
     </p>
      </div>

      <div className="container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center ${service.reverse ? "flex-md-row-reverse" : ""}`}
            style={{
              maxWidth: "auto",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              margin: "0 auto",
            }}
          >
            <div className="col-md-6 d-flex flex-column justify-content-center h-100">
              <div>
                <h4 className="fw-bold">{service.title}</h4>
                <p className="mb-0">{service.description}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center h-100">
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid rounded"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
