import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-white py-5"
      style={{
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Decorative Circles */}
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "160px",
          height: "160px",
          background:
            "linear-gradient(135deg, #667dff 0%, #3f5efb 100%)",
          filter: "blur(45px)",
          top: "8%",
          left: "5%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "140px",
          height: "140px",
          background:
            "linear-gradient(135deg, #5362e9 0%, #7a5bff 100%)",
          filter: "blur(40px)",
          top: "15%",
          right: "7%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          background:
            "linear-gradient(135deg, #667dff 0%, #3f5efb 100%)",
          filter: "blur(25px)",
          bottom: "10%",
          left: "8%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "90px",
          height: "90px",
          background:
            "linear-gradient(135deg, #3f5efb 0%, #667dff 100%)",
          filter: "blur(15px)",
          bottom: "10%",
          right: "10%",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div className="text-center mb-4" style={{ zIndex: 1 }}>
        <h1 className="fw-bold">Contact Us</h1>
        <p className="mb-0 fs-5">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Contact Form Container */}
      <div
        className="d-flex flex-column flex-lg-row align-items-stretch"
        style={{
          background:
            "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0 0 15px 1px rgba(80, 110, 255, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          maxWidth: "900px",
          width: "90%",
          padding: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Panel (Contact Information) */}
        <div
          className="d-flex flex-column justify-content-between flex-shrink-0 rounded-3 p-4"
          style={{
            background:
              "rgba(255, 255, 255, 0.07)",
            minWidth: "240px",
          }}
        >
          <div>
            <h5 className="fw-bold mb-4">Contact Information</h5>
            <div className="d-flex align-items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-envelope-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.761 4.138A2 2 0 0 0 2 14h12a2 2 0 0 0 1.999-1.032l-6.761-4.138L8 9.586l-1.239-.757z" />
              </svg>
              <b>contact@capyngen.com</b>
            </div>

            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-geo-alt-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c.19-.236.374-.48.547-.735C14.465 6.48 15 5.364 15 4a4 4 0 1 0-8 0c0 1.364.536 2.48 2.286 5.206a28.699 28.699 0 0 0 1.059 1.502l.146.178.145-.178a28.7 28.7 0 0 0 1.23-1.546z" />
                <path d="M8 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              {/* No actual address displayed in original image */}
            </div>
          </div>

          {/* Social Icons */}
          <div className="d-flex gap-3 mt-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#55acee"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.142 0-.284-.009-.425A6.676 6.676 0 0 0 16 3.542a6.56 6.56 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.797 3.286 3.286 0 0 0-5.595 2.994A9.325 9.325 0 0 1 1.114 2.1a3.286 3.286 0 0 0 1.018 4.381A3.203 3.203 0 0 1 .64 6.575v.041a3.283 3.283 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.615-.057 3.286 3.286 0 0 0 3.067 2.277 6.588 6.588 0 0 1-4.862 1.358A9.345 9.345 0 0 0 5.026 15z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#E4405F"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.146c1.542 0 1.726.006 2.333.034.606.028 1.02.128 1.26.218a2.504 2.504 0 0 1 .91.59 2.504 2.504 0 0 1 .59.909c.09.24.19.654.218 1.26.028.607.034.79.034 2.332s-.006 1.726-.034 2.332c-.028.606-.128 1.02-.218 1.26a2.504 2.504 0 0 1-.59.91 2.504 2.504 0 0 1-.909.59c-.24.09-.655.19-1.26.218-.607.028-.79.034-2.332.034s-1.726-.006-2.332-.034c-.606-.028-1.02-.128-1.26-.218a2.504 2.504 0 0 1-.909-.59 2.504 2.504 0 0 1-.59-.91c-.09-.24-.19-.655-.218-1.26C4.152 9.726 4.146 9.543 4.146 8s.006-1.726.034-2.332c.028-.606.128-1.02.218-1.26a2.504 2.504 0 0 1 .59-.91 2.504 2.504 0 0 1 .91-.59c.24-.09.654-.19 1.26-.218C6.274 4.152 6.458 4.146 8 4.146zM8 3c-1.584 0-1.778.007-2.404.035-.626.028-1.05.137-1.421.294a3.504 3.504 0 0 0-1.26.82 3.504 3.504 0 0 0-.82 1.26c-.157.37-.266.795-.294 1.421C2.007 6.222 2 6.416 2 8c0 1.583.007 1.778.035 2.404.028.626.137 1.05.294 1.421a3.504 3.504 0 0 0 .82 1.26 3.504 3.504 0 0 0 1.26.82c.37.157.795.266 1.421.294.626.028.82.035 2.404.035 1.583 0 1.778-.007 2.404-.035.626-.028 1.05-.137 1.421-.294a3.504 3.504 0 0 0 1.26-.82 3.504 3.504 0 0 0 .82-1.26c.157-.37.266-.795.294-1.421.028-.626.035-.82.035-2.404s-.007-1.778-.035-2.404c-.028-.626-.137-1.05-.294-1.421a3.504 3.504 0 0 0-.82-1.26 3.504 3.504 0 0 0-1.26-.82c-.37-.157-.795-.266-1.421-.294C9.778 3.007 9.584 3 8 3zM8 5.838a2.162 2.162 0 1 0 0 4.324 2.162 2.162 0 0 0 0-4.324zm0 3.575a1.413 1.413 0 1 1 0-2.825 1.413 1.413 0 0 1 0 2.825zm3.198-3.622a.516.516 0 1 1-1.032 0 .516.516 0 0 1 1.032 0z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#0e76a8"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.726A.723.723 0 0 1 0 14.854V1.146zm4.983 12.248V6.169H2.542v7.225h2.441zm-1.22-8.253c.837 0 1.358-.554 1.358-1.248-.015-.71-.52-1.248-1.343-1.248-.823 0-1.358.537-1.358 1.248 0 .694.52 1.248 1.327 1.248h.016zm4.908 8.253V9.359c0-.216.016-.432.08-.586.175-.432.574-.88 1.243-.88.877 0 1.229.663 1.229 1.635v3.865h2.441V9.25c0-2.22-1.184-3.252-2.764-3.252-1.281 0-1.845.7-2.165 1.195v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.17h-2.44c.03.678 0 7.224 0 7.224h2.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <form
          className="flex-grow-1 ps-lg-5 pt-5 pt-lg-0"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{ minWidth: "350px" }}
          noValidate
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <label
                htmlFor="firstName"
                className="form-label text-white-50 small"
              >
                First Name
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom rounded-0 bg-transparent text-white"
                id="firstName"
                placeholder=""
                required
                aria-label="First Name"
                style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </div>

            <div className="col-lg-6">
              <label
                htmlFor="lastName"
                className="form-label text-white-50 small"
              >
                Last Name
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom rounded-0 bg-transparent text-white"
                id="lastName"
                placeholder=""
                required
                aria-label="Last Name"
                style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </div>

            <div className="col-lg-6">
              <label
                htmlFor="email"
                className="form-label text-white-50 small"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control border-0 border-bottom rounded-0 bg-transparent text-white"
                id="email"
                placeholder=""
                required
                aria-label="Email"
                style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </div>

            <div className="col-lg-6">
              <label
                htmlFor="phone"
                className="form-label text-white-50 small"
              >
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control border-0 border-bottom rounded-0 bg-transparent text-white"
                id="phone"
                placeholder="+91"
                required
                aria-label="Phone Number"
                style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </div>

            <div className="col-12">
              <label
                htmlFor="message"
                className="form-label text-white-50 small"
              >
                Message
              </label>
              <textarea
                className="form-control border-0 border-bottom rounded-0 bg-transparent text-white"
                id="message"
                rows="1"
                placeholder="Write your message.."
                required
                aria-label="Message"
                style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button
              type="submit"
              className="btn btn-secondary"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                border: "none",
                letterSpacing: "0.05em",
              }}
            >
              Send Message
            </button>
          </div>

          {/* Paper Airplane SVG - bottom right */}
          
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

