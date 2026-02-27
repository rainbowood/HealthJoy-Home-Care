import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { GetStarted } from './components/GetStarted';
import { Caregivers } from './components/Caregivers';
import { Contact } from './components/Contact';
import { Compliance } from './components/Compliance';
import { Links } from './components/Links';
import { SupportAtHome } from './components/SupportAtHome';
import { Careers } from './components/Careers';
import { ApplyNow } from './components/ApplyNow';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { AnimatePresence, motion } from 'motion/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/get-started" element={<PageWrapper><GetStarted /></PageWrapper>} />
              <Route path="/caregivers" element={<PageWrapper><Caregivers /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/compliance" element={<PageWrapper><Compliance /></PageWrapper>} />
              <Route path="/links" element={<PageWrapper><Links /></PageWrapper>} />
              <Route path="/support-at-home" element={<PageWrapper><SupportAtHome /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
          <Route path="/apply" element={<PageWrapper><ApplyNow /></PageWrapper>} />
              <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
              <Route path="/terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
