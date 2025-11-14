import { useEffect, useState } from "react"

export default function Discont() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const resp = await fetch('http://localhost:3333/products/all')
            if (resp.ok) {
                const data = await resp.json()

                setProducts(data.slice(0, 4))
            }
        }
        getProducts()
    }, [])




    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-6">Sale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-4 shadow-sm">



                        <div className="bg-gray-100 h-48 mb-4 rounded flex items-center justify-center">
                            <img

                                src={`http://localhost:3333${product.image}`}

                                className="w-full h-full object-cover rounded"
                            />
                        </div>


                        <h3 className="font-semibold text-lg mb-3 h-12 overflow-hidden">
                            {product.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-black
                            -500 font-bold text-xl">
                                ${product.price}
                            </span>
                            <span className="text-gray-400 line-through text-lg">
                                ${Math.round(product.price * 2)}
                            </span>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}