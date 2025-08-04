import { useState } from "react";
import CommonInput from "./common/CommonInput";
import { Button, Card } from "flowbite-react";

const UserForm = () => {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <>
      <Card className="flex-1">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <Button
            pill
            outline
            size="xs"
            className="outline"
            onClick={() => setChangePassword(!changePassword)}
          >
            Change Password
          </Button>
        </div>
        <form className="flex flex-col gap-4 w-full">
          {!changePassword ? (
            <>
              <div>
                <CommonInput name="username" type="text" label="Username" />
              </div>
              <div>
                <CommonInput name="Email" type="email" label="Email" />
              </div>
            </>
          ) : (
            <>
              {/* Password Components */}
              <div>
                <CommonInput name="password" type="password" label="Password" />
              </div>
              <div>
                <CommonInput
                  name="confirm_password"
                  type="password"
                  label="Confirm Password"
                />
              </div>
            </>
          )}

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
