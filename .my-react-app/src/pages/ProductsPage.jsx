// // ALL_PRODUCTS
// // src/components/ui/AllProducts/AllProducts.jsx

// // src/components/ui/AllProducts/AllProducts.jsx

// import React, { useEffect, useState } from 'react';

// function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:3333/products/all');
//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//         const data = await response.json();
//         // Защита: если сервер вернул { products: [...] }, а не массив
//         const productList = Array.isArray(data) ? data : (data.products || []);
//         setProducts(productList);
//       } catch (err) {
//         setError('Не удалось загрузить товары. Убедитесь, что бэкенд запущен.');
//         console.error('Ошибка загрузки товаров:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div style={{ padding: '20px', fontSize: '18px' }}>Загрузка товаров...</div>;
//   }

//   if (error) {
//     return <div style={{ color: 'red', padding: '20px' }}>{error}</div>;
//   }

//   // Доп. защита: убедимся, что products — массив
//   if (!Array.isArray(products)) {
//     return <div style={{ color: 'orange', padding: '20px' }}> Некорректный формат данных. products не является массивом.</div>;
//   }

//   return (
//     <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
//       <h2>All products</h2>

//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
//         {products.map((product) => {
          
//           const name = product?.name ?? 'Без названия';
//           const image = product?.image ?? 'placeholder.png';
//           const price = product?.price ?? 0;
//           const originalPrice = product?.original_price ?? price;
//           const discount = product?.discount;

//           return (
//             <div
//               key={product.id || Math.random()} // fallback для id (лучше — исправить бэкенд)
//               style={{
//                 border: '1px solid #ddd',
//                 borderRadius: '8px',
//                 overflow: 'hidden',
//                 boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//               }}
//             >
//               {/* Изображение */}
//               <div style={{ position: 'relative' }}>
//                 <img
//                   src={`http://localhost:3333/product_img/${image}`}
//                   alt={name}
//                   style={{
//                     width: '100%',
//                     height: '180px',
//                     objectFit: 'cover',
//                   }}
//                   loading="lazy"
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/250x180?text=No+Image';
//                   }}
//                 />
//                 {/* Скидка */}
//                 {discount && (
//                   <span
//                     style={{
//                       position: 'absolute',
//                       top: '10px',
//                       right: '10px',
//                       backgroundColor: 'red',
//                       color: 'white',
//                       padding: '4px 8px',
//                       borderRadius: '4px',
//                       fontWeight: 'bold',
//                       fontSize: '14px',
//                     }}
//                   >
//                     -{discount}%
//                   </span>
//                 )}
//               </div>

//               {/* Название */}
//               <h3
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   padding: '10px',
//                   margin: 0,
//                   wordBreak: 'break-word',
//                 }}
//               >
//                 {name.length > 20
//                   ? name.substring(0, 20) + '...'
//                   : name}
//               </h3>

//               {/* Цена */}
//               <div style={{ padding: '0 10px 10px' }}>
//                 {discount ? (
//                   <>
//                     <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#e74c3c' }}>
//                       ${price}
//                     </span>
//                     <span
//                       style={{
//                         textDecoration: 'line-through',
//                         color: '#777',
//                         marginLeft: '8px',
//                         fontSize: '14px',
//                       }}
//                     >
//                       ${originalPrice}
//                     </span>
//                   </>
//                 ) : (
//                   <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
//                     ${price}
//                   </span>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ProductsPage;