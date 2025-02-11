/* eslint-disable react/prop-types */ 
import TopTen from "../TagFilm/TopTen";
const ContainerTopTen = (props) => {
  const { image } = props;
  return (
      <div className="relative min-w-[95px] sm:w-[234px] h-[145px] sm:h-[365px]">
        <img className="rounded-lg w-24 sm:w-[234px] h-full sm:h-[365px]" src={image} alt="" />
        <TopTen />
      </div>
  );
};

export default ContainerTopTen;