import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { BiHome, BiUser, BiCog } from 'react-icons/bi';

const Navigation = () => {
  return (
    <div className="w-full h-24 border-b-2 flex justify-between items-center px-4 bg-gray-100">
      <div className="text-xl md:text-2xl lg:text-3xl font-bold">
        Eduvance
      </div>
      <div className="hidden md:hidden xl:block text-sm md:text-2xl text-gray-500 font-semibold">
        Welcome To Teacher Dashboard
      </div>
      <div className="flex items-center space-x-4">
    
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
    </div>
  );
};

export default Navigation;
