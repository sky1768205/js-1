import { useEffect, useState } from "react";
import { Link } from "react-router";
export default function ProductsPage() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("All");
  const [pricefrom, setPricefrom] = useState("");
  const [priceto, setPriceto] = useState("");
  const [discont, setDiscont] = useState(false);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("default");


  useEffect(() => {
    async function getProducts() {
      const resp = await fetch("http://localhost:3333/products/all");
      const data = await resp.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  const filtered = products?.filter(product => {
    const price = parseFloat(product.price) || 0;
    const minPrice = parseFloat(pricefrom) || 0;
    const maxPrice = parseFloat(priceto) || Infinity;

    if (price < minPrice || price > maxPrice) return false;
    if (discont && !product.discount) return false;
    if (category !== "All" && product.category !== category) return false;

    return true;
  }) || [];

  function addToCart(product) {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === product.id);
      if (index === -1) {

        return [...prevCart, { ...product, quantity: 1 }];
      } else {

        return prevCart.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  }
  function renderButton(product) {
    const index = cart.findIndex(element => element.id === product.id);

    if (index === -1) {
      return (
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-2 left-2 bg-green-500 hover:bg-black text-white px-4 py-2 rounded text-sm font-medium"
        >
          Add to Cart
        </button>
      );
    } else {
      return (
        <div className="absolute bottom-2 left-2 bg-gray-500 text-white px-4 py-2 rounded text-sm font-medium">
          In Cart: {cart[index].quantity}
        </div>
      );
    }
  }

  return (
    <div className="p-6">

      <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-white flex items-center gap-6">



        <div className="flex items-center gap-3">
          <label className="font-medium text-sm">Price:</label>
          <input
            type="number"
            placeholder="from"
            value={pricefrom}
            onChange={(e) => setPricefrom(e.target.value)}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
          />
          <span className="text-sm">to</span>
          <input
            type="number"
            placeholder="to"
            value={priceto}
            onChange={(e) => setPriceto(e.target.value)}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
          />
        </div>


        <div className="flex items-center gap-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={discont}
              onChange={(e) => setDiscont(e.target.checked)}
              className="w-4 h-4"
            />
            <span>Discounted items</span>
          </label>
          <div className="flex items-center gap-2">
            <label className="text-sm">Sorted:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-sm"
            >
              <option value="default">by default</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </div>
        </div>


        {products && products.some(p => p.category) && (
          <div>
            <label className="mr-2">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded"
            >
              <option value="All">All categories</option>
              {[...new Set(products.map(p => p.category))].map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        )}
      </div>


      {products ? (
        <div>
          <h2 className="text-xl font-bold mb-4">
            ALL_PRODUCTS ({filtered.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(product => (

              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="block border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative mb-3">
                  <img
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title || product.name}
                    className="w-full h-48 object-cover rounded"

                  />
                  {renderButton(product)}
                </div>

                <h3 className="text-sm font-medium mb-2 line-clamp-2">
                  {product.title || product.name}
                </h3>

                <div className="flex items-center justify-between">
                  {product.discount ? (
                    <>
                      <span className="text-lg font-bold text-red-600">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.original_price}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">
                      ${product.price}
                    </span>

                  )}

                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Загрузка...</p>
      )}
    </div>
  );
}