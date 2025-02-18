import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPosts from './components/Services.jsx'; 
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ServiceDetail from './pages/ServiceSingle';
function App() {
  
const [activeComponent, setActiveComponent] = useState('home');

const handleNavClick = (componentName) => {
  setActiveComponent(componentName);
  const element = document.getElementById(componentName);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onNavClick={handleNavClick} />
        {activeComponent === 'services' && <BlogPosts />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;