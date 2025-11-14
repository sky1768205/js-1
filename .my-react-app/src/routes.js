import { createBrowserRouter } from "react-router";

import MainLayout from "./components/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoriesPage from "./pages/CstegoriesPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";



export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'categories',

                Component: CategoriesPage

            },
            {
                path:'productspage',
                Component: ProductsPage
            },
        ]
    }
]);