import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
import ContinueWatcingSeries from "../Fragments/ContinueWatchingSeries";

const ContinueWatchingSeriesLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[235px] sm:h-[309px] py-5 sm:py-10 px-40 sm:px-80 gap-5 sm:gap-8">
      <HeadingTitle title="Melanjutkan Tonton Film" />
      <ContinueWatcingSeries />
    </div>
  );
};

export default ContinueWatchingSeriesLayout;