import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Layout from './pages/layout/layout';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home/home';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about_me" element={<RebecaComponent/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact_us" element={<Contact_Component/>} />  */}
      </Routes>
    </Layout>
  </Router>
);

reportWebVitals();
