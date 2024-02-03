import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import Chatbot from './components/Chatbot';
import CaseForm from './pages/CaseForm';
import LabDataForm from './pages/LabDataForm';
import Dashboard from './pages/Dashboard';
import QuotePage from './pages/QuotePage';
import { UserProvider } from './contexts/UserContext';
import PricingComponent from './pages/PricingComponent';
import PaymentPage from './pages/PaymentPage';
function App() {
  return (
    <UserProvider>

    
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        
        <Route path="/LabDataForm" element={<LabDataForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CaseForm" element={<CaseForm />} />
        <Route path="/QuotePage" element={<QuotePage />} />
        <Route path="/PricingComponent" element={<PricingComponent />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
      </Routes>
      <Footer/>
      <Chatbot/>
      
    </HashRouter>
    </UserProvider>
  );
}

export default App;
