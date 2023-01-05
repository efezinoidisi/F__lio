import { FaGithub, FaTwitter } from "react-icons/fa";
import styles from "./style.module.css";

const index = () => {
	return (
		<div className={styles.container}>
			<a href="/">
				<FaGithub style={{ color: "red" }} />
			</a>
			<a href="/">
				<FaTwitter style={{ color: "red" }} />
			</a>
		</div>
	);
};

export default index;
