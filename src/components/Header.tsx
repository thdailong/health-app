import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Icons from "../assets/icons";
import Container from "./Container";

const Header = () => {
  return (
    <header className="bg-dark-500 h-header shadow-custom">
      <Container className="max-w-[1200px] mx-auto h-full flex justify-between items-center">
        <Link to="/" className="no-underline">
          <img src={Logo} alt="Health App Logo" className="h-10" />
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-white no-underline text-base transition-colors duration-300 hover:text-primary-400 group"
          >
            <Icons.Memo className="text-primary-400 w-8 h-8" />
            <span>自分の記録</span>
          </Link>
          <Link
            to="/challenge"
            className="flex items-center gap-2 text-white no-underline text-base transition-colors duration-300 hover:text-primary-400 group"
          >
            <Icons.Challenge className="text-primary-400 w-8 h-8" />
            <span>チャレンジ</span>
          </Link>
          <Link
            to="/info"
            className="flex items-center gap-2 text-white no-underline text-base transition-colors duration-300 hover:text-primary-400 group"
          >
            <Icons.Info className="text-primary-400 w-8 h-8" />
            <span>お知らせ</span>
          </Link>
          <button className="p-0 bg-transparent border-0 cursor-pointer">
            <Icons.Menu className="text-primary-400 w-8 h-8" />
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
