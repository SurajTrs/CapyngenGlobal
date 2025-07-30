import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: "1. WordPress Development",
      description: "WordPress is what Capyngen utilizes to build websites that are quick, secure, and simple to run. We can help you with your brand's WordPress needs, whether you require a company site, a blog, or an online shop. Get a professional website that is simple to change, works well with search engines, and is designed to attract and convert visitors, all without any difficulties.",
      image: "/assets/wordpress.png",
    },
    {
      title: "2. Website Development",
      description: "Do you want a great-looking website that operates well on all devices? Capyngen builds websites that are quick, simple to use, and operate effectively. No matter how basic or difficult your company objectives are, we can help you realize them with websites that show off your brand and get people interested.",
      image: "/assets/domain.png",
      reverse: true,
    },
    {
      title: "3. Outsource Angular Development",
      description: "If you want to build your tech staff, Capyngen's experienced Angular engineers can assist. We help companies get outside support to create Angular web applications that are fast, scalable, and engaging. Our developers build code that is easy to read, make sure everything works, and are entirely honest about what they do, whether you require full frontend help or simply a dependable additional team member.",
      image: "/assets/angularjs.png",
    },
    {
      title: "4. Webflow Development",
      description: "Want to be able to do anything without having to learn how to code? Capyngen can help you turn your concepts into websites that are dynamic and responsive by providing skilled Webflow development. We combine great CMS functionality with good visual design so you may have complete control. You can start attractive, fast websites quicker and change them anytime you want without having to hire professionals. Good for brands that can change.",
      image: "/assets/webflow.png",
      reverse: true,
    },
    {
      title: "5. Joomla Development",
      description: "Capyngen does a great job of developing Joomla for customers that require a content management system that functions properly. We make Joomla websites that can grow with your business, are simple to use, and are highly secure. These might be for companies, neighborhoods, or internet shops. We set up Joomla for you so that you may grow and change over time.",
      image: "/assets/joomla.png",
    },
    {
      title: "6. PHP Development",
      description: "Our bespoke PHP programming services can help you build web programs that are safe, flexible, and ready to grow. Capyngen's PHP professionals can build anything from content management systems (CMS) to portals that work for your company. Our PHP solutions are dependable, quick, and made to function, whether you're beginning from scratch or improving what you already have.",
      image: "/assets/php.png",
      reverse: true,
    },
    {
      title: "7. API Development",
      description: "Want to send data across systems without any problems?   With Capyngen, you can develop APIs that are secure and simple to use.  This allows your applications speak to one other.   We create bespoke APIs and link them to applications built by other people. This lets you connect apps, automate processes, and identify new business prospects.   Our APIs are fast, simple to use, and will endure a long time.",
      image: "/assets/api.png",
    },
    {
      title: "8. Laravel Development",
      description: "Capyngen makes contemporary web projects with a lot of features using Laravel, a fast and secure PHP framework.   Our Laravel developers produce code that is simple to read, construct powerful frameworks, and design solutions that can expand with your company.   We build Laravel applications that help your company develop and run more smoothly, from MVPs to enterprise systems.",
      image: "/assets/laravel.png",
      reverse: true,
    },
    {
      title: "9. Drupal Development",
      description: "Do you want a CMS that is both secure and simple to use?   Capyngen's skilled Drupal development can help you build websites that are powerful and full of information. We can help you make sure that your government site, eLearning platform, or enterprise-grade solution will perform properly, be reliable, and provide you control. This makes it easier to deal with difficult digital scenarios.",
      image: "/assets/drupal.png",
    },
    {
      title: "10. NodeJS Development",
      description: "Capyngen provides professional NodeJS development services to create online apps that are fast, scalable, and secure. We build unique APIs and real-time backend systems that meet the demands of your company. These systems guarantee top performance, low downtime, and a pleasant user experience on all platforms.",
      image: "/assets/nodejs.png",
      reverse: true,
    },
    {
      title: "11. ReactJS Development",
      description: "We utilize ReactJS to develop fast, interactive frontends that make things better for your users. Capyngen's React developers design interfaces that are dynamic, load fast, and operate effectively. We develop reusable elements and responsive designs that help you get consumers engaged and grow your company, whether you're creating a dashboard, a single-page app, or a product UI.",
      image: "/assets/reactjs.png",
    },
    {
      title: "12. Outsource Web Development",
      description: "Capyngen offers trusted outsourced web development services that assist organizations save time and money and discover skilled workers. We take care of everything, from making bespoke websites to full-stack solutions. We make sure that your online solutions are high-quality, can grow with your business, and fit your brand.",
      image: "/assets/desktop.png",
      reverse: true,
    },
  ];

  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#131212ff" }}>
      <div className="text-center mb-5 mt-4">
        <h1 className="fw-bold">
          Web <span className="text-primary">Development</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          From CMS to full-stack solutions, Capyngen builds high-performance web applications to help your brand grow in the digital world.
        </p>
      </div>

      <div className="container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center ${service.reverse ? "flex-md-row-reverse" : ""}`}
            style={{
              maxWidth: "1406px",
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
