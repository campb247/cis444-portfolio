// top level app, renders navbar and routed pages
import { useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  // mobile menu open state
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  // true only on home page, controls which nav links show
  const onHome = pathname === '/';

  // closes mobile menu after link click
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Kaden Campbell
        </Link>
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {/* anchor links only on home, otherwise show home link */}
          {onHome ? (
            <>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </>
          ) : (
            <Link to="/" onClick={closeMenu}>Home</Link>
          )}
          <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Kaden Campbell · Built with React & Vite for CIS 444</p>
      </footer>
    </div>
  );
}

export default App;
