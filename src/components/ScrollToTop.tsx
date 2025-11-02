import { useState, useEffect } from "react";
import Icons from "@/assets/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px from top
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 border border-gray-400 rounded-full shadow-custom flex items-center justify-center cursor-pointer bg-white transition-all duration-300 hover:bg-primary-400 z-40"
          aria-label="Scroll to top"
        >
          <Icons.ChevronUp className="w-6 h-6 text-gray-400" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
