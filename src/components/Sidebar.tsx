import { IoClose, IoMenu } from "react-icons/io5";

const Sidebar = () => {
    const tabs = ["Home", "Education", "Experience", "Projects"];

    return (
        <>
            <div className="absolute fixed h-screen w-40 flex flex-col gap-5 pl-6 bg-darkgray-100 text-lg font-medium z-1">
                <div className="w-full flex justify-end pt-3 pr-3">
                    <IoClose className="text-2xl"/>
                </div>
                {tabs.map((tab) => (
                    <div>
                        <button className="transform-all duration-200 border-b-2 border-darkgray-100 hover:border-lightorange">
                            {tab}
                        </button>
                    </div>
                ))}
            </div>
            <div className="absolute fixed w-screen h-screen bg-neutral-100/5"/>
            <div className="absolute">
                <button className="ml-4 mt-4">
                    <IoMenu className="text-4xl"/>
                </button>
            </div>
        </>
    )
}

export default Sidebar;