import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
import TopRating from "../Fragments/TopRating";

const TopRatingLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[512px] py-10 px-80 gap-8">
      <HeadingTitle title="Top Rating Film dan Series Hari ini" />
      <TopRating />
    </div>
  );
};

export default TopRatingLayout;
