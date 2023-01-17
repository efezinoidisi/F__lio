import Navbar from "../../components/Navbar";
import Hero from "../Hero/index";
import Contact from "../Contact/index";
import About from "../About/index";
import Sidebar from "../../components/Sidebar/index";
import styles from "./style.module.css";
import Projects from "../Projects/index"

const index = () => {
	

	return (
		<div>
			<Navbar />
			<Sidebar />
			<Hero />
      <About />
      <Projects/>
			<Contact />
		</div>
	);
};

export default index;
