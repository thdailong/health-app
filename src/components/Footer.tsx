import Container from "./Container";

const FOOTER_LINKS = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];

const Footer = () => {
  return (
    <footer className="bg-dark-500 h-footer mt-auto flex items-center">
      <div className="w-full px-4">
        <Container>
          <div className="flex flex-wrap items-center gap-x-[45px] gap-y-4">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white no-underline font-light text-11px leading-16 transition-colors duration-300 hover:text-primary-400"
              >
                {link}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
