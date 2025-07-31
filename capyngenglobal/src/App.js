// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar'; // Ensure correct path
import Landing from './components/Landing';
import WelcomeMessage from './components/WelcomeMessage';
import IndustriesPage from './components/IndustriesPage';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import Introduction from './components/Introduction';
import ApplicationDevelopment from './components/services/applications-development/applications-development';
import WebDevelopment from './components/services/web-development/web-development';
import CustomAiSolution from './components/services/custom-ai-solution/custom-ai-solution';
import UIUXDevelopment from './components/services/ui-ux-development/ui-ux-development';
import EcommerceDevelopment from './components/services/ecommerce-development/ecommerce-development';
import BlockchainDevelopment from './components/services/blockchain-development/blockchain-development';
import DevopsSolutions from './components/services/devops-solutions/devops-solutions';
import CrmManagementSoftware from './components/services/crm-management-software/crm-management-software';
import ApplicationSolutions from './components/services/application-solutions/application-solutions';
import Consulting from './components/services/consulting/consulting';
import DataAnalytics from './components/services/data-analytics/data-analytics';
import EnterpriseSolution from './components/services/enterprise-solution/enterprise-solution';
import NetworkSolutions from './components/services/network-solutions-services/network-solutions-services';
import Cybersecurity from './components/services/cybersecurity/cybersecurity';
import ArtificialIntelligence from './components/services/artificial-intelligence/artificial-intelligence';
import SeoSmm from './components/services/seo-smm/seo-smm';
import Services from './components/services/ServicesPage';
import BankingIndustryPage from './components/industries/banking/banking';
import CommunicationMedia from './components/industries/communication-media/communication-media';
import Education from './components/industries/education/education';
import HealthCare from './components/industries/healthcare-fitness/healthcare-fitness';
import OilGas from './components/industries/oil-gas/oil-gas';
import Manufacturing from './components/industries/manufacturing/manufacturing';
import Retail from './components/industries/retail/retail';
import RealState from './components/industries/real-estate/real-estate';
import ConsumerPackage from './components/industries/consumer-packaged-goods/consumer-packaged-goods';
import EnergyResources from './components/industries/energy-resources-utilities/energy-resources-utilities';
import HighTech from './components/industries/high-tech/high-tech';
import TravelLogistics from './components/industries/travel-logistics/travel-logistics';
import Gaming from './components/industries/gaming/gaming';
import PublicService from './components/industries/public-service/public-service';
import Insurance from './components/industries/insurance/insurance';
import Automotive from './components/industries/automotive/automotive';
import OnDemand from './components/industries/on-demand/on-demand';
import Ecommerce from './components/industries/ecommerce/ecommerce';
import LifeScience from './components/industries/life-science/life-science';
import CapyngenGlobalPage from './components/overview/capyngen-global/capyngen-global';
import CustomerExperience from './components/overview/customer-experience/customer-experience';
import BlockchainDevelopmentPage from './components/enterprise-and-ai/blockchain-development/blockchain-development';
import MetaverseDevelopmentPage from './components/enterprise-and-ai/metaverse-development/metaverse-development';
import Web3DevelopmentPage from './components/enterprise-and-ai/web3-development/web3-development';
import About from './components/company-overview/about-us/about-us';

import ContactUs from './components/contact-us';
import Footer from './components/Footer';
import CompanyOverview from './components/company-overview/company-overview';

import CursorTrail from './components/CursorTrail';

// Ensure correct path

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowIntro(false);
    }
  }, [location.pathname]);

  if (showIntro && location.pathname === '/') {
    return <Introduction onComplete={() => setShowIntro(false)} />;
  }

  return (
    <>
      <Navbar /> 
      <CursorTrail />
<div style={{ paddingTop: '100px' }}>
      {/* All page content, including Routes and Footer, will scroll below the Navbar */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <WelcomeMessage />
              <IndustriesPage />
              <Stats />
              <WhyChoose />
              {/* Footer will be rendered after WhyChoose and scroll with the page */}
            </>
          }
        />
        {/* All other routes */}
        <Route path="/services/applications-development" element={<ApplicationDevelopment />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/custom-ai-solution" element={<CustomAiSolution />} />
        <Route path="/services/ui-ux-development" element={<UIUXDevelopment />} />
        <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
        <Route path="/services/seo-smm" element={<SeoSmm />} />
        <Route path="/services/devops-solutions" element={<DevopsSolutions />} />
        <Route path="/services/crm-management-software" element={<CrmManagementSoftware />} />
        <Route path="/services/application-solutions" element={<ApplicationSolutions />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/enterprise-solution" element={<EnterpriseSolution />} />
        <Route path="/services/network-solutions-services" element={<NetworkSolutions />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />

        <Route path="/services" element={<Services />} />

        <Route path="/industries/banking" element={<BankingIndustryPage />} />
        <Route path="/industries/communication-media" element={<CommunicationMedia />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/healthcare-fitness" element={<HealthCare />} />
        <Route path="/industries/oil-gas" element={<OilGas />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/retail" element={<Retail />} />
        <Route path="/industries/real-estate" element={<RealState />} />
        <Route path="/industries/consumer-packaged-goods" element={<ConsumerPackage />} />
        <Route path="/industries/energy-resources-utilities" element={<EnergyResources />} />
        <Route path="/industries/travel-logistics" element={<TravelLogistics />} />
        <Route path="/industries/high-tech" element={<HighTech />} />
        <Route path="/industries/gaming" element={<Gaming />} />
        <Route path="/industries/public-service" element={<PublicService />} />
        <Route path="/industries/insurance" element={<Insurance />} />
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/on-demand" element={<OnDemand />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/life-science" element={<LifeScience />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/company-overview" element={<CompanyOverview />} />
        <Route path="/overview/capyngen-global" element={<CapyngenGlobalPage />} />
        <Route path="/overview/customer-experience" element={<CustomerExperience />} />
        <Route path="/enterprise-and-ai/blockchain-development" element={<BlockchainDevelopmentPage />} />
        <Route path="/enterprise-and-ai/metaverse-development" element={<MetaverseDevelopmentPage/>}/>
        <Route path="/enterprise-and-ai/web3-development" element={<Web3DevelopmentPage/>}/>
        <Route path="/company-overview/about-us" element={<About/>}/>


      </Routes>
      <Footer /> 
      </div>{/* This will scroll with the page content */}
    </>
  );
}

export default App;