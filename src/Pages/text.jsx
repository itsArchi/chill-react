import Navbar from "../Components/Fragments/Navbar";
import ComponentHero from "../Components/Fragments/ComponentHero";
import ContinueWatchingFilmLayout from "../Components/Layout/ContinueWatchingFilmLayout";

const TestPage = () => {
  return (
    <div className="bg-[#181A1C]">
      <Navbar />
      <ComponentHero />
      <ContinueWatchingFilmLayout />
    </div>
  );
};

export default TestPage;