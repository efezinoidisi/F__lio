import styles from "./styles.module.css"
import { useTheme } from "../../context";
const index = () => {
	//<a href="https://iconscout.com/illustrations/standing-lady" target="_blank">Standing lady Illustration</a> by <a href="https://iconscout.com/contributors/humaaans" target="_blank">Pablo Stanley</a>
	
	const darkTheme = useTheme()
	return (
		<div className={darkTheme?styles.container:styles.container_light}>
			<h1 className={darkTheme? styles.heading:styles.heading_light}>Hello! 👋</h1>
			<p className={darkTheme?styles.paragraph:styles.paragraph_light}>
				I'm Efezino, a junior frontend developer with a passion for bringing
				amazing designs to life
			</p>
		</div>
	);
};

export default index;
