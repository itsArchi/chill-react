import Navbar from "../Components/Fragments/Navbar";
import ComponentHero from "../Components/Fragments/ComponentHero";
import ContinueWatchingFilmLayout from "../Components/Layout/ContinueWatchingFilmLayout";
import TopRatingLayout from "../Components/Layout/TopRatingLayout";
import TrendingLayout from "../Components/Layout/TrendingLayout";
import NewReleaseLayout from "../Components/Layout/NewReleaseLayout";

const TestPage = () => {
  return (
    <div className="bg-[#181A1C]">
      <Navbar />
      <ComponentHero />
      <ContinueWatchingFilmLayout />
      <TopRatingLayout />
      <TrendingLayout />
      <NewReleaseLayout />
    </div>
  );
};

export default TestPage;