// Navbar.js
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { BiHome, BiUser, BiCog } from 'react-icons/bi';

const Navigation = () => {
  return (
    <div>
    <nav className=' md:w-[100%] h-24 border-b-2 flex justify-between items-center px-2 rounded-md bg-gray-100 space-x-14 xl:space-x-0'>
      <div className='text-2xl xl:text-3xl font-bold'>
        Eduvance
      </div>
      <div className='text-2xl text-gray-500 font-semibold hidden md:block'>
        Welcome To Teacher Dashboard
      </div>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<Avatar alt="User settings" rounded={true} />}
        >
          <Dropdown.Header>
            <span className="block text-sm">BIKASH MALU</span>
            <span className="block truncate text-sm font-medium">bikashmalu1@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown>
      </div>
    </nav>
  </div>
  
  );
};

export default Navigation;
