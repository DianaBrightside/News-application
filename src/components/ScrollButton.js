import { useEffect } from "react";
import { useState } from "react";
import "../styles/style.css";

const ScrollButton = () => {
  const [isActive, setActive] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setActive(true);
    } else if (scrolled < 100) {
      setActive(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div className="wrapper button__wrapper">
      <button
        onClick={scrollToTop}
        className={isActive ? "scrollToTop scroll__active" : "scrollToTop"}
      >
        Scroll up
      </button>
    </div>
  );
};

export default ScrollButton;
