import {useState} from 'react';
import { Truck, Clock, Shield, Phone } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Lottie from 'react-lottie';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import BlogPosts from '../components/Services.jsx';
import { Fab } from '@mui/material'; // FAB butonunu içe aktaralım
import PhoneIcon from '@mui/icons-material/Phone'; // Telefon simgesi
import deliveryAnimation from '../assets/animations/araba.json';
import mapAnimation from '../assets/animations/motor.json';
import Contact from './Contact.jsx';

const Home = () => {
  const phoneNumber = "905464205366"; // Telefon numaranız

  const message = "Merhaba, kurye hizmeti hakkında bilgi almak istiyorum?"; // Başlangıç mesajı
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`; // Telefon aramasını başlatmak için
  };
  // URL encode işlemi
  const deliveryLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: deliveryAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const mapLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: mapAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [open, setOpen] = useState(false);

  // Modal'ı açmak için fonksiyon
  const handleOpen = () => {
    setOpen(true);
  };

  // Modal'ı kapatmak için fonksiyon
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div  id='home' className="pt-18">
      {/* Hero Section */}
      <div className="relative mt-14 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-16">
            {/* Left Column - Text */}
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Anında Teslim Kurye
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                7/24 Özel Kurye Hizmetiyle paketleriniz güvenle alıcısında.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button onClick={handleCall} className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 flex items-center">
                  <Phone className="mr-2" />
                  Hemen ara
                </button>
                <button onClick={handleOpen}  className="bg-white text-red-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
                  Teklif Al
                </button>
              </div>
            </div>

            {/* Middle Column - Circle Animation */}
            <div className="relative">
              {/* Diagonal Divider Line */}
              <div className="absolute left-1/2 top-1/2 w-50 md:w-[100%] h-1 bg-gradient-to-r from-blue-400 to-blue-300 transform -rotate-45 z-50"></div>
              
              <div className="relative z-20">
                <div className="w-64 h-64 mx-auto rounded-full bg-white/10 backdrop-blur-sm p-4 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Lottie options={mapLottieOptions} />
                  </div>
                </div>
                <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">Motorlu kurye </h3>
                  <p className="text-gray-300 mt-2">Hafif ve hızlı ulaşması gereken teslimatlar için motorlu kuryeler</p>
                  </div>
              </div>
            </div>

            {/* Right Column - Circle Animation */}
            <div className="relative mt-16 md:mt-32">
              <div className="relative z-20">
                <div className="w-64 h-64 mx-auto rounded-full bg-white/10 backdrop-blur-sm p-4 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Lottie options={deliveryLottieOptions} />
                  </div>
                </div>
                <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">Araçlı kurye</h3>
                  <p className="text-gray-300 mt-2">ağır paketleriniz için araçlı kuryeler</p>
           
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600">Belirttiğiniz saat aralığında teslim güvencesi</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">7/24 Servis</h3>
              <p className="text-gray-600">İstediğiniz zaman kurye çağırın</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenli Teslimat</h3>
              <p className="text-gray-600">Paketleriniz özenle ve tecrübeli kuryelerle taşınıyor.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Neden Bizi Seçmelisiniz?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Profesyonel çözümler</h3>
                    <p className="text-gray-600">Deneyimli araçlı ve motorlu araç sürücüleri</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Hızlı teslimat</h3>
                    <p className="text-gray-600">Belirtilen zamanda teslimat güvencesi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Uygun Fiyatlar</h3>
                    <p className="text-gray-600">Profesyonel çözümlere makul fiyatlar</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8"
                alt="Delivery Service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>


      <BlogPosts id="services" />


      <div>
      <div>
      
      {/* FAB butonu */}
      <Fab
        color="primary"
        aria-label="call"
        onClick={handleCall}
        style={{
          position: 'fixed',
          bottom: '30px',  // Sayfanın alt kısmına mesafe
          left: '20px',   // Sayfanın sağ kısmına mesafe
          zIndex: 1000     // Üstte görünmesi için
        }}
      >
        <PhoneIcon />
      </Fab>
    </div>
      <FloatingWhatsApp
        phoneNumber="905464205366" // WhatsApp numaranız (uluslararası formatta)
        accountName="Anında teslim kurye" // Hesap adı (görünür isim)
        statusMessage='En hızlı şekilde geri dönüş yapacağız.'
        message={message} // Başlangıç mesajı
        chatMessage="Merhaba kurye hizmetimiz hakkında bilgi almak için bize yazın, en kısa sürede geri dönüş yapacağız." // Buton tıklanınca mesaj
        title="Tıklayın ve bizimle İletişime Geçin" // Butonun üzerine geldiğinde gösterilecek başlık
        allowClickAway={true} // Butona tıklanınca buton kaybolur mu? Varsayılan true
        avatar="https://your-avatar-image-url.com" // Avatar resmi
        notification={true} // Bildirim simgesi gösterilsin mi? Varsayılan true
        placeholder='Mesajınızı yazınız..'     />
    </div>
      {/* Call to Action */}
      <div className="bg-red-600 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Hazırsanız yola çıkalım?</h2>
          <p className="text-xl mb-8">Hizmetlerimizden yararlanmak ve bilgi almak için hemen iletişim formumuzu doldurun veya bizi arayın.</p>
          
          {/* Flex Container for Buttons */}
          <div className="flex justify-center gap-4 mb-8">  {/* gap-4 is used for spacing between buttons */}
            <button         onClick={handleCall}
 className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 flex items-center justify-center">
              <Phone className="mr-2"  /> 
              Hemen ara
            </button>
            <button className="bg-white text-red-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 flex items-center justify-center">
            <Link to="/contact">İletişim Formu</Link>            </button>
          </div>
        </div>
      </div>
  
<Dialog open={open} onClose={handleClose}>
<DialogTitle>Uyarı</DialogTitle>
<DialogContent>
  <p>Şuan için sayfamızdan anlık olarak fiyat teklifi verememekteyiz fiyat almak
    için sayfamızdaki telefon veya whatsapp bağlantıları ile göndermek istediğiniz 
    kargo bilgilerini paylaşarak bilgi alabilirsiniz!</p>
</DialogContent>
<DialogActions>
  <Button onClick={handleClose} color="primary">
    Kapat
  </Button>
</DialogActions>
</Dialog>  </div>
    
  );
  
};
export default Home;
