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
                </div>
            </div>
        </div>
    )
}

export default Home;