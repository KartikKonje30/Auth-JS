import { Label, TextInput } from "flowbite-react";

const CommonPassword = ({type, name, placeholder, ...rest}) => {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor={name} className="capitalize">{ `${name}`}</Label>
      </div>
      <TextInput
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        sizing="md"
        required
        {...rest}
      />
    </>
  );
};

export default CommonPassword;
