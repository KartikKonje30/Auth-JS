import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { SiAuthy } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  let navigate = useNavigate();

  let isAuthenticated = false;

  return (
    <>
      <Navbar fluid rounded className="shadow-md py-4 md:px-18">
        <NavbarBrand href="/">
          <SiAuthy className="text-3xl text-green-400 mr-2" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-slate-700">
            Auth Dev
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          {isAuthenticated ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <DropdownHeader>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </DropdownHeader>
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
              <NavbarToggle />
            </>
          ) : (
            <Button onClick={() => navigate('/login')}>Login</Button>
          )}
        </div>
        <NavbarCollapse></NavbarCollapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
