import React from 'react';
import Discont from '../components/Discont';
import DiscontOrder from '../components/DiscontOrder';
import CategoryCard from '../components/CategoryCard';

export default function HomePage() {



    return (
        <div className="bg-white">
            {/* Баннер с заголовком */}
            <section className="relative h-80 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/2DxWtZa.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Amazing Discounts<br />on Garden Products!
                    </h1>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
                        Check out
                    </button>
                </div>
            </section>

            {/* Категории */}
            <section className="py-12 px-4 md:px-8">



                <CategoryCard />


            </section>

            {/* Блок скидки на первый заказ */}

            <DiscontOrder />


            {/* Секция распродажи */}

            <Discont />


        </div>
    );
}