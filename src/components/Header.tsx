const Header = () => {
    const tabs = ["Home", "Education", "Experience", "Projects"];

    return (
        <div className="w-full flex justify-center">
            <div className="flex items-center gap-3 px-3 py-2 rounded-full border-1 border-darkgray-80">
                <div className="flex gap-5">
                    {tabs.map((tab) => (
                        <div key={tab}>
                            {tab}
                        </div>
                    ))}
                </div>
                <div>
                    |
                </div>
                <i className="devicon-github-original text-2xl hover:text-neutral-300 active:text-neutral-400 transition-colors duration-150 cursor-pointer"/>
                <i className="devicon-linkedin-plain text-2xl hover:text-neutral-300 active:text-neutral-400 transition-colors duration-150 cursor-pointer"/>
            </div>
        </div>
    )
}

export default Header;