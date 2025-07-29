import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CRMManagementSolutionsPage = () => {
  const services = [
    {
      title: "1. Hotel Management Software",
      description:
        "Capyngen builds hotel management software that simplifies reservations, check-ins, payments, housekeeping, and guest services. Our solutions improve guest satisfaction, streamline operations, and help hotels of all sizes grow revenue and reduce manual overhead.",
      image: "https://img.icons8.com/clouds/500/hotel.png",
    },
    {
      title: "2. Hospital Management System",
      description:
        "We develop hospital management systems that organize patient records, appointments, billing, inventory, and staff coordination. These solutions reduce errors, improve administrative control, and deliver better patient care across hospitals and clinics.",
      image: "https://img.icons8.com/clouds/500/hospital-room.png",
      reverse: true,
    },
    {
      title: "3. HR & Payroll Management",
      description:
        "Capyngen delivers HR and payroll systems that automate attendance, leave tracking, salary disbursal, and compliance. Our systems reduce manual mistakes, streamline HR processes, and ensure timely, accurate payments across all departments.",
      image: "https://img.icons8.com/clouds/500/payroll.png",
    },
    {
      title: "4. Salon Management Software",
      description:
        "We build intuitive salon management software for appointment booking, staff scheduling, billing, inventory tracking, and customer communication. Our solutions help salons run efficiently, scale easily, and deliver enhanced client satisfaction.",
      image: "https://img.icons8.com/clouds/500/hair-dryer.png",
      reverse: true,
    },
    {
      title: "5. School & Institute Management",
      description:
        "Capyngen designs management systems for schools, colleges, and coaching institutes to handle admissions, attendance, exams, fee collection, and parent-staff communication. Our solutions digitize operations and make academic management seamless.",
      image: "https://img.icons8.com/clouds/500/classroom.png",
    },
    {
      title: "6. Custom CRM Development",
      description:
        "We create fully tailored CRM platforms that help you manage leads, sales pipelines, support tickets, and data analytics. With Capyngen’s CRM systems, your organization can build stronger relationships, increase productivity, and align operations to your workflows.",
      image: "https://img.icons8.com/clouds/500/customer-insight.png",
      reverse: true,
    },
  ];

  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#191919ff" }}>
      <div className="text-center mb-5 mt-4">
        <h1 className="fw-bold">
          CRM & Management <span className="text-primary">Software Solutions</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          End-to-end management systems for hotels, hospitals, salons, HR, education, and more—custom-built to automate operations and boost efficiency.
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

export default CRMManagementSolutionsPage;
