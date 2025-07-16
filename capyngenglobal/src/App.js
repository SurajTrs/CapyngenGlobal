import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import WelcomeMessage from './components/WelcomeMessage';
import Industries from './components/Industries';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <WelcomeMessage/>
      <Industries/>
     <Stats/>
     <WhyChoose/>
    </div>
  );
}

export default App;
