import { Link } from "remix";

export default function Index() {
  return (
    <main>
      <h1>Gymmery</h1>
      <p>Some header and maybe blog content here?</p>
      <Link to="/login">Login</Link>
    </main>
  )
}
