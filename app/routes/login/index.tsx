import { Link } from "remix";
import styles from "./index.css";

export const links = () => {
    return [{ rel: "stylesheet", href: styles }]
} 

export default function Login() {
    return (
        <main>
            <h1 className="logintitle">Login</h1>
            <Link to="/">Home</Link>
            <Link to="/app/dashboard">Dashboard</Link>
        </main>
    )
}