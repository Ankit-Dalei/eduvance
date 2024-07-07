import React from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';
import Layout from '../../Layout';
import '../navbar.css';
import Sidebar from '../../SideBar';

const BaseLayoutQuestion = () => {
    const location = useLocation();

    const navLinks = [
        { to: "/questionbaselayout/details", text: "Details" },
        { to: "/questionbaselayout/moderate", text: "Moderate" },
        { to: "/questionbaselayout/testcase", text: "Test Cases" },
        { to: "/questionbaselayout/code", text: "Code Stubs" },
        { to: "/questionbaselayout/language", text: "Language" },
        { to: "/questionbaselayout/setting", text: "Settings" },
        { to: "/questionbaselayout/editorial", text: "Editorial" },
        { to: "/questionbaselayout/custom", text: "Custom Checker" }
    ];

    return (
        <Layout>
            <header className="nav-header bg-black top-0 left-0 w-full z-10 fixed px-2 text-[10px] lg:text-sm ">
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

export default BaseLayoutQuestion;
