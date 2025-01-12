import ComponentHeroSeries from "../Components/Fragments/ComponentHeroSeries";
import Footer from "../Components/Fragments/Footer";
import Navbar from "../Components/Fragments/Navbar";
import ContinueWatchingFilmLayout from "../Components/Layout/ContinueWatchingFilmLayout";
import NewReleaseLayout from "../Components/Layout/NewReleaseLayout";
import SeriesOfferingLayout from "../Components/Layout/SeriesOfferingLayout";
import TopRatingLayout from "../Components/Layout/TopRatingLayout";
import TrendingLayout from "../Components/Layout/TrendingLayout";

const SeriesPage = () => {
  return <div className="bg-[#181A1C]">
    <Navbar hideLogoText={true}/>
    <ComponentHeroSeries />
    <ContinueWatchingFilmLayout />
    <SeriesOfferingLayout />
    <TopRatingLayout />
    <TrendingLayout />
    <NewReleaseLayout />
    <Footer />
  </div>;
};

export default SeriesPage;