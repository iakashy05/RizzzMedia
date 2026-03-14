import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PPolicy';
import TermsOfService from './pages/TService';
import NotFound from './pages/NotFound';
import Preloader from './components/ui/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setHasStarted(true), 10);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className={`transition-all duration-700 ease-out ${hasStarted ? 'opacity-100' : 'opacity-0'}`}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;