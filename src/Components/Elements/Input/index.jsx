/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placeholder, img } = props;
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto gap-1.5 my-4 ">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        {img && (
          <img
            src={img}
            alt={`${label} icon`}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer"
          />
        )}
        <Input name={name} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default InputForm;
