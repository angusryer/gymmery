import { Form, Link } from "remix";
import { H1 } from "~/components/H1";
import type { FormEvent } from "react";
import styles from "./index.css";

const EMAIL = "email";
const PASS = "password";

type LoginFormProps = FormEvent<HTMLFormElement>;

export const links = () => {
	return [{ rel: "stylesheet", href: styles }];
};

export const action = () => {};

export default function Login() {
	const onLogin = (event: LoginFormProps) => {
		if (!event.currentTarget[EMAIL] || !event.currentTarget[PASS]) {
			return;
		}
		console.log(
			"Logged in.",
			event.currentTarget[EMAIL],
			event.currentTarget[PASS]
		);
	};
	return (
		<main>
			<H1>Start using Gymmery</H1>
			<Link to='/'>Home</Link>
			<Form method='post' onSubmit={(e) => onLogin(e)} className='login__form'>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' />
				<label htmlFor='password'>Password</label>
				<input type='password' name='pass' />
				<button type='submit' className='login__submit'>
					Log in
				</button>
				<iframe
					src='https://docs.google.com/forms/d/e/1FAIpQLSeXD9Xhd25ABvvk4trZURMY9gazTcMXtffJaAYbjLvvuc6QeQ/viewform?embedded=true'
					width='640'
					height='4091'
					frameBorder='0'
				>
					Loading…
				</iframe>
			</Form>
		</main>
	);
}

export function ErrorBoundary({ error }: { error: Error }) {
	return (
		<div>
			<h1>Error</h1>
			<p>{error.message}</p>
			<p>The stack trace is:</p>
			<pre>{error.stack}</pre>
		</div>
	);
}
