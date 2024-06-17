// Layout.js
import Sidebar from './SideBar';
import Navigation from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
  <Sidebar />
  <div className="flex-1 flex flex-col">
    <Navigation />
    <div className="flex-1 p-1 overflow-y-auto mt-3">
      <div className="font-semibold p-1 overflow-auto">
        {children}
      </div>
    </div>
  </div>
</div>

  );
};

export default Layout;
