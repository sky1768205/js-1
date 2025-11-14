export default function DiscontOrder() {
    // ghjk
    return (
        <div className="bg-green-700 p-1 rounded-lg  text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">5% off on the first order</h2>
            <div className="flex flex-col md:flex-row items-center justify:between gap-8 max-w-6xl mx-auto">

                <div>
                    <img
                        src="/public/image-20.png"

                        className="w-full max-w-md h-auto rounded-lg"
                    />
                </div>


                <div className="flex-gro bg-white text-gray-800 p-6 rounded-lg shadow-md">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <button className="w-full bg-green-500 text-white py-3 rounded font-semibold hover:bg-green-600 transition-colors">
                            Get a discount
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}