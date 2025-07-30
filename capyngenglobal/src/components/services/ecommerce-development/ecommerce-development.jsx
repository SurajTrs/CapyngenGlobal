import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ECommerceSolutionsPage = () => {
  const services = [
    {
      title: "1. Shopify Development",
      description:
        "Capyngen builds Shopify shops that reflect your brand and maximize revenue. Our end-to-end Shopify development ensures your eCommerce store is easy to set up, fast-loading, and mobile-optimized. Whether you're launching a new store or scaling your business, our Shopify experts help you boost sales and enhance customer experience.",
      image: "/assets/shopify.png",
    },
    {
      title: "2. WooCommerce Development",
      description:
        "Capyngen creates custom, feature-rich WooCommerce stores that are secure, fast, and responsive. From product pages to payment integration and shipping setups, we manage your entire online store infrastructure—ensuring smooth performance and rapid sales growth.",
      image: "/assets/woocommerce.png",
      reverse: true,
    },
    {
      title: "3. VirtueMart Development",
      description:
        "Capyngen develops powerful VirtueMart eCommerce solutions integrated with Joomla. Features like inventory management, multilingual support, and custom checkout flows ensure flexibility and growth. Our VirtueMart builds are ideal for businesses needing robust, scalable platforms with great customer experiences.",
      image: "/assets/joomla.png",
    },
    {
      title: "4. Magento Development",
      description:
        "Capyngen delivers high-performance Magento eCommerce stores with secure payments, responsive design, and intuitive interfaces. Our Magento solutions are perfect for both B2B and B2C models—helping you manage large inventories, increase sales, and drive business growth.",
      image: "/assets/magento.png",
      reverse: true,
    },
  ];

  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#191919ff" }}>
      <div className="text-center mb-5 mt-4">
        <h1 className="fw-bold">
          E-Commerce <span className="text-primary">Solutions</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Robust, scalable, and feature-rich eCommerce platforms tailored to your business model—designed to increase engagement and maximize conversion.
        </p>
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

export default ECommerceSolutionsPage;
