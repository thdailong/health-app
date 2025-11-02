import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.svg";
import Icons from "@/assets/icons";
import Container from "./Container";
import Menu from "./Menu";

const NAV_ITEMS = [
  {
    to: "/my-record",
    Icon: Icons.Memo,
    label: "自分の記録",
  },
  {
    Icon: Icons.Challenge,
    label: "チャレンジ",
    to: "#",
  },
  {
    Icon: Icons.Info,
    label: "お知らせ",
    to: "#",
  },
];

const MENU_ITEMS = [
  { label: "自分の記録", to: "/my-record" },
  { label: "体重グラフ", to: "#" },
  { label: "目標", to: "#" },
  { label: "選択中のコース", to: "#" },
  { label: "コラム一覧", to: "/my-column" },
  { label: "設定", to: "#" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="bg-dark-500 h-header shadow-custom px-4 relative">
      <Container className="max-w-[1200px] mx-auto h-full flex justify-between items-center">
        <Link to="/" className="no-underline">
          <img src={Logo} alt="Health App Logo" className="h-10" />
        </Link>
        <nav className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="flex items-center gap-2 no-underline text-base transition-colors duration-300 hover:text-primary-400 group"
                >
                  <item.Icon className="text-primary-400 w-8 h-8" />
                  <span
                    className={isActive ? "text-primary-400" : "text-white"}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Menu Button */}
          <button
            ref={menuButtonRef}
            className="p-0 bg-transparent border-0 cursor-pointer relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <Icons.Close className="text-primary-400 w-8 h-8" />
            ) : (
              <Icons.Menu className="text-primary-400 w-8 h-8" />
            )}
          </button>
        </nav>
      </Container>

      {/* Menu Component */}
      <Menu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={MENU_ITEMS}
        anchorEl={menuButtonRef.current}
      />
    </header>
  );
};

export default Header;
