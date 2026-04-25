import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src="/assets/icon.svg" alt="Spyro Taro" />
        </Link>

        <div className="menu-trigger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
        </div>

        {/* Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="selector" onClick={() => setIsMenuOpen(false)}>
            <div className="label">Trang chủ</div>
          </Link>
          <Link to="/services" className="selector" onClick={() => setIsMenuOpen(false)}>
            <div className="label">Dịch vụ</div>
          </Link>
          <Link to="/tos" className="selector" onClick={() => setIsMenuOpen(false)}>
            <div className="label">Điều khoản</div>
          </Link>
          <Link to="/feedback" className="selector" onClick={() => setIsMenuOpen(false)}>
            <div className="label">Đánh giá</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;