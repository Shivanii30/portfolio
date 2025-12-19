import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
//import MenuPage from './components/MenuPage';
import ProjectsPage from './components/ProjectsPage';
import TimelinePage from './components/TimelinePage';
import CertificationsPage from './components/CertificationsPage';
import ContactPage from './components/ContactPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      {/*  <Route path="/menu" element={<MenuPage />} /> */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;