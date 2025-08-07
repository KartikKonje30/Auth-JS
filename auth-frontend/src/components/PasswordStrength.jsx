


const PasswordStrength = ({value}) => {

    const hasMinChar = value.length >= 6;
    const hasUpperLowercase = /[A-Z]/.test(value) && /[a-z]/.test(value);
    // const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    // const hasMin12Len = value.length >= 12;
    const hasSpecialChar = /[!@#$%^&*]/.test(value);
    
    const strength = [
        hasMinChar,
        hasUpperLowercase,
        hasNumber,
        hasSpecialChar
    ].filter(Boolean).length;

    // console.log(strength);

    const progressBar = Math.min(strength, 4);


  return (
    <>
    <div className="space-y-2 p-3">
              <h3 className="font-semibold text-gray-900 ">Must have at least 6 characters</h3>
              <div className="grid grid-cols-4 gap-2">
                {
                    [...Array(4)].map((_, i) => (
                        <div key={i} className={`h-1 ${ i < progressBar ? 'bg-green-500' : 'bg-gray-200' }`}></div>
                    ))
                }
              </div>
              <p>It’s better to have:</p>
              <ul>
                <li className="mb-1 flex items-center">
                  {
                    hasUpperLowercase ? <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  : 
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  }
                  Upper & lower case letters
                </li>
                <li className="mb-1 flex items-center">
                  {
                    hasNumber ? <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  : 
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  }
                  A number (0-9)
                </li>
                <li className="mb-1 flex items-center">
                  {
                    hasSpecialChar ? <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  : 
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  }
                  A symbol (#$&)
                </li>
                <li className="flex items-center">
                  {
                    hasMinChar ? <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  : 
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  }
                  A longer password (min. 6 chars.)
                </li>
              </ul>
            </div>
    </>
  )
}

export default PasswordStrength