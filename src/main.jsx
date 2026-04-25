import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  document.body.style.backgroundPositionY = `${scrollValue * 0.2}px`;
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
