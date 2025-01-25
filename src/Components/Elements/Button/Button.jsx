/* eslint-disable react/prop-types */
const Button = (props) => {
  const { children, variant = "bg-transparent", type = "button" } = props;
  return (
    <button
      className={`flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto h-12 py-3.5 px-3.5 border border-solid border-[#E7E3FC3B] rounded-3xl gap-3.5 ${variant} text-white font-semibold text-sm sm:text-base leading-[1.4] tracking-[0.2px]`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
