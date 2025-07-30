import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BlockchainDevelopmentPage = () => {
  const services = [
    {
      title: "1. Metaverse Development",
      description:
        "Step into the future with Capyngen’s custom Metaverse solutions. We design immersive 3D environments that elevate virtual shopping, education, gaming, and events. Our platforms—ranging from avatars to cross-brand ecosystems—enable deeper engagement, monetization, and next-gen interaction.",
      image: "https://img.icons8.com/clouds/500/virtual-reality.png",
    },
    {
      title: "2. ICO Development",
      description:
        "Capyngen empowers your blockchain venture with secure, scalable, and investor-ready ICO development. From smart contracts and tokens to investor dashboards and landing pages—we ensure transparency, security, and efficiency to help you raise capital with confidence.",
      image: "https://img.icons8.com/clouds/500/ethereum.png",
      reverse: true,
    },
    {
      title: "3. Custom Blockchain Development",
      description:
        "Capyngen offers tailored blockchain solutions for finance, healthcare, supply chains, and identity management. Our decentralized apps improve trust, eliminate fraud, and give you full control over your data and operations—all built with security and automation in mind.",
      image: "https://img.icons8.com/clouds/500/blockchain-technology.png",
    },
    {
      title: "4. Cryptocurrency Wallet Development",
      description:
        "Capyngen delivers secure and user-friendly crypto wallets. Features include multi-currency support, real-time tracking, cold storage, and two-factor authentication. Perfect for personal use, exchanges, and trading platforms.",
      image: "https://img.icons8.com/clouds/500/wallet.png",
      reverse: true,
    },
    {
      title: "5. NFT Development",
      description:
        "Capyngen enables creators and collectors with powerful NFT solutions. From marketplaces and minting engines to smart contracts—our blockchain-based systems are secure, scalable, and designed to maximize value from digital assets.",
      image: "https://img.icons8.com/clouds/500/nft.png",
    },
    {
      title: "6. Web3 Development",
      description:
        "Capyngen develops decentralized Web3 applications with built-in privacy, ownership, and scalability. We create DeFi platforms, dApps, smart contracts, and seamless blockchain integrations—bridging the gap between the traditional web and the decentralized future.",
      image: "https://img.icons8.com/clouds/500/web.png",
      reverse: true,
    },
    {
      title: "7. Blockchain Game Development",
      description:
        "Capyngen blends gaming expertise with blockchain innovation to create immersive, feature-rich decentralized games. We provide end-to-end support—from concept and mechanics to tokenomics and post-launch technical maintenance.",
      image: "https://img.icons8.com/clouds/500/joystick.png",
    },
    {
      title: "8. Crypto Exchange Software Development",
      description:
        "Capyngen builds scalable, secure, and customizable crypto exchange platforms. With features like KYC/AML integration, multi-currency support, high-speed trading engines, and real-time analytics, our solutions serve startups and enterprise-level markets alike.",
      image: "https://img.icons8.com/clouds/500/money-transfer.png",
      reverse: true,
    },
  ];

  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#191919ff" }}>
      <div className="text-center mb-5 mt-4">
        <h1 className="fw-bold">
          Blockchain <span className="text-primary">Development</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          From NFTs and Web3 to secure exchanges and decentralized apps—Capyngen builds future-proof blockchain ecosystems tailored to your business needs.
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

export default BlockchainDevelopmentPage;
