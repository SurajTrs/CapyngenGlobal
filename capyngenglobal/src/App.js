import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import WelcomeMessage from './components/WelcomeMessage';
import Industries from './components/Industries';
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <WelcomeMessage />
              <Industries />
              <Stats />
              <WhyChoose />
            </>
          }
        />
         <Route path="/services/applications-development" element={<ApplicationDevelopment />} />
         <Route path="/services/web-development" element ={<WebDevelopment />} />
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
<Route path="/services" element={<Services />} />        {/* Add other routes here */}
      </Routes>
    </>
  );
}

export default App;
