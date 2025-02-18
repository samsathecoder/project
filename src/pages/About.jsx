import React from 'react';
import { CheckCircle2, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
            <p className="text-gray-600 mb-4">
              2010 yılında İstanbul'da kurulan şirketimiz, müşterilerimize en hızlı ve güvenilir kurye hizmetini
              sunma vizyonuyla yola çıktı. Başlangıçta küçük bir ekiple başladığımız bu yolculukta, bugün
              İstanbul'un her köşesinde hizmet veren büyük bir aile haline geldik.
            </p>
            <p className="text-gray-600 mb-4">
              Yıllar içinde edindiğimiz tecrübe ve geliştirdiğimiz teknolojik altyapımız sayesinde,
              müşterilerimize en kaliteli hizmeti sunmaya devam ediyoruz. Motokurye hizmetinden ekspres
              teslimatlarımıza kadar her alanda profesyonel çözümler üretiyoruz.
            </p>
            <p className="text-gray-600">
              Bugün, İstanbul'un en güvenilir kurye şirketlerinden biri olarak, müşterilerimizin
              beklentilerini aşmaya ve sektörde yeni standartlar belirlemeye devam ediyoruz.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Ekibimiz"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
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
      </div>
    </div>
  );
};

export default About;