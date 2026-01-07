import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Education from "./components/Education";
import { useMediaQuery } from "react-responsive";

const App = () => {
	const isSmallScreen = useMediaQuery({query: '(max-width: 700px)'});

	return (
		<div className="relative bg-radial from-darkgray-95 to-darkgray-100">
			{!isSmallScreen 
				? <Header/>
				: <Sidebar/>
			}

			<Home isSmallScreen={isSmallScreen}/>
			<Education isSmallScreen={isSmallScreen}/>
		</div>
	)
}

export default App;
