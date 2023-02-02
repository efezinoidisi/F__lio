import styles from "./style.module.css";
//import { useState, useEffect } from "react";
import { useTheme } from "../../context";

const index = () => {
	const darkTheme = useTheme();

	return (
		<div
			id="contact"
			className={darkTheme ? styles.container : styles.container_light}
		>
			<h2 className={styles.heading}>About Me</h2>

			<p>
				I'm Efezino Idisi, a computer science graduate who has always been
				passionate about developing amazing, responsive and user friendly web
				applications.
			</p>

			<p>
				I'm currently enrolled in ALX software engineering program and looking
				for any opportunity to contribute my skills to any given project. I
				would also like to add that am a hng cohort 9 finalist.
			</p>

			<p>
				When I'm not working I spend my time listening to music, watching
				k-dramas or reading novels.
			</p>

			<div className={darkTheme ? styles.resume : styles.resume_light}>
				<a href="/" download>
					Download Resume
				</a>
			</div>
		</div>
	);
};

export default index;
