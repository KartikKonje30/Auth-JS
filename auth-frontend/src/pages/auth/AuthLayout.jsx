import { Outlet } from 'react-router';

const AuthLayout = () => {

    return (
        <>
        <div className="flex justify-center h-[100vh]">
            <div className="sm:w-[400px] w-[100%] px-4 py-10">
                <Outlet />
            </div>
        </div>
        </>
    )

}

export default AuthLayout;