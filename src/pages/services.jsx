import React from "react";
import "./services.css";
import servicesData from "../data/servicesData.json";
import { SOCIAL_LINKS } from "../constants";

export const Services = () => {
  const fbPageUrl = SOCIAL_LINKS.FACEBOOK;

  return (
    <section id="services-section">
      <div className="services-container">
        <header className="services-header">
          <h2 className="services-title">Các gói dịch vụ</h2>
          <p className="services-subtitle">Chọn gói trải bài phù hợp với năng lượng của bạn</p>
        </header>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-top">
                <div className="icon-wrapper">
                  <img 
                    src={`/assets/${service.icon}`} 
                    alt={service.title} 
                    className="service-icon" 
                  />
                </div>
                <h3 className="service-name">{service.title}</h3>
                <p className="service-price">{service.price}</p>
              </div>

              <div className="service-expand-content">
                <div className="expand-inner">
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="btn-container">
                    <a 
                      href={fbPageUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="service-btn"
                    >
                      Đặt lịch ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};