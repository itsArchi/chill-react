/* eslint-disable react/prop-types */
const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="w-full text-lg text-white font-medium leading-[25.2px] tracking-[0.2px]"
    >
      {children}
    </label>
  );
};

export default Label;
