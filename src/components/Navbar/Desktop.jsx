import styles from "./style.module.css";
import { Link } from "react-router-dom";
const Desktop = () => {
	return (
		<nav className={styles.nav_desktop}>
			<ul>
				<Link to={"/"}> Home</Link>
				<Link to={"/about"}> About Me</Link>

				<Link to={"/projects"}> Projects</Link>
				<Link to={"/contact"}> Contact Me</Link>
			</ul>
		</nav>
	);
};

export default Desktop;
