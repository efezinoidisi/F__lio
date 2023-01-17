import { FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useToggle, useTheme } from "../../context";
import styles from "./style.module.css";

const index = () => {
	const toggle = useToggle();
	const darkTheme = useTheme();
	return (
		<div className={styles.container}>
			<div
				onClick={toggle}
				className={darkTheme ? styles.toggle : styles.toggle_light}
			>
				{darkTheme ? (
					<BsFillSunFill style={{ color: "yellow" }} />
				) : (
					<BsFillMoonFill style={{ color: "#110111" }} />
				)}
			</div>
			<div className={styles.socials}>
				<a href="/">
					<FaGithub style={{ color: "red" }} />
				</a>
				<a href="/">
					<FaTwitter style={{ color: "red" }} />
				</a>
			</div>
		</div>
	);
};

export default index;
