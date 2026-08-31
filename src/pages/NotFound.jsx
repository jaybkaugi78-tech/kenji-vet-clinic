import { Link } from 'react-router-dom';
export default function NotFound(){return <section className="page-hero"><span className="label">404</span><h1>That page could not be found.</h1><p>The page may have moved or the address may be incorrect.</p><Link className="btn primary" to="/">Return Home</Link></section>}
