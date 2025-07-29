import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const DevOpsSolutionsPage = () => {
  const services = [
    {
      title: "1. CI/CD Pipeline Setup",
      description:
        "Capyngen sets up Continuous Integration and Continuous Deployment (CI/CD) pipelines that automate your software release process. We integrate tools like Jenkins, GitHub Actions, and GitLab CI to ensure reliable, fast, and frequent deployments with minimal manual intervention.",
      image: "https://img.icons8.com/clouds/500/deployment.png",
    },
    {
      title: "2. Infrastructure as Code (IaC)",
      description:
        "Capyngen implements Infrastructure as Code using tools like Terraform and AWS CloudFormation to provision and manage your infrastructure. This ensures scalability, consistency, and version control for your entire infrastructure stack.",
      image: "https://img.icons8.com/clouds/500/code.png",
      reverse: true,
    },
    {
      title: "3. Cloud Infrastructure Management",
      description:
        "We manage cloud environments on AWS, Azure, and Google Cloud. Capyngen handles server provisioning, container orchestration, networking, and monitoring—optimizing your infrastructure for performance, security, and cost-efficiency.",
      image: "https://img.icons8.com/clouds/500/cloud-computing.png",
    },
    {
      title: "4. Docker & Kubernetes Services",
      description:
        "Capyngen containerizes your applications using Docker and deploys them on scalable Kubernetes clusters. Our solutions ensure high availability, fault tolerance, and seamless scaling across development, staging, and production environments.",
      image: "https://img.icons8.com/clouds/500/docker.png",
      reverse: true,
    },
    {
      title: "5. Monitoring & Logging Solutions",
      description:
        "Capyngen provides end-to-end monitoring and logging using tools like Prometheus, Grafana, ELK Stack, and Datadog. We help you detect issues in real-time, optimize performance, and gain deep observability into your systems and applications.",
      image: "https://img.icons8.com/clouds/500/combo-chart.png",
    },
    {
      title: "6. Security & Compliance Automation",
      description:
        "Our DevOps team integrates security into your development pipeline using automated vulnerability scanning, compliance checks, and policy enforcement tools—ensuring your deployments meet modern security standards without slowing down delivery.",
      image: "https://img.icons8.com/clouds/500/lock.png",
      reverse: true,
    },
  ];

  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#191919ff" }}>
      <div className="text-center mb-5 mt-4">
        <h1 className="fw-bold">
          DevOps <span className="text-primary">Solutions</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Automate, monitor, and scale your software lifecycle with Capyngen's enterprise-grade DevOps solutions—ensuring faster delivery, higher quality, and reduced operational overhead.
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

export default DevOpsSolutionsPage;
