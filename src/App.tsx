import "./App.css";
import Header from "./components/Header";
//import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
//import Education from "./components/Education";
//import { useMediaQuery } from "react-responsive";
import Experience from "./components/Experience";

const App = () => {
	//const isSmallScreen = useMediaQuery({query: '(max-width: 700px)'});

	return (
		<div className="relative flex flex-col items-center bg-radial from-darkgray-95 to-darkgray-100">
			<Header/>
			<div className="max-sm:mx-6 sm:max-w-160">
				<Home/>
				<Experience/>
			</div>
		</div>
	)
}

export default App;
