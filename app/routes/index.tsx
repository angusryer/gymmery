import { Link } from "remix";
import { H1 } from "~/components/H1";

export default function Index() {
	return (
		<main>
			<H1>Gymmery</H1>
			<Link to='/login'>Log in to your Gymmery account</Link>
			<p>Some header and maybe blog content here?</p>
		</main>
	);
}
