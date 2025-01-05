/* eslint-disable react/prop-types */ 

const ContainerFilm = (props) => {
  const { image } = props;
  return (
      <div className="relative w-[234px] h-[365px]">
        <img className="rounded-lg w-[234px] h-[365px]" src={image} alt="" />
      </div>
  );
};

export default ContainerFilm;