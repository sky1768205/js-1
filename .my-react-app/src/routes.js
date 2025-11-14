import { createBrowserRouter } from "react-router";

import MainLayout from "./components/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoriesPage from "./pages/CstegoriesPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import CartPage from "./pages/CartPage.jsx";



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
                path: 'categories/:id',
                Component: CategoryPage

            },
            {
                path: 'cart',
                Component: CartPage

            },
        ]
    }
]);