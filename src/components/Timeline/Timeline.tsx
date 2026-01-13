import TimelineVertical from "./TimelineVertical";
import TimelineHorizontal from "./TimelineHorizontal";
import { type ReactNode } from "react";

type TimelineProps = {
    isVertical?: boolean,
    children: ReactNode
}

const Timeline = ({ isVertical, children }: TimelineProps) => {
    return (
        <div>
            {isVertical
                ? <TimelineVertical sections={children}/>
                : <TimelineHorizontal sections={children}/>
            }
        </div>
    )
}

export default Timeline;