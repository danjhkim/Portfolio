import { Link } from 'react-router-dom';

// Link to replaces a href="  if u want to do SPA"
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Dan's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;