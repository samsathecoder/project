import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const phoneNumber = "905464205366"; // Telefon numaranız

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`; // Telefon aramasını başlatmak için
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">Anında Teslim Kurye</span>
            </div>
            <p className="text-gray-400">Teslimatlarınız için hızlı ve güvenilir taşımacalığın adresi.</p>
           
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-red-600">Ana Sayfa</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-red-600">Hakkımızda</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-red-600">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim bilgilerimiz</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +90 546 420 53 66
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                anindateslimkurye@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Istanbul, Türkiye
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Çalışma Saatlerimiz</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Pazartesi - Cuma: 24/7</li>
              <li>Cumartesi: 08/20</li>
              <li>Pazar: 08/20</li>
            </ul>
            <button onClick={handleCall} className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Hemen Ara
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anında Teslim Kurye. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;