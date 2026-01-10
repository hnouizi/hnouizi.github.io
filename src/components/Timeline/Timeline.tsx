import TimelineVertical from "./TimelineVertical";
import TimelineHorizontal from "./TimelineHorizontal";

type TimelineProps = {
    isVertical?: boolean
}

const Timeline = ({ isVertical }: TimelineProps) => {
    return (
        <div>
            {isVertical
                ? <TimelineVertical/>
                : <TimelineHorizontal/>
            }
        </div>
    )
}

export default Timeline;