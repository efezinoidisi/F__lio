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
				I'm Efezino Idisi, a junior frontend developer who has always been
				passionate about developing amazing, responsive and user friendly web
				applications that solve challenges for the people using them.
			</p>

			<p>
				I'm constantly learning about new web technologies and always eager to
				collaborate and work with other people. I am available to join a team
				and contribute my skills to a given project.
			</p>

			<p>
				When I'm not coding or learning , I spend my time
				listening to inspiring and soothing music, watching animes, k-dramas or
				reading novels.
			</p>
		</div>
	);
};

export default index;
