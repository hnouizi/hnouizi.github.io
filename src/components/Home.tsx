import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <div
            id="home"
            className="h-screen w-full flex justify-center items-center"
        >
            <div className="flex justify-center items-center max-sm:flex-col max-sm:gap-10 sm:gap-15">
                <div className="max-sm:w-2/3 max-sm:max-w-120 sm:w-80"> 
                    <img className="rounded-full" src="headshot.png"/>
                </div>
                <div className="flex flex-col max-sm:text-center">
                    <div className="text-[2.5rem] font-bold">
                        Hanna Nouizi
                    </div>
                    <div className="text-2xl font-semibold text-cobaltblue">
                        Software Engineer
                    </div>
                    <div
                        className="sm:hidden w-full flex justify-center items-center gap-2 text-gray-300 mt-1 text-[0.9rem]">
                        <a
                            className="flex items-center gap-2 cursor-pointer hover:text-gray-400 active:text-gray-500 transition-colors duration-150"
                            href="https://github.com/hnouizi"
                            target="_blank"
                        >
                            <FaGithub/>
                            GitHub
                        </a>
                        <span className="text-2xl text-lightorange"> &#8226; </span>
                        <a
                            className="flex items-center gap-2 cursor-pointer hover:text-gray-400 active:text-gray-500 transition-colors duration-150"
                            href="https://www.linkedin.com/in/hanna-nouizi/"
                            target="_blank"
                        >
                            <FaLinkedin/>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;