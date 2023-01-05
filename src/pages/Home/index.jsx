import Navbar from "../../components/Navbar";
import Hero from "../Hero/index";
import Contact from "../Contact/index";
import About from "../About/index";
import Sidebar from "../../components/Sidebar/index";
import styles from "./style.module.css";

const index = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<Hero />
			<About />
			<Contact />
		</div>
	);
};

export default index;
