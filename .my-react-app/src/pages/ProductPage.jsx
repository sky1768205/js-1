// src/pages/ProductPage.jsx

import { useEffect, useState, useContext } from "react"; 
import { useParams } from "react-router-dom";
import { CartContext } from "../stores"; 


export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useContext(CartContext); 

  
  function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    if (cart.findIndex(element => element.id === product.id) === -1) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  }

  useEffect(() => {
    async function load() {
      const resp = await fetch(`http://localhost:3333/products/all`);
      const data = await resp.json();
      const productData = Array.isArray(data) ? data[0] : data;
      setProduct(productData);
    }
    load();
  }, [id]);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <button
        onClick={() => window.history.back()}
        className="mb-4 text-green-600 hover:text-green-800"
      >
        ← back
      </button>

      {product ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <img
              src={`http://localhost:3333${product.image}`}
              alt={product.title || 'Товар'}
              className="w-full h-96 object-cover rounded-lg"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/500x500?text=No+Image";
              }}
            />
          </div>

          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold mb-2">
              {product.title}
            </h1>

            <div className="text-3xl font-bold mb-4">
              ${product.price}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border border-gray-300 rounded"
              >
                −
              </button>
              <span className="px-3 py-1 border border-gray-300 rounded">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border border-gray-300 rounded"
              >
                +
              </button>
            </div>

            
            <button
              onClick={addToCart} 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            >
              Add to cart
            </button>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 text-center">Загрузка товара...</div>
      )}
    </div>
  );
}