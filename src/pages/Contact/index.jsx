import { useState } from "react";
import Input from "../../components/Input/Index";
import styles from "./style.module.css";

const index = () => {
	const [values, setValues] = useState({
		fullname: "",
		email: "",
		message: "Hello, I would love to ...",
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
		<div className={styles.container}>
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
						></textarea>
					</div>

					<div className={styles.btn_wrap}>
						<button type="submit">Send</button>
					</div>
				</form>

				<div className={styles.aside}>
					<p>
						Do you have any questions or would love to collaborate, Kindly send me a message and I would get back to you.
					</p>
				</div>
			</div>
		</div>
	);
};

export default index;
