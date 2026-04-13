import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { useMediaQuery } from "react-responsive";

const App = () => {
	const isSmallScreen = useMediaQuery({query: '(max-width: 639px)'});

	return (
		<div className="relative flex flex-col sm:items-center bg-radial from-darkgray-95 to-darkgray-100">
			{isSmallScreen
				? <Sidebar/>
				: <Header/>
			}
			<div className="max-sm:w-full max-sm:px-6 sm:w-156">
				<Home/>
				<Education/>
				<Experience/>
				<Projects/>
			</div>
		</div>
	)
}

export default App;
