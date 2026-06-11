import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import FisurIaProject from './pages/FisurIaProject';
import E2eFrameworkProject from './pages/E2eFrameworkProject';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#030712] text-slate-200 overflow-hidden font-sans selection:bg-cyan-500/30">
        {/* Capa de Fondo Dinámica: Orbes Espaciales */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-violet-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[150px]" />
          <div className="absolute top-[30%] left-[50%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/project/fisur-ia" element={<FisurIaProject />} />
              <Route path="/project/e2e-framework" element={<E2eFrameworkProject />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
