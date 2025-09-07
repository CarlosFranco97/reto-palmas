import { InputTypes } from "../types/InputTypes";


const Input = ({placeholder, type}: InputTypes) => {
  return (
    <input
      className="bg-[#D9D9D9]/45 w-[85%] h-[50px] max-w-[420px] rounded-sm pl-3 focus:outline-green-200 font-semibold placeholder:text-[#000000]/40"
      placeholder={placeholder}
      type={type}
      //value, name...
    />
  );
};

export default Input;
