
import { SiAuthy } from "react-icons/si";
import { Button, Checkbox, Label} from "flowbite-react";
import CommonInput from "../../components/common/CommonInput";
import { Link } from "react-router-dom";

const LoginPage = () => {
  
    return (
    <>
    <div className="flex flex-col justify-center items-center gap-2 mt-4">
      <SiAuthy className="text-5xl text-green-400 mr-2" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">Auth Dev</span>
    </div>
    <div className="mt-8">
      <div className="">
        <h1 className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">Login</h1>
        <span className="self-center whitespace-nowrap text-[15px] font-medium text-slate-800">Enter your details to Login</span>
      </div>
      <form className="flex max-w-md flex-col gap-4 mt-6">
      <div>
      <CommonInput type="email" name="email" placeholder="name@email.com" />
      </div>
      <div className="">
      <CommonInput type="password" name="password" placeholder="********" />
      </div>
      <div className="flex justify-between">   
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Link to="/forgot-password" className="flex justify-end whitespace-nowrap text-sm font-medium text-blue-600" >Forgot Password?</Link>
      </div>
      <Button type="submit" size="lg">Submit</Button>
    </form>
    </div>
    <div className="mb-10 py-6">
      <span className="flex justify-center items-center gap-1 whitespace-nowrap text-[14px] font-medium text-slate-800">
        <label>You don't have an account?</label><Link to="/signup" className="whitespace-nowrap text-[15px] font-medium text-blue-600">Sign up</Link>
      </span>
    </div>
    </>
  )
}

export default LoginPage;
