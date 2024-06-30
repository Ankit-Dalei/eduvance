import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SiConfluence } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { changestate } from "../../Redux/sidebar";
import { MdOutlineAddToQueue } from "react-icons/md";
import { GoRepoPush } from "react-icons/go";
import StaggeredDropDown from "./ExamSession/StaggeredDropDown";

const Sidebar = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.sider.value);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settingsMenuItems = [
    { icon: IoSettingsOutline, text: "Profile" },
    { icon: IoSettingsOutline, text: "Account" },
    { icon: IoSettingsOutline, text: "Preferences" },
  ];

  const reportsMenuItems = [
    { icon: IoSettingsOutline, text: "Report 1" },
    { icon: IoSettingsOutline, text: "Report 2" },
    { icon: IoSettingsOutline, text: "Report 3" },
  ];

  const Menus = [
    { title: "Dashboard", icon: <MdDashboard size={20} />, path: "/teacher" },
    { title: "Add Exam", icon: <MdOutlineAddToQueue size={20} />, path: "/teacher/add-question" },
    {
      title: "Reports",
      icon: <GoRepoPush size={20} />,
      dropdown: count ? <StaggeredDropDown title="Reports" icon={<GoRepoPush size={20} />} menuItems={reportsMenuItems} /> : null,
    },
    {
      title: "Settings",
      icon: <IoSettingsOutline size={20} />,
      dropdown: count ? <StaggeredDropDown title="Settings" icon={<IoSettingsOutline size={20} />} menuItems={settingsMenuItems} /> : null,
    },
    { title: "Logout", icon: <IoLogOutOutline size={20} />, path: "/logout" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          count ? "w-56" : "w-16"
        } bg-black h-screen p-3 pt-8 relative duration-300`}
      >
        {!isMobile && (
          <IoIosArrowBack
            size={25}
            color="gray"
            className={`absolute cursor-pointer top-9 w-7  border-2 rounded-full -right-2 text-gray-500 border-slate-500 ${
              !count && "rotate-180"
            }`}
            onClick={() => dispatch(changestate())}
          />
        )}
        <div className="flex gap-x-4 items-center">
          <SiConfluence
            color="white"
            size={30}
            className={`cursor-pointer duration-500 ${
              count && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !count && "scale-0"
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
                <div className="relative">
                  {Menu.dropdown} {/* Render dropdown directly */}
                </div>
              ) : (
                <Link to={Menu.path || "#"} className="flex items-center gap-x-4 w-full justify-between">
                  <span>{Menu.icon}</span>
                  <span
                    className={`flex items-center w-full ${
                      !count && "hidden"
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
