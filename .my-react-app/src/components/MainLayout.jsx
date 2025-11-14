import { NavLink, Outlet } from "react-router";
import { CartContext } from "../stores";
import { useState } from "react";

export default function MainLayout() {

    const [cart, setCart] = useState([])
    return (

        <CartContext value={[cart, setCart]}>
            <div className="container mx-auto">
                <header className="flex items-center py-4 px-6">
                    <NavLink to="/" className="mr-8">
                        <img src="/public/logo-2.svg" alt="" className="w-10 h-10" />
                    </NavLink>

                    <div className="flex items-center gap-x-8 mx-auto">
                        <NavLink to="/" className="text-gray-800 hover:text-green-600">Main Page</NavLink>
                        <NavLink to="/categories" className="text-gray-800 hover:text-green-600">Categories</NavLink>
                        <NavLink to="/products" className="text-gray-800 hover:text-green-600">All Products</NavLink>
                        <NavLink to="/sales" className="text-gray-800 hover:text-green-600">All Sales</NavLink>
                    </div>

                    <NavLink to="/cart" className="ml-auto relative">
                        <img src="/public/icon.svg" alt="" className="w-6 h-6" />
                        <div className="absolute -top-2 -right-2 text-[10px] bg-green-600 w-4 h-4 flex justify-center items-center text-white rounded-full">
                            {cart.length}
                        </div>
                    </NavLink>
                </header>

                <main>
                    <Outlet />
                </main>

                <footer className="bg-white text-black p-8">
                    <h1 className="font-bold text-4xl p-8">Contact</h1>
                    <div className="max-w-6xl mx-auto">
                        {/* Верхняя часть с 4 секциями */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
                            {/* Телефон */}
                            <div className=" bg-gray-100 p-8 rounded-md">
                                <h3 className="font-semibold mb-4">Phone</h3>
                                <p>+7 (499) 350-66-04</p>
                            </div>

                            {/* Социальные сети */}
                            <div className=" bg-gray-100 p-8 rounded-md">
                                <h3 className="font-semibold mb-4">Social networks</h3>
                                <div className="flex gap-4">
                                    <img src="/public/ic-instagram.svg" alt="/" className="w-6 h-6" />
                                    <img src="/public/ic-whatsapp.svg" alt="/" className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Адрес */}
                            <div className=" bg-gray-100 p-8 rounded-md">
                                <h3 className="font-semibold mb-4">Address</h3>
                                <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
                            </div>

                            {/* Часы работы */}
                            <div className=" bg-gray-100 p-8 rounded-md">
                                <h3 className="font-semibold mb-4">Working Hours</h3>
                                <p>24 hours a day</p>
                            </div>
                        </div>

                        {/* Карта Яндекс */}
                        {/* Карта Яндекс */}
                        <div className="mt-8">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755826&amp;z=16&amp;pt=37.617635%2C55.755826%2Ccomma&amp;mode=search&amp;text=Dubininskaya%20Ulitsa%2C%2096%2C%20Moscow%2C%20Russia%2C%20115093"
                                width="100%"
                                height="400"
                                frameBorder="0"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </footer>
            </div>
        </CartContext>
    )
}