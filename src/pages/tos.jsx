import React, { useState } from "react";
import "./tos.css";
import tosData from "../data/tosData.json";
import { SOCIAL_LINKS } from "../constants";

const AccordionItem = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`tos-item ${isOpen ? "active" : ""}`}>
      <div className="tos-item-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{section.id}. {section.heading}</h3>
        <span className="tos-icon">{isOpen ? "−" : "+"}</span>
      </div>
      
      <div className="tos-item-content">
        <div className="tos-content-inner">
          {/* Mục 1, 3, 5, 7 */}
          {section.content && (
            <ul className="tos-list">
              {section.content.map((text, i) => <li key={i}>{text}</li>)}
            </ul>
          )}

          {section.sub_sections && (
            <div className="tos-scope-grid">
              <div className="scope-box accepted">
                <h4>Nội dung nhận tư vấn</h4>
                <ul className="tos-list">
                  {section.sub_sections.accepted_content.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
              <div className="scope-box denied">
                <h4>Nội dung từ chối</h4>
                <ul className="tos-list">
                  {section.sub_sections.denied_content.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            </div>
          )}

          {section.payment_terms && (
            <ul className="tos-list">
              {section.payment_terms.map((term, i) => <li key={i}>{term}</li>)}
            </ul>
          )}
          {section.refund_policies && (
            <div className="refund-container">
              <p className="refund-line green"><strong>Hoàn phí khi:</strong> {section.refund_policies.refund_when.join("; ")}</p>
              <p className="refund-line red"><strong>Không hoàn phí:</strong> {section.refund_policies.no_refund.join("; ")}</p>
            </div>
          )}

          {section.not_included && (
            <div className="exclude-section">
              <strong className="exclude-title">Hậu mãi không bao gồm:</strong>
              <ul className="tos-list">
                {section.not_included.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}

          {section.special_notes && (
            <div className="special-highlight">
              <span className="glow-icon">✦</span>
              <p>{section.special_notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const TOS = () => {
  return (
    <div id="tos-page">
      <div className="tos-container">
        <header className="tos-header">
          <h1 className="tos-title">{tosData.title}</h1>
          <p className="tos-subtitle">{tosData.introduction}</p>
        </header>
        <div className="tos-accordion">
          {tosData.sections.map((section) => (
            <AccordionItem key={section.id} section={section} />
          ))}
        </div>
        <div className="tos-footer">
          <div className="tos-confirmation-card">
            <h2>{tosData.confirmation.warning}</h2>
            <p>{tosData.confirmation.message}</p>
          </div>
          <div className="tos-cta">
            <a href={SOCIAL_LINKS.MESSENGER} target="_blank" rel="noreferrer" className="btn-facebook">
              Kết nối qua Messenger Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};