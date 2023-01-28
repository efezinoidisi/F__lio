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
					<BsFillSunFill className={styles.lightmode} />
				) : (
					<BsFillMoonFill className={styles.darkmode} />
				)}
			</div>
			<div className={styles.socials}>
				<a href="https://github.com/efezinoidisi">
					<FaGithub
						className={darkTheme ? styles.socials_d : styles.socials_l}
					/>
				</a>
				<a href="https://twitter.com/_zeeknow">
					<FaTwitter
						className={darkTheme ? styles.socials_d : styles.socials_l}
					/>
				</a>
			</div>
		</div>
	);
};

export default index;
