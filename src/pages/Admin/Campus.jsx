import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { CiEdit } from "react-icons/ci";
import { Button, Modal, Tooltip } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Checkbox, Label,  TextInput } from "flowbite-react";
const userData = [
  {
    "USER NAME": "John Doe",
    LOGIN: "jdoe",
    ROLE: "Admin",
    "CREATED AT": "2024-01-15T08:30:00Z",
  },
  {
    "USER NAME": "Jane Smith",
    LOGIN: "jsmith",
    ROLE: "User",
    "CREATED AT": "2024-02-20T12:45:00Z",
  },
  {
    "USER NAME": "Alice Johnson",
    LOGIN: "ajohnson",
    ROLE: "Moderator",
    "CREATED AT": "2024-03-10T09:00:00Z",
  },
  {
    "USER NAME": "Bob Brown",
    LOGIN: "bbrown",
    ROLE: "User",
    "CREATED AT": "2024-04-05T14:20:00Z",
  },
  {
    "USER NAME": "Charlie Davis",
    LOGIN: "cdavis",
    ROLE: "Admin",
    "CREATED AT": "2024-05-12T11:10:00Z",
  },
];

const Campus = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal1(false);
    setEmail('');
  }
  const [checkedItems, setCheckedItems] = useState(
    userData.reduce((acc, user, index) => {
      acc[index] = false;
      return acc;
    }, {})
  );
  const [selectAll, setSelectAll] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => {
      const newState = { ...prev, [index]: !prev[index] };
      setSelectAll(Object.values(newState).every((item) => item));
      return newState;
    });
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newCheckedItems = Object.keys(checkedItems).reduce((acc, key) => {
      acc[key] = newSelectAll;
      return acc;
    }, {});
    setCheckedItems(newCheckedItems);
  };

  return (
    <Sidebar>
      <div className="-mt-7 mb-3">
        <div className="flex justify-between">
          <Tooltip content={`${!selectAll?"Select users":"disable all users"}`} placement="right-end">
            <input
              id="select-all-checkbox"
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAllChange}
              className="w-4 h-4 mt-3 text-blue-600 bg-gray-100 border-gray-300 rounded flex flex-col float-start"
            />
          </Tooltip>
          <div className="flex space-x-3 items-center">
            <Tooltip content="Active User" placement="top">
              <span className="text-gray-500 font-semibold">
                1-50 of 10000
              </span>
            </Tooltip>
            <Tooltip content="Move the Pages" placement="top">
              <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </Tooltip>
          </div>
        </div>

        <div className="overflow-x-auto shadow rounded-lg overflow-hidden mt-2 text-center">
          <table className="min-w-full leading-relaxed">
            <thead className="text-xs text-white uppercase bg-purple-500 rounded-2xl">
              <tr className="table-fixed">
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Login
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index} className="bg-white border-b text-black">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <input
                      id={`checkbox-${index}`}
                      type="checkbox"
                      checked={checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded flex flex-col float-start"
                    />
                    {user["USER NAME"]}
                  </th>
                  <td className="px-6 py-4">{user.LOGIN}</td>
                  <td className="px-6 py-4">{user.ROLE}</td>
                  <td className="px-6 py-4">{user["CREATED AT"]}</td>
                  <td className="px-6 py-4 space-x-1">
                    <span className="cursor-pointer py-1 px-2 rounded-md bg-[#90FEA8]">
                      <CiEdit className="inline-block w-6 h-6 -mt-1"  onClick={() => setOpenModal1(true)}/>
                    </span>
                    <span className="cursor-pointer py-1 px-2 rounded-md bg-[#F46F6F]">
                      <MdDelete
                        className="inline-block w-6 h-6 -mt-1"
                        onClick={() => setOpenModal(true)}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this user?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={() => setOpenModal(false)}>
                    {"Yes, I'm sure"}
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <Modal show={openModal1} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Update here</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            
            <div className="w-full">
              <Button >Update!!</Button>
            </div>
          
          </div>
        </Modal.Body>
      </Modal>
        </div>
      </div>
    </Sidebar>
  );
};

export default Campus;
