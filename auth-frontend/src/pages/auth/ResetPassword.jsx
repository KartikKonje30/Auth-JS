
import { SiAuthy } from "react-icons/si";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import CommonInput from "../../components/common/CommonInput";
import CommonPassword from "../../components/common/CommonPassword";
import { Link } from "react-router-dom";


const ResetPage = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-2 mt-4">
      <SiAuthy className="text-5xl text-green-400 mr-2" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">Auth Dev</span>
    </div>
    <div className="mt-8">
      <div className="">
        <h1 className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">Reset Password</h1>
        <span className="self-center whitespace-nowrap text-[15px] font-medium text-slate-800">Enter your new password</span>
      </div>
      <form className="flex max-w-md flex-col gap-4 mt-6">
      <div>
      <CommonPassword type="password" name="password" placeholder="********" />
      </div>
      <div>
      <CommonPassword type="confirmPassword" name="Confirm Password" placeholder="********" />
      </div>
      <Button type="submit" size="lg">Submit</Button>
    </form>
    </div>
    </>
  )
}

export default ResetPage;
