import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
	return (
		<div className="relative flex flex-col sm:items-center bg-radial from-darkgray-95 to-darkgray-100 pb-5">
			<Header/>
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
