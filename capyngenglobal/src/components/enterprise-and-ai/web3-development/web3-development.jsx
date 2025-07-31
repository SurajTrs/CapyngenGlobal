import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Web3Development = () => {
  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#111111ff" }}>
      <div className="text-center mb-4 mt-5">
        <h1 className="fw-bold">
          Web3 <span className="text-primary">Development</span> by Capyngen
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Capyngen empowers decentralized digital experiences by building secure, scalable, and user-centric Web3 solutions for businesses ready to embrace blockchain, smart contracts, and the decentralized internet.
        </p>
      </div>

      <div className="container">
        {/* Smart Contracts */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">1. Smart Contract Development</h4>
            <p>
              We write, test, and deploy highly secure and efficient smart contracts on Ethereum, Binance Smart Chain, and other EVM-compatible networks. Capyngen ensures that your Web3 infrastructure is dependable and tamper-proof.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/smart-contract.png" alt="Smart Contracts" className="img-fluid rounded" />
          </div>
        </div>

        {/* dApps */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h4 className="fw-bold">2. Decentralized App (dApp) Development</h4>
            <p>
              We create intuitive, scalable, and feature-rich decentralized applications (dApps) that run seamlessly on blockchain platforms. Capyngen focuses on usability, scalability, and on-chain/off-chain integration.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/dapp-development.png" alt="dApp Development" className="img-fluid rounded" />
          </div>
        </div>

        {/* NFT Solutions */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">3. NFT Marketplace & Token Development</h4>
            <p>
              Capyngen builds full-featured NFT marketplaces and custom NFT token solutions. We cover everything from minting smart contracts to user-friendly frontends and wallet integrations.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/nft-marketplace.png" alt="NFT Marketplace" className="img-fluid rounded" />
          </div>
        </div>

        {/* Wallet Integration */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h4 className="fw-bold">4. Wallet Integration & Web3 Authentication</h4>
            <p>
              We integrate popular wallets like MetaMask, WalletConnect, and Coinbase Wallet. Capyngen simplifies Web3 login and secure user authentication for dApps.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/wallet-integration.png" alt="Wallet Integration" className="img-fluid rounded" />
          </div>
        </div>

        {/* DAO Development */}
        <div className="row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">5. DAO Development</h4>
            <p>
              From governance models to voting protocols, Capyngen helps you establish decentralized autonomous organizations (DAOs) with custom smart contracts and frontends tailored to your community needs.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/dao-development.png" alt="DAO Development" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3Development;