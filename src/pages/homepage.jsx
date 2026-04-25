import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import "../index.css";

const MAJOR_ARCANA = [
  "TheFool", "Magician", "HighPriestess", "Empress", "Emperor", 
  "Hierophant", "TheLovers", "TheChariot", "Strength", "TheHermit", 
  "WheelOfFortune", "Justice", "TheHangedMan", "Death", "Temperance", 
  "TheDevil", "TheTower", "TheStar", "TheMoon", "TheSun", "Judgement", "TheWorld"
];
const SUITS = ["Swords", "Cups", "Wands", "Pentacles"];

const ALL_CARDS = [
  ...MAJOR_ARCANA.map((name, i) => `/${i < 10 ? '0' + i : i}-${name}.png`),
  ...SUITS.flatMap(suit => 
    Array.from({ length: 14 }, (_, i) => `/${suit}${i + 1 < 10 ? '0' + (i + 1) : i + 1}.png`)
  )
];

export default function HomePage() {
  const [randomCard, setRandomCard] = useState(() => {
    const idx = Math.floor(Math.random() * ALL_CARDS.length);
    return ALL_CARDS[idx];
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = randomCard;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setRandomCard("/00-TheFool.png"); 
  }, [randomCard]);

  return (
    <div id="homepage">
      <header className="home-header">
        <div className="hero-content">
          <h1 className="main-title-text">
            Chào mừng bạn đến với <br /> 
            <span className="brand-accent">Spyro Tarot</span>
          </h1>
          
          <div className="card-display-area">
            {!isLoaded && (
              <div className="card-loader">
                <div className="shimmer"></div>
              </div>
            )}
            
            <img 
              src={randomCard} 
              alt="Tarot Card" 
              className={`hero-card-img ${isLoaded ? "visible" : "hidden"}`} 
            />
          </div>

          <h2 className="sub-title-text">
            Gỡ rối hiện tại — Mở lối tương lai
          </h2>
        </div>
      </header>

      <main className="home-main-flex">
        <Link to="/services" className="home-box">
          <h3 className="home-title">Các gói dịch vụ</h3>
          <p className="home-desc">
            Khám phá các gói trải bài đa dạng, được thiết kế riêng để thấu hiểu từng góc khuất trong tâm hồn bạn.
          </p>
          <span className="box-footer-link">Xem chi tiết ◈</span>
        </Link>

        <Link to="/feedback" className="home-box">
          <h3 className="home-title">Đánh giá khách hàng</h3>
          <p className="home-desc">
            Lắng nghe những câu chuyện và trải nghiệm thực tế từ cộng đồng đã đồng hành cùng Spyro Tarot.
          </p>
          <span className="box-footer-link">Xem phản hồi ◈</span>
        </Link>
      </main>
    </div>
  );
}