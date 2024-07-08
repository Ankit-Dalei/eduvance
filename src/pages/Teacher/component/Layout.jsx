import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './SideBar';
import Navigation from './Navbar';

const Layout = ({ children }) => {
    const location = useLocation();
    const shouldHideNavigation = location.pathname.startsWith('/baselayout') || location.pathname.startsWith('/questionbaselayout');


    return (
        <div className="flex h-screen w-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                {!shouldHideNavigation && <Navigation />}
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="font-semibold p-1 max-w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
