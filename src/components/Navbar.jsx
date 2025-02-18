import React, { useState, useEffect } from 'react';
import { Menu, X, Bike, Phone } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom'; // react-router-dom Link importu
import { Link } from 'react-router-dom'; // <-- Added this line
import { Link as ScrollLink } from 'react-scroll'; 
import waveAnimation from '../assets/animations/wave-animation.json';
import WaveEffect from '../assets/waveeffect.jsx';  // Dalga Efektini İçe Aktar
import { useLocation } from 'react-router-dom'; // React Router'dan location hook'u

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeComponent, setActiveComponent] = useState('home'); // Bu satırı ekledik
  const location = useLocation(); // Şu anki URL'yi alır
  const showWaveEffect = location.pathname === '/'; // sadece '/home' sayfasında göster
  
  const phoneNumber = "905464205366"; // Telefon numaranız

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`; // Telefon aramasını başlatmak için
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <nav className="nav h-14 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Bike className="h-6 w-6 text-white" />
              <span className="ml-2 text-lg font-bold text-white">Anında Teslim Kurye</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <RouterLink to="/" className="text-white hover:text-gray-200 transition-colors">Ana Sayfa</RouterLink>
              <RouterLink to="/about" className="text-white hover:text-gray-200 transition-colors">Hakkımızda</RouterLink>
              {showWaveEffect && (
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  style={{ color: 'white', cursor: 'pointer' }}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  Hizmetler
                </ScrollLink>
              )}
              <RouterLink to="/contact" className="text-white hover:text-gray-200 transition-colors">İletişim</RouterLink>
              <button 
                onClick={handleCall}
                className="flex items-center bg-red-600 text-white px-4 py-1.5 rounded-full hover:bg-red-700 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">Hemen Ara</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-white hover:text-gray-200 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Lottie Animation Container */}
      {!isScrolled && showWaveEffect && (
        <div className="bg-transparent relative z-50">
          <div className="h-40 overflow-hidden">
            <WaveEffect height={100} width="100%" />
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300" 
            onClick={() => setIsSidebarOpen(false)} 
          />
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300">
            <div className="p-4">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="mt-8 space-y-4">
                <Link to="/" className="block text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                <Link to="/about" className="block text-gray-700 hover:text-blue-600 transition-colors">Hakkımızda</Link>
                <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition-colors">İletişim</Link>
                <a href="tel:0546 420 53 66" className="flex items-center text-red-600 font-medium hover:text-red-700 transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
