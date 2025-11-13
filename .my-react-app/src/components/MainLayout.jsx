import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className="container mx-auto">
            <header className="flex gap-x-5 justify-end py-4">
                <NavLink to="/cart">Logo</NavLink>
                <NavLink to="/">Main Page</NavLink>
                <NavLink to="/admin">Categories</NavLink>
                <NavLink to="/quizes">All Products</NavLink>
                <NavLink to="/cart">All Sales</NavLink>
                <NavLink to="/cart">img cart</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </div>
    );
}