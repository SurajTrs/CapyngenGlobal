import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MetaverseDevelopment = () => {
  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#111111ff" }}>
      <div className="text-center mb-4 mt-5">
        <h1 className="fw-bold">
          Metaverse <span className="text-primary">Development</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Capyngen is pioneering the virtual frontier by building immersive and scalable Metaverse platforms that redefine engagement, collaboration, and experience.
        </p>
      </div>

      <div className="container">
        {/* Virtual Worlds */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">1. Virtual World Design</h4>
            <p>
              We create realistic and engaging 3D virtual environments where your users can explore, interact, and socialize. Whether it's for entertainment, training, or simulation, our designs deliver unforgettable experiences.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/virtual-world.png"
              alt="Virtual World"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* VR/AR Integration */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h4 className="fw-bold">2. VR/AR Experiences</h4>
            <p>
              Dive deeper into immersion with our VR and AR development services. Capyngen delivers hardware-friendly, scalable AR/VR apps for games, events, education, and enterprise training.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/vr-ar.png"
              alt="VR AR Integration"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Avatars & Customization */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">3. Avatars & Personalization</h4>
            <p>
              Empower your users with personalized avatars, wearable items, and digital identity systems. We build character creation tools and skins for full self-expression within your metaverse space.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/avatar.png"
              alt="Avatar Development"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Metaverse Commerce */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h4 className="fw-bold">4. Metaverse Commerce</h4>
            <p>
              We enable secure in-world transactions, virtual goods marketplaces, and NFT integration. Capyngen empowers digital economy experiences with blockchain-backed ownership and payment systems.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/metaverse-commerce.png"
              alt="Metaverse Commerce"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Events & Collaboration */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">5. Virtual Events & Workspaces</h4>
            <p>
              Host immersive conferences, virtual exhibitions, and team collaboration environments. We combine real-time chat, video, and interaction tools to foster engagement and productivity.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/virtual-events.png"
              alt="Virtual Events"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
    </div>
  );
};

export default MetaverseDevelopment;
