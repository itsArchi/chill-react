/* eslint-disable react/prop-types */
import NewEpisode from "../TagFilm/NewEpisode";

const ContainerNewEpisode = (props) => {
  const { image } = props;
  return (
      <div className="relative min-w-[95px] sm:w-[234px] h-[145px] sm:h-[365px]">
        <img className="rounded-lg w-full sm:w-[234px] h-full sm:h-[365px]" src={image} alt="" />
        <NewEpisode />
      </div>
  );
};

export default ContainerNewEpisode;
