import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import {serviceDetails} from '../data/blogData.js';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = serviceDetails[serviceId];
     
    if (!service) {
      return <div>Service not found</div>;
    }
  

    return (
      <div className="pt-14">
        {/* Hero Section with Gradient Background */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-[400px] -mt-24">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <Link 
              to="/" 
              className="inline-flex items-center text-white hover:text-gray-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Ana Sayfaya Dön
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Profesyonel {service.title} hizmetimiz ile işletmenizin ihtiyaçlarına özel çözümler sunuyoruz.
            </p>
          </div>
        </div>
  
        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Service Image */}
            <div className="relative h-72 md:h-96">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
  
            {/* Service Description */}
            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                {service.description.split('\n\n').map((paragraph, index) => {
                  // Check if paragraph is a list item
                  if (paragraph.trim().startsWith('-')) {
                    return (
                      <ul key={index} className="list-disc pl-4 mb-4 text-gray-700">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="mb-2">{item.replace('-', '').trim()}</li>
                        ))}
                      </ul>
                    );
                  }
                  // Check if paragraph is a numbered section
                  else if (/^\d+\./.test(paragraph.trim())) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                        {paragraph}
                      </h3>
                    );
                  }
                  // Regular paragraph
                  return (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
  
        {/* Call to Action Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hemen Bizimle İletişime Geçin
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Profesyonel {service.title} hizmetimiz hakkında detaylı bilgi almak için bizi arayın
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="tel:+1234567890"
                className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors duration-300 inline-flex items-center"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceDetail;