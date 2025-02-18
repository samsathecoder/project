import React from 'react';

const products = [
  {
    id: 1,
    name: "Premium Watch",
    price: "$299",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 2,
    name: "Leather Bag",
    price: "$199",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7"
  },
  {
    id: 3,
    name: "Sunglasses",
    price: "$149",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f"
  },
  {
    id: 4,
    name: "Headphones",
    price: "$249",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select className="px-4 py-2 border rounded-md">
            <option>Category</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Accessories</option>
          </select>
          
          <select className="px-4 py-2 border rounded-md">
            <option>Price Range</option>
            <option>$0 - $100</option>
            <option>$100 - $200</option>
            <option>$200+</option>
          </select>
          
          <select className="px-4 py-2 border rounded-md">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-indigo-600 font-medium mt-1">{product.price}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-md border">Previous</button>
            <button className="px-3 py-1 rounded-md border bg-indigo-600 text-white">1</button>
            <button className="px-3 py-1 rounded-md border">2</button>
            <button className="px-3 py-1 rounded-md border">3</button>
            <button className="px-3 py-1 rounded-md border">Next</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Products;