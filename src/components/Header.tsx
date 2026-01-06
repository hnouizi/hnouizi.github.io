const Header = () => {
    const tabs = ["Home", "Education", "Experience", "Projects"];

    return (
        <div className="flex items-center fixed pl-2 pr-4 py-2 rounded-full bg-darkgray-97/95 backdrop-blur-md border-1 border-darkgray-80 font-semibold text-lg">
            {/* nav buttons */}
            <div className="flex gap-1 pr-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className="px-3 py-1 rounded-full hover:bg-white/5 transition-colors duration-150"
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div> | </div>
            {/* gh & in buttons */}
            <div className="flex gap-3 pl-4">
                <button
                    className="flex items-center text-2xl hover:text-neutral-400 active:text-neutral-500
                                transition-colors duration-150"
                >
                    <i className="devicon-github-original"/>
                </button>
                <button
                    className="flex items-center text-2xl hover:text-neutral-400 active:text-neutral-500
                                transition-colors duration-150"
                >
                    <i className="devicon-linkedin-plain"/>
                </button>
            </div>
        </div>
    )
}

export default Header;