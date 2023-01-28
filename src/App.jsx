import { Routes, Route, Outlet } from "react-router-dom";
import Change from "./pages/home/index";
import "./App.css";
import { ThemeProvider } from "./context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Hero from "./pages/hero/Hero";
import Navbar from "./components/Navbar/Index";
import Work from "./pages/projects/Projects";
import Footer from "./components/Footer/Index";

function App() {


	return (
		<div className="App">
			<ThemeProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Work />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Change />
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
