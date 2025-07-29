import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ApplicationsDevelopment = () => {
  return (
    <div className=" text-light min-vh-100 p-5" style={{background:"#191919ff"}} >
      
      <div className="text-center mb-4 mt-5">
  <h1 className="fw-bold">
    App <span className="text-primary">Development</span> by Capyngen
  </h1>
  <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
    Whether you need Android, iOS, hybrid, or cloud-based apps, Capyngen crafts scalable and high-performing mobile solutions tailored to your business goals.
  </p>
</div>

{/* App Cards: Alternating layout */}
<div className="container">

  {/* Android App */}
  <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center"
  style={{
 maxWidth: 'auto',
    height: '506px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    margin: '0 auto'
   
  }}>
    <div className="col-md-6">
      <h4 className="fw-bold">1. Android Mobile Application</h4>
      <p>
We create Android applications that help your company flourish. Capyngen creates mobile solutions that are quick, dependable, and fun, and they are built particularly for you. Our bespoke Android applications provide you complete control and a lasting effect, whether you want to reach more people or make your services simpler to use. Your consumers may utilize them immediately on their phones.     </p>
    </div>
    <div className="col-md-6">
      <img
        src="https://img.icons8.com/clouds/500/android-os.png"
        alt="Android App Development"
        className="img-fluid rounded"
      />
    </div>
  </div>

  {/* Hybrid App */}
  <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse"
   style={{
 maxWidth: 'auto',
    height: '506px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    margin: '0 auto'
   
  }}
  >
    <div className="col-md-6">
      <h4 className="fw-bold">2. Hybrid Mobile Application</h4>
      <p>
Our hybrid app solutions will help you save both time and money. Capyngen develops one app that works on both Android and iOS. This is helpful for companies who want to get to more customers quickly. It works seamlessly and feels like a native software, so your users will have a fantastic time on any device. You will also save money on the charges of development.</p>
    </div>
    <div className="col-md-6">
      <img
        src="https://img.icons8.com/clouds/500/mobile-app.png"
        alt="Hybrid App Development"
        className="img-fluid rounded"
        
      />
    </div>
  </div>

  {/* iOS App */}
  <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center"
   style={{
 maxWidth: 'auto',
    height: '506px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    margin: '0 auto'
   
  }}>
    <div className="col-md-6">
      <h4 className="fw-bold">3. iOS Mobile Application</h4>
      <p>
Want to impress individuals who have iPhones and iPads? Capyngen produces outstanding iOS applications that are quick, secure, and look well. We assist you satisfy Apple's requirements while also making sure your consumers have a great experience that makes them want to come back for more. This will bring in more sales, keep clients coming back, and get actual commercial outcomes in the iOS market.      </p>
    </div>
    <div className="col-md-6">
      <img
        src="https://img.icons8.com/clouds/500/ios-logo.png"
        alt="iOS App Development"
        className="img-fluid rounded"
      />
    </div>
  </div>

  {/* Custom App */}
  <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse"
     style={{
 maxWidth: 'auto',
    height: '506px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    margin: '0 auto'
   
  }}>
    <div className="col-md-6">
      <h4 className="fw-bold">4. Custom Application Development</h4>
      <p>
Your app should be equally as one-of-a-kind as your company. Capyngen produces mobile applications that are completely unique to you. Whether you want to streamline processes, communicate with consumers better, or launch a new concept, our bespoke applications can help you solve real issues, save time, and deliver value directly to your users.      </p>
    </div>
    <div className="col-md-6">
      <img
        src="https://img.icons8.com/clouds/500/customize-view.png"
        alt="Custom App Development"
        className="img-fluid rounded"
      />
    </div>
  </div>

  {/* SaaS App */}
  <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
    <div className="col-md-6">
      <h4 className="fw-bold">5. SaaS Application Development</h4>
      <p>
Capyngen can help you transform your concept for a product into a profitable SaaS platform. We build SaaS programs that are secure and can expand with your organization. With these applications, you may service consumers at any time and from any place. We provide you everything you need to start, develop, and generate money with your software-as-a-service company with confidence, from easy-to-use dashboards to powerful user management. </p>
    </div>
    <div className="col-md-6">
      <img
        src="https://img.icons8.com/clouds/500/services.png"
        alt="SaaS Development"
        className="img-fluid rounded"
      />
    </div>
  </div>

  {/* Cloud App */}
  <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse"
   style={{
 maxWidth: 'auto',
    height: '506px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    margin: '0 auto'
   
  }}>
    <div className="col-md-6">
      <h4 className="fw-bold">6. Cloud Application Development</h4>
      <p>
Do you want applications that are strong, operate fast, and can expand easily? Capyngen offers cloud-based apps that can expand with your organization. AWS, Azure, or Google Cloud host our applications, which are constantly accessible, affordable, and simple to get to from anywhere in the globe. This lets you provide your consumers better service and remain ahead of the competition in any market.      </p>
    </div>
    <div className="col-md-6">
      <img
        src="https://img.icons8.com/clouds/500/cloud.png"
        alt="Cloud App Development"
        className="img-fluid rounded"
      />
    </div>
  </div>

</div>



      {/* Import needed Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
    </div>
  );
};



export default ApplicationsDevelopment;

