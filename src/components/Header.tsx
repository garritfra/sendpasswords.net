import { useTranslation } from "react-i18next";
import { TranslationKey } from "../i18n/keys";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <a href="/">
        <h1>{t(TranslationKey.AppTitle)}</h1>
      </a>
      <p>{t(TranslationKey.AppSubTitle)}</p>
    </header>
  );
};

export default Header;
