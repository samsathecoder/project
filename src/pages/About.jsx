import React, {useEffect} from 'react';
import { CheckCircle2, Users, Lightbulb, Target ,Truck,Clock,Shield} from 'lucide-react';

const About = () => {

     useEffect(() => {
        // Sayfa yüklendiğinde en üst kısma kaydır
        window.scrollTo(0,0);
      }, []);
    
  return (
    <div className="pt-14">
      {/* Hero Section */}
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
              <Users className="h-6 w-6 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              2015'dan beri İstanbul'un her köşesinde güvenilir ve hızlı kurye hizmeti sunuyoruz.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <CheckCircle2 className="h-5 w-5 text-blue-200 mr-3" />
                <span className="text-blue-100">10+ Yıllık Deneyim</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <Target className="h-5 w-5 text-blue-200 mr-3" />
                <span className="text-blue-100">%100 Müşteri Memnuniyeti</span>
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

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Her An Yanınızdayız, 7/24 Hızlı ve Güvenilir Kurye Hizmeti!
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Acil ve önemli gönderilerinizi güvenle teslim etmek için Anında Teslimat Kurye olarak her zaman yanınızdayız. 
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
      {/* Values Section 
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Güvenilirlik</h3>
              <p className="text-gray-600 text-center">
                Her teslimatı güvenle ve zamanında gerçekleştiriyoruz.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">İnovasyon</h3>
              <p className="text-gray-600 text-center">
                Sürekli gelişiyor ve yenilikçi çözümler üretiyoruz.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Müşteri Odaklılık</h3>
              <p className="text-gray-600 text-center">
                Müşteri memnuniyeti bizim en büyük önceliğimiz.
              </p>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default About;