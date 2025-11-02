const Footer = () => {
  return (
    <footer className="bg-dark-500 h-footer mt-auto">
      <div className="max-w-[1200px] mx-auto px-8 py-8">
        <div className="flex flex-wrap gap-6 justify-center mb-4">
          <a
            href="#"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-primary-400"
          >
            会員登録
          </a>
          <a
            href="#"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-primary-400"
          >
            運営会社
          </a>
          <a
            href="#"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-primary-400"
          >
            利用規約
          </a>
          <a
            href="#"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-primary-400"
          >
            個人情報の取扱について
          </a>
          <a
            href="#"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-primary-400"
          >
            特定商取引法に基づく表記
          </a>
          <a
            href="#"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-primary-400"
          >
            お問い合わせ
          </a>
        </div>
        <p className="text-center text-gray-400 text-xs mt-4">
          © 2024 Health App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
