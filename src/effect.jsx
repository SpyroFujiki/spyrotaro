import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const requestRef = useRef();

  const stopScroll = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
  };

  const scrollToTop = (duration = 800) => {
    stopScroll();
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, start * (1 - ease));

      if (timeElapsed < duration) {
        requestRef.current = requestAnimationFrame(animateScroll);
      }
    };
    requestRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToTop(1000);
    }, 100);

    const cancelEvents = ["mousedown", "wheel", "touchstart", "touchmove", "keydown"];
    cancelEvents.forEach(event => window.addEventListener(event, stopScroll));

    return () => {
      clearTimeout(timer);
      stopScroll();
      cancelEvents.forEach(event => window.removeEventListener(event, stopScroll));
    };
  }, [pathname]);

  useEffect(() => {
    const handleSamePage = (e) => {
      const link = e.target.closest("a");
      if (link && link.getAttribute("href") === pathname) {
        scrollToTop(1000);
      }
    };
    document.addEventListener("click", handleSamePage);
    return () => document.removeEventListener("click", handleSamePage);
  }, [pathname]);

  return null;
}