// Import required icons and components
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  // List of Istanbul districts (example list)
  const districts = [
    "Adalar", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Beşiktaş", "Beylikdüzü", "Beyoğlu",
    "Kadıköy", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sarıyer", "Silivri", "Şişli", "Zeytinburnu"
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hizmet Bölgelerimiz</h2>
          <p className="text-lg text-gray-600">İstanbul'un her ilçesine hızlı ve güvenilir kurye hizmeti sunuyoruz.</p>
        </div>
        
        {/* Card Container */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {districts.map((district, index) => (
              <div key={index} className="flex justify-center items-center bg-blue-600 text-white text-sm py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
                <MapPin className="mr-2" />
                {district}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
