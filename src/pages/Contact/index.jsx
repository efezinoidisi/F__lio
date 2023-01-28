import { useState } from "react";
import Input from "../../components/Input/Index";
import styles from "./style.module.css";
import { useTheme } from "../../context";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";


const index = () => {
	
	const darkTheme = useTheme();
	const [values, setValues] = useState({
		fullname: "",
		email: "",
		message: "",
	});
	const data = [
		{
			id: "fullname",
			title: "Name",
			type: "text",
			placeholder: "Please enter your fullname",
			value: values.fullname,
		},
		{
			id: "email",
			title: "Email",
			type: "email",
			placeholder: "Please enter your email address",
			value: values.email,
		},
	];

	const handleChange = (e) => {
		const { value, name } = e.target;
		setValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	console.log(values);
	const first_part = data.map((item) => (
		<Input key={item.id} handleChange={handleChange} {...item} />
	));

	//action="https://getform.io/f/d557671d-44a1-425c-9c37-ff375d9768ef"
	//method = "POST";
	return (
		<div className={darkTheme ? styles.container : styles.container_light}>
			<h2>Contact me</h2>

			<div className={styles.wrapper}>
				<form className={styles.form}>
					{first_part}

					<div>
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							cols="30"
							rows="10"
							value={values.message}
							onChange={handleChange}
							placeholder={"Hello, I would love to ..."}
						></textarea>
					</div>

					<div className={styles.btn_wrap}>
						<button type="submit">Send</button>
					</div>
				</form>

				<div className={styles.aside}>
					<p>
						Do you have any questions or just want to chat, Kindly send me a
						message and I would get back to you.
					</p>

					<div className={styles.details}>
						<ul>
							<li>
								<CiLocationOn
									className={darkTheme ? styles.icons : styles.icons_light}
								/>{" "}
								Delta state, Nigeria.
							</li>

							<li>
								<FiPhoneCall
									className={darkTheme ? styles.icons : styles.icons_light}
								/>{" "}
								08169209097
							</li>

							<li>
								<TfiEmail
									className={darkTheme ? styles.icons : styles.icons_light}
								/>{" "}
								efezinoeidisi@gmail.com
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
