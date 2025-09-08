import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Layout from './pages/layout/layout';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home/home';
import ContacUs from './pages/contacUs/ContactUs';
import F_A_Q from './pages/faq/faq';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContacUs/>} /> 
        <Route path="/faq" element={<F_A_Q/>} /> 

      </Routes>
    </Layout>
  </Router>
);

reportWebVitals();
