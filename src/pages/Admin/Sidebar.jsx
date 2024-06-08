import React, { useState } from "react";
import { BiBuildingHouse, BiLogOut } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdManageAccounts, MdOutlinePermContactCalendar } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import { TbBuildingEstate } from "react-icons/tb";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Avatar, Dropdown } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { Modal } from "flowbite-react";
const Sidebar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
   const [openModal, setOpenModal] = useState(false);

   const [email, setEmail] = useState('');

   function onCloseModal() {
     setOpenModal(false);
     setEmail('');
   }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="p-10">
      <div className="w-[94%] fixed h-[90vh] bg-purple-100 rounded-3xl p-9">
        <div className="flex justify-between">
          <h1 className="text-3xl text-black  font-serif mt-2 ml-10">Eduvance</h1>
          <span className="cursor-pointer relative top-5 left-8"onClick={toggleSidebar} >
            {!isCollapsed ? (
              <FaBarsStaggered className="inline-block w-6 h-6 mr-2 -mt-2 text-black" />
            ) : (
              <RxCross2 className="inline-block w-6 h-6 mr-2 -mt-2 text-black font-extrabold" />
            )}
          </span>
          <div className="w-[70%] relative left-10">
            <form class="">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class=" block w-[80%] px-4 py-3 ps-10 text-[15px] text-black border border-gray-300 border-none outline-none bg-gray-300 focus:ring-purple-300- focus:border-purple-300 rounded-full "
                  placeholder="Enter login or full name"
                  required
                />
              </div>
            </form>
          </div>
          <div className="relative right-12">
            <button
              type="button"
              onClick={() => setOpenModal(true)} 
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              <PiPlus className="inline-block w-4 h-4 mr-2 -mt-2 text-white space-x-2" />
              Create Role
            </button>
    
          </div>
          <div className="relative right-14">
            <Dropdown
              label={
                <Avatar
                  alt="User settings"
                  img="https://static.vecteezy.com/system/resources/thumbnails/043/900/719/small/user-profile-icon-illustration-vector.jpg"
                  rounded
                />
              }
              arrowIcon={false}
              inline
            >
              <div>
                <Dropdown.Header>
                  <span className="block text-sm">Bikash Malu</span>
                  <span className="block truncate text-sm font-medium">
                    bikashmalu1@gmail.com
                  </span>
                </Dropdown.Header>
            
                <Dropdown.Item>Edit profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Logout</Dropdown.Item>
              </div>
            </Dropdown>
          </div>
        </div>
        <aside className="h-[100%] w-[100%] px-4 flex justify-between ">
          <div
            className={`mt-24 transition-all duration-300 ${
              isCollapsed ? "w-5" : "w-64"
            } `}
          >
            <ul className={` flex flex-col justify-center items-start`}>
              <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl  ">
                <Link to="/home" className="px-[0.5rem]">
                  <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
                  {isCollapsed ? "" : "Home"}
                </Link>
              </li>
              <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to="/list" className="px-[0.5rem]">
                  <MdOutlinePermContactCalendar className="inline-block w-6 h-6 mr-2 -mt-2" />
                  {isCollapsed ? "" : "University"}
                </Link>
              </li>
              <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to="/manage" className="px-[0.5rem]">
                  <MdManageAccounts className="inline-block w-6 h-6 mr-2 -mt-2" />
                
                  
                    {isCollapsed ? "" : "Management"}
                
                </Link>
              </li>
              <li className={`mb-2 hover:bg-purple-500  py-2 rounded-2xl  `}>
                <Link to="/campus" className="px-[0.5rem]">
                  <BiBuildingHouse className="inline-block w-6 h-6 mr-2 -mt-2" />
                  {isCollapsed ? "" : " Campus"}
                </Link>
              </li>
              <li className="mb-2  hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to={'/report'} className="px-[0.5rem]">
                  <HiOutlineDocumentReport className="inline-block w-6 h-6 mr-2 -mt-2" />
                  {isCollapsed ? "" : "  Reports"}
                </Link>
              </li>
              <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to={'/setting'} className="px-[0.5rem]">
                  <IoSettingsOutline className="inline-block w-6 h-6 mr-2 -mt-2" />
                  {isCollapsed ? "" : "Setting"}
                </Link>
              </li>
              <li className="mb-2  py-2 rounded-2xl fixed bottom-16">
                <Link className="px-[0.5rem]">
                  <BiLogOut
                   className="inline-block w-6 h-6 mr-2 -mt-2 " />
                  {isCollapsed ? "" : "Logout"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute top-0">
        
      </div>
          <div className="w-full bg-white m-10 p-10 rounded-3xl mt-20  mb-16 overflow-hidden ">
            {children}
          </div>
            <Modal show={openModal} size="md" onClose={onCloseModal}>
        <Modal.Header />
        <Modal.Body  >
          <div className="space-y-6 text-center text-ellipsis">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Want to Create Role for?</h3>
            <div className="flex flex-col space-y-3 ">
             <button className="mx-16 py-3 bg-gray-300 rounded-2xl">
             <LuBuilding2 className="inline-block w-6 h-6 mr-2 -mt-2" />
              Management</button>
             <button className="mx-16 py-3 bg-gray-300 rounded-2xl">
             <BiBuildingHouse className="inline-block w-6 h-6 mr-2 -mt-2" />
              University</button>
             <button className="mx-16 py-3 bg-gray-300 rounded-2xl">
             <TbBuildingEstate className="inline-block w-6 h-6 mr-2 -mt-2" />
              Campus</button>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
