import ContainerFilm from "../Elements/Container/ContainerFilm";
import ContainerNewEpisode from "../Elements/Container/ContainerNewEpisode";
import ContainerTopTen from "../Elements/Container/ContainerTopTen";
import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";

const MyList = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-6 sm:py-20 sm:my-0 px-2 sm:px-52 gap-4 sm:gap-8">
      <HeadingTitle title="Daftar Saya" />
      <div className=" flex flex-col sm:flex-row justify-center items-center w-full h-full gap-4">
        <div className="w-full h-full flex flex-row gap-6 sm:gap-4 justify-center items-center">
          <ContainerNewEpisode movie={{poster_path:"/allofus.png", title:"All of Us" }}/>
          <ContainerFilm movie={{ poster_path: "/baymax.png", title: "Baymax" }} />
          <ContainerNewEpisode movie={{ poster_path:"/bokunohero.png", title:"Boku No Hero"}} />
        </div>
        <div className="w-full h-full flex flex-row gap-6 sm:gap-4 justify-center items-center">
          <ContainerNewEpisode movie={{ poster_path: "/bluelock.png", title:"Blue Lock"}} />
          <ContainerNewEpisode movie={{ poster_path: "/tedlasso.png", title:"Ted Lasso"}} />
          <ContainerNewEpisode movie={{ poster_path: "/duty.png", title:"Duty"}} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full gap-4">
        <div className="w-full h-full flex flex-row gap-6 sm:gap-4 justify-center items-center">
          <ContainerTopTen movie={{ poster_path: "/suzume.png", title: "Suzume" }} />
          <ContainerTopTen movie={{ poster_path: "/guardian.png", title: "Guardian" }} />
          <ContainerFilm movie={{ poster_path: "/spiderman.png", title: "Spiderman" }} />
        </div>
        <div className="w-full h-full flex flex-row gap-6 sm:gap-4 justify-center items-center">
          <ContainerFilm movie={{ poster_path: "/sonic.png", title: "Sonic" }} />
          <ContainerFilm movie={{ poster_path: "/megan.png", title: "Megan" }} />
          <ContainerFilm movie={{ poster_path: "/dilan.png", title: "Dilan" }} />
        </div>
      </div>
    </div>
  );
};

export default MyList;
