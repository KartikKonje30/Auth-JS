import { SiAuthy } from "react-icons/si";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import CommonInput from "../../components/common/CommonInput";
import { Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import * as Yup from "yup";
import { PasswordStrength } from "../../components";

const RegisterPage = () => {
  let initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };


  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'), 
    email: Yup.string().email('Invalid email address').required('Required'), 
    password: Yup.string().min(8, 'Must be atleast 6 character'), 
    confirmPassword: Yup.string().oneOf(
      [
        Yup.ref('password'),
        null
      ],
      'Password must match!'
    ),
  })

  const { formik } = useCustomForm(initialValues, onSubmit, validationSchema);

  // console.log(formik);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <SiAuthy className="text-5xl text-green-400 mr-2" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">
          Auth Dev
        </span>
      </div>
      <div className="mt-6">
        <div className="">
          <h1 className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">
            Sign up
          </h1>
          <span className="self-center whitespace-nowrap text-[15px] font-medium text-slate-800">
            Enter your details to register
          </span>
        </div>
        <form
          className="flex max-w-md flex-col gap-4 mt-6"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <CommonInput
              type="text"
              name="username"
              label="Username"
              placeholder="username"
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <CommonInput
              type="email"
              name="email"
              label="Email"
              placeholder="name@email.com"
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <CommonInput
              type="password"
              name="password"
              label="Password"
              placeholder="********"
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <CommonInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="********"
              onChange={formik.handleChange}
              checkPassword={formik.values.confirmPassword !== formik.values.password}
            />
          </div>
          <PasswordStrength value={formik.values.password} />
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
      <div className="py-6">
        <span className="flex justify-center items-center gap-1 whitespace-nowrap text-[14px] font-medium text-slate-800">
          <label>Already have an account?</label>
          <Link
            to="/login"
            className="whitespace-nowrap text-[15px] font-medium text-blue-600"
          >
            Login
          </Link>
        </span>
      </div>
    </>
  );
};

export default RegisterPage;
