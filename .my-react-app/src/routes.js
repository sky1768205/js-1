import { createBrowserRouter } from "react-router";

import MainLayout from "./components/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoriesPage from "./pages/CstegoriesPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import NotFound from "./pages/NotFound.jsx";



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
            {
                path:'products',
                Component: ProductsPage
            },
            {
                path:'products/:id',
                Component : ProductPage
            },
            {
                path:"*",
                Component: NotFound
            }
        ]
    }
]);