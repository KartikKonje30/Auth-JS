

import { SiAuthy } from "react-icons/si";
import { Button, Checkbox, Label} from "flowbite-react";

const VerifyOTP = () => {
  
    return (
    <>
    <div className="flex flex-col justify-center items-center gap-2 mt-4">
      <SiAuthy className="text-5xl text-green-400 mr-2" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold text-slate-700">Auth Dev</span>
    </div>
    <div className="mt-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-semibold text-slate-700">Verify Email By OTP</h1>
        {/* <h3 className="text-center text-[15px] font-medium text-slate-800">Enter the 6-digit code received on your registered email</h3> */}
      </div>

      <form class="max-w-sm mt-6 mx-auto">
        <div class="flex justify-center mb-2 space-x-2 rtl:space-x-reverse">
            <div>
                <label htmlFor="code-1" class="sr-only">First code</label>
                <input type="text" maxLength="1" data-focus-input-init data-focus-input-next="code-2" id="code-1" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <div>
                <label htmlFor="code-2" className="sr-only">Second code</label>
                <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <div>
                <label htmlFor="code-3" className="sr-only">Third code</label>
                <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <div>
                <label htmlFor="code-4" className="sr-only">Fourth code</label>
                <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <div>
                <label htmlFor="code-5" className="sr-only">Fifth code</label>
                <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-4" data-focus-input-next="code-6" id="code-5" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <div>
                <label htmlFor="code-6" className="sr-only">Sixth code</label>
                <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
        </div>
        <div className="block mt-6 mb-4">
        <p id="helper-text-explanation" className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">Please enter the 6-digit code we sent via email.</p>
        <Button type="submit" size="lg" className="self-center mt-4 w-48 mx-auto">Verify Email</Button>
        </div>
      </form>
    </div>
    </>
  )
}

export default VerifyOTP;

