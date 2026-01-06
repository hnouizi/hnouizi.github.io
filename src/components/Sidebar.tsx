import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Sidebar = () => {
    const tabs = ["Home", "Education", "Experience", "Projects"];
    const [ isExpanded, setIsExpanded ] = useState<boolean>(false);

    return (
        <>
            <div className={`absolute fixed h-screen w-1/3 min-w-40 flex flex-col gap-5 pl-6 bg-darkgray-100 text-lg font-medium z-1 transition-transform duration-400 ${isExpanded ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="w-full flex justify-end pt-3 pr-3">
                    <button
                        className="text-2xl hover:text-neutral-300 active:text-neutral-400 transition-colors duration-150"
                        onClick={() => setIsExpanded(false)}
                    >
                        <IoClose/>
                    </button>
                </div>
                {tabs.map((tab) => (
                    <div key={tab}>
                        <button className="transform-all duration-200 border-b-2 border-darkgray-100 hover:border-lightorange">
                            {tab}
                        </button>
                    </div>
                ))}
            </div>
            <div className={`absolute fixed w-screen h-screen bg-neutral-100/5 transition-opacity duration-400 ${isExpanded ? "opacity-100" : "opacity-0"}`}/>
            <div className="absolute">
                <button
                    className="ml-4 mt-4 text-4xl"
                    onClick={() => setIsExpanded(true)}
                >
                    <IoMenu/>
                </button>
            </div>
        </>
    )
}

export default Sidebar;