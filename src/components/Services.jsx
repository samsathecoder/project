// src/components/BlogPosts.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşeni ile yönlendirme yapacağız
import  '../css/blogpost.css';

import {serviceDetails} from '../data/blogData.js'


const BlogPosts = () => { 
  return (
    <div id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Hizmetlerimiz</h2>
          <p className="mt-4 text-lg text-gray-600">Profesyonel kurye çözümlerimiz ile yanınızdayız</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service) => (
            <Link key={service.id} to={`/service/${service.id}`} className="card">  {/* Burada className olarak styles.card yerine direkt className="card" kullanın */}
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-image" 
                />
              </div>
              <div className="p-6">
                <h3 className="card-title mb-3">
                  {service.title}
                </h3>
                <p className="card-description">{service.description}</p>
                <div className="card-button mt-4">
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
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
