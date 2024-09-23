import { Link } from "react-router-dom";

const Navbar = () => {
    const linkStyle = { 
        color: '#fff', 
        fontWeight: 'bold', 
        fontFamily: 'Arial',
        backgroundColor: '#f1356d',
        borderRadius: '5px',
    }
    return (
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={linkStyle}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;