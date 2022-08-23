import { Link, useLoaderData } from "remix";
import { H1 } from "~/components/H1";

export type DataType = {
	item: string;
};

export const loader = async (): Promise<DataType[]> => {
	return new Promise<DataType[]>((resolve) => {
		setTimeout(() => {
			resolve([
				{
					item: "1"
				},
				{
					item: "2"
				},
				{
					item: "3"
				}
			]);
		}, 2000);
	});
};

const logout = () => {
	console.log("Logged out.");
	localStorage.removeItem("token");
};

export default function Dashboard() {
	const data = useLoaderData<DataType[]>();

	return (
		<main>
			<H1>Your Gymmery</H1>
			<Link onClick={logout} to='/'>
				Logout
			</Link>
			{!data
				? null
				: data.map((item) => (
						<div key={item.item}>
							<p>{item.item}</p>
						</div>
				  ))}
		</main>
	);
}
