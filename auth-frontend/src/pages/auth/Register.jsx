
import { SiAuthy } from "react-icons/si";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import CommonInput from "../../components/common/CommonInput";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-2 mt-4">
      <SiAuthy className="text-5xl text-green-400 mr-2" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">Auth Dev</span>
    </div>
    <div className="mt-6">
      <div className="">
        <h1 className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">Sign up</h1>
        <span className="self-center whitespace-nowrap text-[15px] font-medium text-slate-800">Enter your details to register</span>
      </div>
      <form className="flex max-w-md flex-col gap-4 mt-6">
      <div>
      <CommonInput type="text" name="username" placeholder="username" />
      </div>
      <div>
      <CommonInput type="email" name="email" placeholder="name@email.com" />
      </div>
      <div>
      <CommonInput type="password" name="password" placeholder="********" />
      </div>
      <div>
      <CommonInput type="confirmPassword" name="Confirm Password" placeholder="********" />
      </div>
      <Button type="submit" size="lg">Submit</Button>
    </form>
    </div>
    <div className="py-6">
      <span className="flex justify-center items-center gap-1 whitespace-nowrap text-[14px] font-medium text-slate-800">
        <label>Already have an account?</label><Link to="/login" className="whitespace-nowrap text-[15px] font-medium text-blue-600">Login</Link>
      </span>
    </div>
    </>
  )
}

export default RegisterPage;