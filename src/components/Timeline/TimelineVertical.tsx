import { Children, type ReactNode } from "react";
import { IoSchool } from "react-icons/io5";

type TimelineVerticalProps = {
    sections: ReactNode
}

const TimelineVertical = ({ sections }: TimelineVerticalProps) => {
    return (
        <div className="h-fit flex flex-col gap-5 relative">
            {Children.map(sections, section => (
                <div className="w-fit flex gap-5 items-center">
                    <div className="bg-cobaltblue p-2 rounded-full border-5 z-1">
                        {Children.count(sections) <= 2
                            ? <IoSchool className="text-3xl"/>
                            : <div> hi </div>
                        }
                    </div>
                    <div>
                        {section}
                    </div>
                </div>
            ))}
            <div className="border-3 absolute h-full rounded left-6.5"/>
        </div>
    )
}

export default TimelineVertical;