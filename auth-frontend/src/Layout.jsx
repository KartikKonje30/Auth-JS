
import { Outlet } from 'react-router';
import CustomNavbar from './components/CustomNavbar';

function Layout() {
  return (
    <>
    <div className=''>
    <CustomNavbar />
    </div>
    <Outlet />
    </>
  )
}

export default Layout