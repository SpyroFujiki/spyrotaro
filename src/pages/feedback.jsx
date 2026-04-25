import React, { useState } from "react";
import "./feedback.css";

export const Feedback = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  // SỐ FEEDBACK ĐƯỢC HIỂN THỊ TRONG FOLDER FEEDBACK, TỰ ĐỘNG TẠO DANH SÁCH ẢNH DỰA TRÊN SỐ NÀY
  const totalFeedbacks = 6; 

  const images = Array.from({ length: totalFeedbacks }, (_, i) => `./Feedback/${i + 1}.png`);

  return (
    <section id="feedback-section">
      <div className="feedback-container">
        <header className="feedback-header">
          <h2 className="feedback-title">Phản hồi khách hàng</h2>
          <p className="feedback-subtitle">Trải nghiệm thực tế từ những người đã ghé thăm Spyro Taro</p>
        </header>
        
        <div className="feedback-grid">
          {images.map((imgUrl, index) => (
            <div 
              key={index} 
              className="feedback-item"
              onClick={() => setSelectedImg(imgUrl)}
            >
              <img 
                src={imgUrl} 
                alt={`Feedback ${index + 1}`} 
                className="fb-thumb"
                onError={(e) => e.target.parentElement.style.display = 'none'} 
              />
              <div className="fb-hover-overlay">
                <span>Phóng to</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="fb-modal" onClick={() => setSelectedImg(null)}>
          <div className="fb-modal-content">
            <img src={selectedImg} alt="Feedback phóng to" />
            <button className="fb-close-btn">&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};