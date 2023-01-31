import styles from "./styles.module.css";
import { useTheme } from "../../context";
import {
	FaGithub,
	FaTwitter,
	FaPython,
	FaReact,
	FaGitSquare,
} from "react-icons/fa";
import { SiJavascript, SiGithub, SiCss3, SiHtml5 } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const index = () => {
	//<a href="https://iconscout.com/illustrations/standing-lady" target="_blank">Standing lady Illustration</a> by <a href="https://iconscout.com/contributors/humaaans" target="_blank">Pablo Stanley</a>

	const navigate = useNavigate();
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

				<div className={styles.skills_content}>
					<SiHtml5 />
					<SiCss3 />
					<SiJavascript />
					<FaReact />
					<FaGitSquare />
					<FaGithub />
					<FaPython />
				</div>
				<button
					type="button"
					onClick={() => navigate("/contact")}
					className={darkTheme ? styles.contact : styles.contact_light}
				>
					Contact Me!
				</button>
			</div>

			<div className={darkTheme ? styles.fav_quote : styles.fav_quote_light}>
				<h5>Favourite quote </h5>
				<blockquote>
					“know yourself and you will win all battles”{" "}
					<em>― Sun Tzu, The Art of War</em>
				</blockquote>
			</div>
		</div>
	);
};

export default index;
