import { Children, type ReactNode } from "react";
import { IoSchool } from "react-icons/io5";

type TimelineHorizontal = {
    sections: ReactNode
}

const TimelineHorizontal = ({ sections }: TimelineHorizontal) => {
    return (
        <div className="w-fit flex gap-5 relative">
            {Children.map(sections, section => (
                <div className="w-fit flex flex-col gap-5 items-center">
                    <div>
                        {section}
                    </div>
                    <div className="bg-cobaltblue p-2 rounded-full border-5 z-1">
                        {Children.count(sections) <= 2
                            ? <IoSchool className="text-3xl"/>
                            : <div> hi </div>
                        }
                    </div>
                </div>
            ))}
            <div className="border-3 absolute w-full top-49 rounded"/>
        </div>
    )
}

export default TimelineHorizontal;