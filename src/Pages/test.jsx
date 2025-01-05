import Navbar from "../Components/Fragments/Navbar";
import ComponentHero from "../Components/Fragments/ComponentHero";
import ContinueWatchingFilmLayout from "../Components/Layout/ContinueWatchingFilmLayout";
import FilmContainer from "../Components/Fragments/FilmContainer";

const TestPage = () => {
  return (
    <div className="bg-[#181A1C]">
      <Navbar />
      <ComponentHero />
      <ContinueWatchingFilmLayout />
      <FilmContainer />
    </div>
  );
};

export default TestPage;