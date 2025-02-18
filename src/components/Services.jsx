// src/components/BlogPosts.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşeni ile yönlendirme yapacağız
const blogServices = [
  {
    id: 'moto-kurye',
    title: 'Moto Kurye',
    image: 'https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d',
    description: 'Motokurye Hizmeti: Hızlı ve Güvenilir Gönderi Teslimatı. İstanbul\'un hızlı tempolu iş dünyasında, zamanın önemi her zamankinden daha fazla hissediliyor.'
  },
  {
    id: 'moto-kurye',
    title: 'Moto Kurye',
    image: 'https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d',
    description: 'Motokurye Hizmeti: Hızlı ve Güvenilir Gönderi Teslimatı. İstanbul\'un hızlı tempolu iş dünyasında, zamanın önemi her zamankinden daha fazla hissediliyor.'
  },  {
    id: 'moto-kurye',
    title: 'Moto Kurye',
    image: 'https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d',
    description: 'Motokurye Hizmeti: Hızlı ve Güvenilir Gönderi Teslimatı. İstanbul\'un hızlı tempolu iş dünyasında, zamanın önemi her zamankinden daha fazla hissediliyor.'
  },
  {
    id: 'eczane-kurye',
    title: 'Eczane Kurye',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88',
    description: 'Eczane Kurye Hizmetleri: Sağlık Ürünlerinizin Hızlı ve Güvenilir Taşımacılığı. Eczane kurye hizmetleri, eczanelerin acil ilaç teslimatı için kritik bir rol oynar.'
  },
  {
    id: 'motor-vale',
    title: 'Motor Vale',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39',
    description: 'Motor Vale Hizmetleri: İstanbul\'un Trafik Sorununu Hafifleten Pratik Çözüm. İstanbul gibi yoğun bir şehirde, park sorunu işletmeler için büyük bir zorluktur.'
  }
];
const BlogPosts = () => {
  return (
    <div id='services' className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Hizmetlerimiz</h2>
          <p className="mt-4 text-lg text-gray-600">Profesyonel kurye çözümlerimiz ile yanınızdayız</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogServices.map((service) => (
              <Link 
                key={service.id} 
                to={`/service/${service.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{service.description}</p>
                  <div 
                    className="inline-flex items-center mt-4 text-red-600 hover:text-red-700 font-medium"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            
      
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
