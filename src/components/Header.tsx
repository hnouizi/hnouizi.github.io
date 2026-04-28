import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    const tabs = ["Home", "Education", "Experience", "Projects"];

    return (
        <header className="absolute w-full flex justify-center mt-5 z-99">
            <div className="flex items-center fixed pl-2 pr-4 py-2 rounded-full bg-darkgray-95/90 backdrop-blur-sm border-1 border-darkgray-80 font-semibold sm:text-lg">
                {/* nav buttons */}
                <div className="flex sm:pr-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className="px-3 py-1 rounded-full hover:bg-white/5 active:bg-white/7 transition-colors duration-150"
                            onClick={() => {
                                const element = document.getElementById(tab.toLowerCase());
                                element?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="not-sm:hidden text-darkgray-80"> | </div>
                {/* gh & in buttons */}
                <div
                    className="not-sm:hidden flex gap-3 pl-4">
                    <a
                        className="flex items-center cursor-pointer"
                        href="https://github.com/hnouizi"
                        target="_blank"
                    >
                        <FaGithub className="text-lg sm:text-2xl hover:text-neutral-300 active:text-neutral-400 transition-colors duration-150"/>
                    </a>
                    <a
                        className="flex items-center cursor-pointer"
                        href="https://www.linkedin.com/in/hanna-nouizi/"
                        target="_blank"
                    >
                        <FaLinkedin className="text-lg sm:text-2xl hover:text-neutral-300 active:text-neutral-400 transition-colors duration-150"/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;