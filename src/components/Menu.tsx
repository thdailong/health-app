import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  to: string;
}

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  anchorEl?: HTMLElement | null;
}

const Menu = ({ isOpen, onClose, items, anchorEl }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Add a small delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, anchorEl]);

  // Freeze scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      // If scrollbar is visible, add padding to prevent content shift and only on laptop
      if (window.innerWidth >= 1024) {
        document.body.style.paddingRight = "15px";
      }
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculate position based on anchor element
  const getMenuPosition = () => {
    if (!anchorEl) {
      return { top: "64px", right: "0" };
    }

    const rect = anchorEl.getBoundingClientRect();
    return {
      top: `${rect.bottom}px`,
      right: `${window.innerWidth - rect.right}px`,
    };
  };

  const position = getMenuPosition();

  const menuContent = (
    <div
      ref={menuRef}
      className="absolute w-[280px] bg-gray-400 shadow-custom z-50"
      style={position}
    >
      {items.map((item, index) => (
        <Link
          key={item.label}
          to={item.to}
          onClick={onClose}
          className={`block px-8 py-6 text-white text-lg no-underline hover:bg-dark-500 transition-colors border-t border-t-white/15 ${
            index !== items.length - 1 ? "border-b border-dark-600/25" : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  return createPortal(menuContent, document.body);
};

export default Menu;
