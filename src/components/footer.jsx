import "./footer.css";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Khối nhận diện: Logo và Chữ nằm ngang hàng */}
        <div className="footer-identity">
          <img src="/assets/icon.svg" alt="Spyro Tarot Logo" className="footer-logo-img" />
          
          <div className="brand-info">
            <h2 className="brand-name">SPYRO TARO</h2>
            <p className="brand-slogan">Gỡ rối hiện tại - Mở lối tương lai</p>
          </div>
        </div>

        {/* Khối hành động: Điều hướng và Nút Social */}
        <div className="footer-actions">
          <div className="footer-nav">
            <Link to="/services">Dịch vụ</Link>
            <Link to="/tos">Điều khoản</Link>
            <Link to="/feedback">Đánh giá</Link>
          </div>
          
          <div className="footer-contact">
            <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="fb-button">
              Kết nối qua Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Spyro Taro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;