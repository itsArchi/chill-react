import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle"
import SeriesOffering from "../Fragments/SeriesOffering"

const SeriesOfferingLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-[189px] sm:h-[512px] py-10 px-20 sm:px-80 gap-8 mt-0 sm:mt-0">
            <HeadingTitle title="Series Persembahan Chill" />
            <SeriesOffering />
        </div>
    )
}

export default SeriesOfferingLayout