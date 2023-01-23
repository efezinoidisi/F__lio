import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from "./style.module.css";
import { useTheme, useToggle } from "../../context";
const index = () => {
	const darkTheme = useTheme();
	const toggle = useToggle();

	return (
		<div
			onClick={toggle}
			className={darkTheme ? styles.toggle : styles.toggle_light}
		>
			{darkTheme ? (
				<BsFillSunFill
					className={darkTheme ? styles.darkmode : styles.lightmode}
				/>
			) : (
				<BsFillMoonFill
					className={darkTheme ? styles.darkmode : styles.lightmode}
				/>
			)}
		</div>
	);
};

export default index;
