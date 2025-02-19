import {useState} from 'react';
import { Truck, Clock, Shield, Phone, CheckCircle2, Package, Bike, MapPin, ArrowDown, Timer, Zap, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom'; // <-- Added this line

import Lottie from 'react-lottie';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import BlogPosts from '../components/Services.jsx';
import { Fab } from '@mui/material'; // FAB butonunu içe aktaralım
import PhoneIcon from '@mui/icons-material/Phone'; // Telefon simgesi
import deliveryAnimation from '../assets/animations/araba.json';
import banneranimate from '../assets/animations/banneranimate.json'
import mapAnimation from '../assets/animations/motor.json';

const Home = () => {
  const phoneNumber = "905464205366"; // Telefon numaranız

  const message = "Merhaba, kurye hizmeti hakkında bilgi almak istiyorum?"; // Başlangıç mesajı
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`; // Telefon aramasını başlatmak için
  };
  const bannerLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: banneranimate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
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
    <div  id='home' className="pt-12">
      {/* Hero Section */}
      <div className="relative mt-14 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-[650px]">
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


      {/* Delivery Times Section */}
      <div className="py-20 mt-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Gönderi Seçenekleri</h2>
            <p className="mt-4 text-lg text-gray-600">Size en uygun teslimat seçeneğini seçin</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VIP Kurye */}
            <div className="relative bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">VIP Kurye</h3>
                <div className="text-4xl font-bold text-red-600 mb-4">60 dk</div>
                <p className="text-gray-600">İstanbul içi ekspres VIP teslimat</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Öncelikli Teslimat</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Özel Kurye</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ekspres Kurye */}
            <div className="relative bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ekspres Kurye</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">90 dk</div>
                <p className="text-gray-600">İstanbul içi hızlı teslimat</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Hızlı Teslimat</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Güvenilir</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Normal Kurye */}
            <div className="relative bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Timer className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Normal Kurye</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">120 dk</div>
                <p className="text-gray-600">İstanbul içi standart teslimat</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Ekonomik</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Güvenilir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section Arrow */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-4">Detaylı bilgi ve fiyatlandırma için bize ulaşın</p>
            <Link to="/contact" className="inline-flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors">
              <span className="mb-2">İletişime Geç</span>
              <ArrowDown className="h-8 w-8 animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    
      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-6">
                <Clock className="h-5 w-5 mr-2" />
                7/24 Hizmet
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Her An Yanınızdayız, 7/24 Hızlı ve Güvenilir Kurye Hizmeti!
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Acil ve önemli gönderilerinizi güvenle teslim etmek için Her An Kurye olarak her zaman yanınızdayız. 
                  İster motorlu kurye ile hızlı teslimatlar, ister araçlı kurye ile büyük ve hacimli gönderileriniz için çözüm sunuyoruz. 
                  Öncelikli gönderi seçeneklerimizle, zamanın çok değerli olduğu durumlarda sizlere üstün hizmet veriyoruz.
                </p>
                <p>
                  Profesyonel ve deneyimli ekibimiz, her türlü teslimat ihtiyacınıza özel çözümlerle, 
                  gönderilerinizi zamanında ve emniyetle yerine ulaştırır. İşinizi ve taleplerinizi anlayarak, 
                  hızlı, güvenilir ve uygun fiyatlı kurye çözümleri sunuyoruz.
                </p>
                <p>
                  İster acil teslimat, ister planlı gönderi olsun, her türlü ihtiyacınıza uygun kurye hizmeti için 
                  bize güvenebilirsiniz. Bizimle iletişime geçin, her an yanınızda olalım!
                </p>
              </div>
          {/*   <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Hemen Bizi Arayın
                </button>
                <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Detaylı Bilgi
                </button>
              </div>*/}
            </div>

            {/* Animation Column */}
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-red-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10">
                  <div className="w-full h-96">
                    <Lottie 
                      options={bannerLottieOptions}
                      height={384}
                      width="100%"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Her An Kurye</h3>
                    <p className="text-gray-600">Güvenilir Teslimat Çözümleri</p>
                  </div>
                </div>
              </div>
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
