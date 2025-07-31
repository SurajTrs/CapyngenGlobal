import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BlockchainDevelopment = () => {
  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#111111ff" }}>
      <div className="text-center mb-4 mt-5">
        <h1 className="fw-bold">
          Blockchain <span className="text-primary">Development</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Capyngen delivers secure, transparent, and scalable blockchain solutions, enabling businesses to innovate and thrive in the decentralized era.
        </p>
      </div>

      <div className="container">
        {/* Smart Contract Development */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">1. Smart Contract Development</h4>
            <p>
              Capyngen creates robust and secure smart contracts that automate agreements and transactions. Whether you're launching a token, a DApp, or a DeFi solution, our smart contracts ensure trust and eliminate third-party dependencies.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/smart-contract.png" alt="Smart Contract Development" className="img-fluid rounded" />
          </div>
        </div>

        {/* DApp Development */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h4 className="fw-bold">2. Decentralized App (DApp) Development</h4>
            <p>
              We develop high-performance DApps using blockchain platforms like Ethereum, Polygon, and Solana. These applications provide decentralized user experiences with top-notch security and scalability.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/dapp.png" alt="DApp Development" className="img-fluid rounded" />
          </div>
        </div>

        {/* NFT Platforms */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">3. NFT Platform Development</h4>
            <p>
              Capyngen builds user-friendly NFT platforms for creators, collectors, and enterprises. From minting to marketplace features, we deliver complete NFT infrastructure powered by blockchain.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/nft.png" alt="NFT Development" className="img-fluid rounded" />
          </div>
        </div>

        {/* Blockchain Wallets */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h4 className="fw-bold">4. Blockchain Wallet Development</h4>
            <p>
              We develop secure blockchain wallets for storing and managing cryptocurrencies and digital assets. Our solutions include multi-currency, multi-sig, and cold wallet integrations.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/wallet.png" alt="Wallet Development" className="img-fluid rounded" />
          </div>
        </div>

        {/* Token Development */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">5. Token Development & ICO</h4>
            <p>
              Whether you're launching a utility, security, or governance token, we provide end-to-end token development including smart contracts, whitepapers, and launch strategies for ICO, STO, or IEO.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/token.png" alt="Token Development" className="img-fluid rounded" />
          </div>
        </div>

        {/* Private Blockchain */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h4 className="fw-bold">6. Private Blockchain Development</h4>
            <p>
              For enterprises needing permissioned networks, Capyngen develops secure and high-performance private blockchains tailored for supply chain, healthcare, finance, and more.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/private-blockchain.png" alt="Private Blockchain" className="img-fluid rounded" />
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

export default BlockchainDevelopment;
