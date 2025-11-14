import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router"

export default function CategoryPage() {
    const { id } = useParams()
    const [category, setCategory] = useState()
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getCategory() {
            const resp = await fetch(`http://localhost:3333/categories/${id}`)
            const data = await resp.json()
            setCategory(data.category)
            setProducts(data.data || [])
        }
        getCategory()
    }, [id])

    return (
        <div>
            {
                category && (
                    <div className="p-4">
                        <h1 className="text-2xl font-bold mb-6">{category.title}</h1>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map(product => (
                                <NavLink
                                    key={product.id}
                                    to={`/products/${product.id}`}
                                >
                                    <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                        <div className="relative">
                                            <img
                                                className="w-full h-48 object-cover"
                                                src={`http://localhost:3333${product.image}`}
                                                alt={product.title}
                                            />
                                            <button className="absolute bottom-2 left-2
                                         bg-green-500 hover:bg-black text-white px-4 py-2 rounded text-sm font-medium">
                                                Add to cart
                                            </button>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-800 mb-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-lg font-bold text-gray-900">
                                                ${product.price}
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}

                        </div>
                    </div>
                )
            }
        </div>
    )
}