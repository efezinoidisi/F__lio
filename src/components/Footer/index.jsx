import styles from "./style.module.css";
import { useTheme } from "../../context";

const index = () => {
	const d = new Date();
	const currentDate = d.getFullYear();
	const darkTheme = useTheme()
	return (
		<footer className={darkTheme?styles.container:styles.container_light}>
			
			<p>&copy; {currentDate} Efezino</p>
		</footer>
	);
};

export default index;
