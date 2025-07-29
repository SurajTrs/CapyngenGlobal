import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: "1. AI Development Services",
      description: " Capyngen offers powerful AI development services that may help your company work smarter and get more done.  We provide personalised AI solutions that help individuals make smarter choices, run their businesses more smoothly, and have a better experience.  They include smart automation technologies and machine learning models.  Use AI that is a great match for your company objectives to spur new ideass.",
      image: "https://img.icons8.com/clouds/500/wordpress.png",
    },
    {
      title: "2. AI Chatbot Development",
      description: "Capyngen produces intelligent AI chatbots that speak to your customers all day, every day.  Our chatbots work like a human assistant by answering questions, automating replies, and getting users more engaged.  Our bots are fantastic for organisations that provide services, eCommerce, and customer care since they make customers happy, save expenses, and cut down on the amount of labour that has to be done by hand.",
      image: "https://img.icons8.com/clouds/500/domain.png",
      reverse: true,
    },
    {
      title: "3. ChatGpt Integration Services",
      description: "You can leverage conversational AI using Capyngen's ChatGPT integration services.  We can easily link ChatGPT to your websites, CRMs, or applications so that you may conduct discussions that sound like they're happening in real time.  With ChatGPT-powered solutions that are smart, scalable, and dependable, you can make communication simpler, enhance the user experience, and automate customer care.",
      image: "https://img.icons8.com/clouds/500/angularjs.png",
    },
    
  ];

  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#191919ff" }}>
      <div className="text-center mb-5 mt-4">
        <h1 className="fw-bold">
          Custom <span className="text-primary"> AI Solution</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
Tailored AI solutions that automate, predict, and optimize—built to transform your business with intelligent innovation.        </p>
      </div>

      <div className="container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center ${service.reverse ? "flex-md-row-reverse" : ""}`}
            style={{
              maxWidth: "1406px",
              height: "506px",
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
