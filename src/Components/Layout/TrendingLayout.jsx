import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
import Trending from "../Fragments/Trending";

const TrendingLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[512px] py-10 px-80 gap-8">
      <HeadingTitle title="Film Trending" />
      <Trending />
    </div>
  );
};

export default TrendingLayout;
