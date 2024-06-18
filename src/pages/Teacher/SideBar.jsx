import { Dropdown, Menu } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { GoRepoPush } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SiConfluence } from "react-icons/si";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth < 640) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settingsMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Account</Menu.Item>
      <Menu.Item key="3">Preferences</Menu.Item>
    </Menu>
  );

  const reportsMenu = (
    <Menu>
      <Menu.Item key="1">Report 1</Menu.Item>
      <Menu.Item key="2">Report 2</Menu.Item>
      <Menu.Item key="3">Report 3</Menu.Item>
    </Menu>
  );

  const Menus = [
    { title: "Home", icon: <BiHome size={20} />, path: "/teacher/home" },
    { title: "Dashboard", icon: <MdDashboard size={20} />, path: "/teacher/dashboard" },
    {
      title: "Reports",
      icon: <GoRepoPush size={20} />,
      dropdown: reportsMenu,
    },
    {
      title: "Settings",
      icon: <IoSettingsOutline size={20} />,
      dropdown: settingsMenu,
    },
    { title: "Logout", icon: <IoLogOutOutline size={20} />, path: "/logout" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-56" : "w-20"
        } bg-[#121212] h-screen p-5 pt-8 relative duration-300`}
      >
        <IoIosArrowBack
          size={25}
          color="white"
          className={`absolute cursor-pointer right-1 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <SiConfluence
            color="white"
            size={30}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Eduvance
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-[rgba(255,255,255,0.17)] text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              {Menu.dropdown ? (
                <Dropdown overlay={Menu.dropdown} trigger={["click"]}>
                  <div className="flex items-center gap-x-4 w-full">
                    <span>{Menu.icon}</span>
                    <span
                      className={`flex justify-between items-center w-full ${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                      <IoIosArrowDown className="ml-2" />
                    </span>
                  </div>
                </Dropdown>
              ) : (
                <Link
                  to={Menu.path || "#"}
                  className="flex items-center gap-x-4 w-full"
                >
                  <span>{Menu.icon}</span>
                  <span
                    className={`flex justify-between items-center w-full ${
                      !open && "hidden"
                    } origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
