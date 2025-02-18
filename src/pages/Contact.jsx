import React , {useState} from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import  IstanbulMap from '../components/mapcomponent';
const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const istanbulLatLng = [41.0082, 28.9784];
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [responseMessage, setResponseMessage] = useState('');
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        setIsSubmitting(true);
        setResponseMessage('');
    
       const sendEmail = async (name, email, message) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  });

  const data = await response.json();
  if (response.ok) {
    alert('E-posta başarıyla gönderildi!');
  } else {
    alert('E-posta gönderiminde bir hata oluştu');
  }
};
      };


  return (
    <div className="pt-14">
      {/* Contact Header */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-[500px] -mt-24">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
          {/* Decorative Circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-16 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-700/30 rounded-full mb-8 backdrop-blur-sm">
              <Mail className="h-6 w-6 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              İletişim Formu
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Bilgi almak için veya kurye çağırmak için formu doldurabilirsiniz. 
              Ekibimiz hemen sizinle iletişime geçecektir.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <Phone className="h-5 w-5 text-blue-200 mr-3" />
                <span className="text-blue-100">+90 (546) 420-5366</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <Mail className="h-5 w-5 text-blue-200 mr-3" />
                <span className="text-blue-100">anindateslimkurye@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-white" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,56C1120,48,1280,32,1360,24L1440,16L1440,74L1360,74C1280,74,1120,74,960,74C800,74,640,74,480,74C320,74,160,74,80,74L0,74Z"></path>
          </svg>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Bize yazın</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">İsim:</label>
    <input
      name="name"
      type="text"
      value={formData.name}
      onChange={handleInputChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="İsminiz"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      type="email"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="E-mail adresiniz"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj:</label>
    <textarea
      rows={4}
      name="message"
      value={formData.message}
      onChange={handleInputChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Mesajınız"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
    disabled={isSubmitting}
  >
    {isSubmitting ? 'Gönderiliyor...' : 'Formu Gönder'}
  </button>
</form>

            {responseMessage && (
            <p className="mt-4 text-center text-gray-600">{responseMessage}</p>
          )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Adresimiz</h3>
                  <p className="text-gray-600">
                    Merkezi bir konumumuz bulunmamaktadır.<br />
                    Istanbulun her yerinde hizmetinizdeyiz.<br />
                    Istanbul/TÜRKİYE
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Bizi arayın</h3>
                  <p className="text-gray-600">+90 (546) 420-5366</p>
                  <p className="text-gray-600">Pazartesi-Cuma 09-20:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Email Adresimiz</h3>
                  <p className="text-gray-600">anindateslimkurye@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div className="h-64 bg-gray-200 rounded-lg">
              <IstanbulMap /> 
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;