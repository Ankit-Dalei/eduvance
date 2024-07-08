import React from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';
import Layout from '../../component/Layout';
import '../common/navbar.css';
import Sidebar from '../../component/SideBar';

const BaseLayout = () => {
    const location = useLocation();

    const navLinks = [
        { to: "/baselayout/details", text: "Details" },
        { to: "/baselayout/challenge", text: "Challenge" },
        { to: "/baselayout/advanced", text: "Advanced" },
        { to: "/baselayout/moderate", text: "Moderate" },
        { to: "/baselayout/notification", text: "Notifications" },
        { to: "/baselayout/statistic", text: "Statistic" }
    ];

    return (
        <Layout>
            <header className="nav-header bg-black top-0 left-0 w-full z-10 fixed px-5 ">
                <nav className="container mx-auto flex items-center justify-between py-5 overflow-auto">
                    <div className="flex items-center justify-between w-full text-white">
                        {navLinks.map(({ to, text }) => (
                            <NavLink key={to} to={to} isActive={location.pathname === to}>
                                {text}
                            </NavLink>
                        ))}
                    </div>
                    <div>
                        {/* Hamburger menu for mobile */}
                    </div>
                </nav>
            </header>
            <main className="content mt-16 overflow-hidden">
                <Outlet />
            </main>
        </Layout>
    );
}

const NavLink = ({ to, isActive, children }) => {
    const activeClassName = isActive ? 'active-nav-link' : 'nav-link';
    return (
        <Link to={to} className={activeClassName}>
            {children}
        </Link>
    );
}

export default BaseLayout;
