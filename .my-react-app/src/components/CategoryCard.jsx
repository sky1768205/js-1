import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function CategoryCard() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const resp = await fetch(`http://localhost:3333/categories/all`);
            if (resp.ok) {
                const data = await resp.json();
                setCategories(data);
            }
        }
        getCategories();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <NavLink
                        key={category.id}
                        to={`/categories/${category.id}`}
                        className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-48 w-full">
                            <img
                                src={`http://localhost:3333${category.image}`}
                                alt={category.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                }}
                            />
                        </div>
                        <div className="p-3 text-center">
                            <span className="text-sm font-medium text-gray-800">
                                {category.title}
                            </span>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}