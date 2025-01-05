/* eslint-disable react/prop-types */ 
import TopTen from "../TagFilm/TopTen";
const ContainerTopTen = (props) => {
  const { image } = props;
  return (
      <div className="relative w-[234px] h-[365px]">
        <img className="rounded-lg w-[234px] h-[365px]" src={image} alt="" />
        <TopTen />
      </div>
  );
};

export default ContainerTopTen;