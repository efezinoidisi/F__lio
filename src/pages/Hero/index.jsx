import styles from "./styles.module.css";
import { useTheme } from "../../context";
import { FaGithub, FaTwitter } from "react-icons/fa";

const index = () => {
	//<a href="https://iconscout.com/illustrations/standing-lady" target="_blank">Standing lady Illustration</a> by <a href="https://iconscout.com/contributors/humaaans" target="_blank">Pablo Stanley</a>

	const darkTheme = useTheme();
	return (
		<div className={darkTheme ? styles.container : styles.container_light}>
			<div className={styles.content}>
				<h1 className={styles.heading}>
					Hello! 👋, I'm <span> Efezino</span>.
				</h1>
				<p className={styles.paragraph}>
					a junior frontend developer with a passion for bringing amazing
					designs to life
				</p>
			</div>

			<div className={darkTheme ? styles.fav_quote : styles.fav_quote_light}>
				<h5>Favourite quote </h5>
				<blockquote>
					“know yourself and you will win all battles” ― Sun Tzu, The Art of War
				</blockquote>
			</div>
		</div>
	);
};

export default index;
