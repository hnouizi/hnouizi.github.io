import "./App.css";
import Header from "./components/Header";

const App = () => {
	return (
		<div className="bg-radial from-neutral-100/3 to-neutral-100/0">
			<div className="w-screen h-screen pt-5">
				<div className="w-full flex justify-center">
					<Header/>
				</div>
			</div>
		</div>
	)
}

export default App;
