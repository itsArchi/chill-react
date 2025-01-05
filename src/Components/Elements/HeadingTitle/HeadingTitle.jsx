/* eslint-disable react/prop-types */
const HeadingTitle = (props) => {
    const { title } = props;
    return (
        <h3 className="w-full text-white text-[32px] font-bold leading-[35.2px]">{title}</h3>
    )
}

export default HeadingTitle