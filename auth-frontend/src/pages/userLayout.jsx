
import { Outlet } from 'react-router-dom'
import CustomNavbar from '../components/CustomNavbar'

const UserLayout = () => {
  return (
    <>
    <div className='mx-auto w-full'>
    <CustomNavbar />
    </div>
    <div className='container pt-10 px-10 mx-auto'>
    {<Outlet />}
    </div>
    </>
  )
}

export default UserLayout