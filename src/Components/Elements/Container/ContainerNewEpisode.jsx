/* eslint-disable react/prop-types */
import NewEpisode from "../TagFilm/NewEpisode";

const ContainerNewEpisode = (props) => {
  const { image } = props;
  return (
      <div className="relative w-[234px] h-[365px]">
        <img className="rounded-lg w-[234px] h-[365px]" src={image} alt="" />
        <NewEpisode />
      </div>
  );
};

export default ContainerNewEpisode;
