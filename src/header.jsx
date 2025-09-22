import gdgLogo from './assets/gdg-logo.png';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src={gdgLogo} alt="GDG Logo" className="logo-img" />
                    <span>GDG RCOEM</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#alumni">Alumni</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <button className="theme-toggle" aria-label="Toggle dark mode">
                            🌙
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;