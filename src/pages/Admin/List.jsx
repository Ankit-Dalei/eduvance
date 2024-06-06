import React from "react";
import Sidebar from "./Sidebar";
import { CiEdit } from "react-icons/ci";
import { Button, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
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
const List = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Sidebar>
      <div className="-mt-7 mb-3">
        <div className="flex justify-between">
          <div class="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-custom-icon-trigger"
              type="button"
              class="hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                class="flex-none size-4 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>

            <div
              class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 mb-10"
              aria-labelledby="hs-dropdown-custom-icon-trigger"
            >
              <Link
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Newsletter
              </Link>
              <Link
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Purchases
              </Link>
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <Tooltip content="Active User" placement="top">
              <span className=" text-gray-500 font-semibold">1-50 of 10000</span>
            </Tooltip>
            <Tooltip content="Move the Pages" placement="top">
              <nav aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px h-8 text-sm">
                  <li>
                    <Link
                      href="#"
                      class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Previous</span>
                      <svg
                        class="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Next</span>
                      <svg
                        class="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Tooltip>
          </div>
        </div>

        <div class="overflow-x-auto  shadow rounded-lg overflow-hidden mt-2 text-center">
          <table class="min-w-full leading-relaxed ">
            <thead class=" text-xs text-white uppercase bg-purple-500 rounded-2xl ">
              <tr className="table-fixed">
                <th scope="col" class="px-6 py-3">
                  User Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Login
                </th>
                <th scope="col" class="px-6 py-3">
                  Role
                </th>
                <th scope="col" class="px-6 py-3">
                  Created At
                </th>

                <th scope="col" class="px-6 py-3">
                  {" "}
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr class="bg-white border-b text-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded flex flex-col float-start"
                    />
                    {user["USER NAME"]}
                  </th>
                  <td class="px-6 py-4">{user.LOGIN}</td>
                  <td class="px-6 py-4">{user.ROLE} </td>
                  <td class="px-6 py-4">{user["CREATED AT"]}</td>
                  <td class="px-6 py-4 space-x-1 ">
                    <span className="cursor-pointer py-1 px-2 rounded-md bg-[#90FEA8]">
                      <CiEdit className="inline-block w-6 h-6  -mt-1" />
                    </span>
                    <span className="cursor-pointer py-1 px-2 rounded-md bg-[#F46F6F]">
                      <MdDelete
                        className="inline-block w-6 h-6  -mt-1"
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
        </div>
      </div>
    </Sidebar>
  );
};

export default List;
