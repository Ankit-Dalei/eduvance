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
import { Avatar, Dropdown, Modal } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { Tooltip } from "antd";

const Sidebar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [managementModal, setManagementModal] = useState(false);
  const [campusModal, setCampusModal] = useState(false);
  const [universityModal, setUniversityModal] = useState(false);

  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  function closeAllModals() {
    setManagementModal(false);
    setCampusModal(false);
    setUniversityModal(false);
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="xl:p-10">
      <div className="w-[94%] fixed xl:h-[94vh] h-[100vh] bg-purple-100 rounded-3xl xl:p-9 -mt-3 mr-10">
        <div className="flex justify-between  mb-3 items-center mt-3 xl:-mt-6">
          <div className="flex relative left-[17%]">
          <span className="cursor-pointer relative top-5 left-8 hidden xl:inline-block" onClick={toggleSidebar}>
            {!isCollapsed ? (
              <FaBarsStaggered className="inline-block w-6 h-6 mr-2 -mt-2 text-black" />
            ) : (
              <RxCross2 className="inline-block w-6 h-6 mr-2 -mt-2 text-black font-extrabold" />
            )}
          </span>
          <h1 className="text-3xl text-black  font-serif mt-3 ml-10 hidden md:inline-block">Eduvance</h1>
          </div>
      
          <div className="flex items-center space-x-4 mr-8 mt-10 xl:mt-0">
            <Tooltip title="Add the Roles">
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm p-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              <PiPlus className="inline-block w-5 h-5 text-white space-x-2" />
             
            </button>
            </Tooltip>
            <div className="">
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
        
        </div>
        <aside className="h-[100%] w-[100%] px-4 flex justify-between mt-10">
          <div className={`mt-24 transition-all duration-300 ${isCollapsed ? "w-10" : "w-64"}`} >
          <ul className={` flex flex-col   -mt-20 space-y-3 w-1 xl:w-auto`}>
          <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to="/home" className="px-[0.5rem]">
                  <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
                  <span className="xl:inline-block hidden">
                  {isCollapsed ? "" : " Home"}

                  </span>
                  
                    
                      
                    
                </Link>
              </li>
              <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to="/list" className="px-[0.5rem]">
                  <MdOutlinePermContactCalendar className="inline-block w-6 h-6 mr-2 -mt-2" />
                  <span className="xl:inline-block hidden">
                  
                  {isCollapsed ? "" : " University"}
                  </span>

                  
                  
                </Link>
              </li>
              
              <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to="/manage" className="px-[0.5rem]">
                  <MdManageAccounts className="inline-block w-6 h-6 mr-2 -mt-2" />
                  <span className="xl:inline-block hidden">
                  
                  {isCollapsed ? "" : " Management"}
                  </span>
                    
                </Link>
              </li>
              <li className={`mb-2 hover:bg-purple-500  py-2 rounded-2xl  `}>
                <Link to="/campus" className="px-[0.5rem]">
                  <BiBuildingHouse className="inline-block w-6 h-6 mr-2 -mt-2" />
                  <span className="xl:inline-block hidden">

                   {isCollapsed ? "" : "  Campus"} 
                   </span>
                </Link>
              </li>
              <li className="mb-2  hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to={'/report'} className="px-[0.5rem]">
                  <HiOutlineDocumentReport className="inline-block w-6 h-6 mr-2 -mt-2" />
                  <span className="xl:inline-block hidden">
                  
                   {isCollapsed ? "" : "   Reports "}
                   </span>
                   
                </Link>
              </li>
              <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl ">
                <Link to={'/setting'} className="px-[0.5rem]">
                  <IoSettingsOutline className="inline-block w-6 h-6 mr-2 -mt-2" />
                  <span className="xl:inline-block hidden">
                  
                   {isCollapsed ? "" : " Setting"} 
                   </span>
                   
                </Link>
              </li>
              <li className="mb-2 hover:bg-purple-500  py-2 rounded-2xl relative -bottom-64">
                <Link className="px-[0.5rem]">
                  <BiLogOut className="inline-block w-6 h-6 mr-2 -mt-2 " />
                  <span className="xl:inline-block hidden">
                  {isCollapsed ? "" : " Logout"}

                  </span>
                   
                 </Link>
              </li>
              
            </ul>

          </div>
          <div className="absolute top-0">
          </div>
        <div className="w-[250%] xl:w-[100%] bg-white p-12 xl:overflow-hidden overflow-y-auto xl:h-[98%] h-[80%] ml-3 xl:-mt-8 md:rounded-xl">



            {children}
          </div>
          <Modal show={openModal} size="md" onClose={onCloseModal}>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6 text-center text-ellipsis">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Want to Create Role for?
                </h3>
                <div className="flex flex-col space-y-3 ">
                  <button
                    className="mx-16 py-3 bg-gray-300 rounded-2xl"
                    onClick={() => {
                      setOpenModal(false);
                      setManagementModal(true);
                    }}
                  >
                    <LuBuilding2 className="inline-block w-6 h-6 mr-2 -mt-2" />
                  
                    Management
                  </button>
                  <button
                    className="mx-16 py-3 bg-gray-300 rounded-2xl"
                    onClick={() => {
                      setOpenModal(false);
                      setCampusModal(true);
                    }}
                  >
                    <BiBuildingHouse className="inline-block w-6 h-6 mr-2 -mt-2" />
                 
                    University
                  </button>
                  <button
                    className="mx-16 py-3 bg-gray-300 rounded-2xl"
                    onClick={() => {
                      setOpenModal(false);
                      setUniversityModal(true);
                    }}
                  >
                    <TbBuildingEstate className="inline-block w-6 h-6 mr-2 -mt-2" />
                   
                    Campus
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* Management Modal */}
          <Modal show={managementModal} size="md" onClose={closeAllModals}>
            <Modal.Header>
              Create Management Role
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-4">
                  <label htmlFor="managementName" className="block text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="managementName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="managementLocation" className="block text-gray-700">
                    Location:
                  </label>
                  <input
                    type="text"
                    id="managementLocation"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="managementState" className="block text-gray-700">
                    State:
                  </label>
                  <input
                    type="text"
                    id="managementState"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white py-2 rounded-md"
                >
                  Create
                </button>
              </form>
            </Modal.Body>
          </Modal>

          {/* Campus Modal */}
          <Modal show={campusModal} size="md" onClose={closeAllModals}>
            <Modal.Header>
              Create Campus Role
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-4">
                  <label htmlFor="campusName" className="block text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="campusName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="campusLocation" className="block text-gray-700">
                    Location:
                  </label>
                  <input
                    type="text"
                    id="campusLocation"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="campusState" className="block text-gray-700">
                    State:
                  </label>
                  <input
                    type="text"
                    id="campusState"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white py-2 rounded-md"
                >
                  Create
                </button>
              </form>
            </Modal.Body>
          </Modal>

          {/* University Modal */}
          <Modal show={universityModal} size="md" onClose={closeAllModals}>
            <Modal.Header>
              Create University Role
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-4">
                  <label htmlFor="universityName" className="block text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="universityName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="universityLocation" className="block text-gray-700">
                    Location:
                  </label>
                  <input
                    type="text"
                    id="universityLocation"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="universityState" className="block text-gray-700">
                    State:
                  </label>
                  <input
                    type="text"
                    id="universityState"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white py-2 rounded-md"
                >
                  Create
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
