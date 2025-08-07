import { Label, TextInput } from "flowbite-react";

const CommonInput = ({type, label, name, placeholder, checkPassword, ...rest}) => {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor={name} className="">{label}</Label>
      </div>
      <TextInput
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        sizing="md"
        color={checkPassword ? 'failure' : 'gray'}
        required
        {...rest}
      />
    </>
  );
};

export default CommonInput;
