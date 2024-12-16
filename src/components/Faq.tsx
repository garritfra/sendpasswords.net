import { useTranslation } from "react-i18next";
import { TranslationKey } from "../i18n/keys";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <div id="faq">
      <h2>{t(TranslationKey.FAQTitle)}</h2>

      <details>
        <summary>{t(TranslationKey.FAQWhatIsThisTitle)}</summary>
        <p>{t(TranslationKey.FAQWhatIsThis)}</p>
      </details>

      <details>
        <summary>{t(TranslationKey.FAQIsSafeTitle)}</summary>
        <p>{t(TranslationKey.FAQIsSafe)}</p>
        <ul>
          <li>{t(TranslationKey.FAQIsSafePoint1)}</li>
          <li>{t(TranslationKey.FAQIsSafePoint2)}</li>
          <li>{t(TranslationKey.FAQIsSafePoint3)}</li>
        </ul>
        <p>
          {t(TranslationKey.FAQIsSafeVerify)}{" "}
          <a href="https://github.com/garritfra/sendpasswords.net">GitHub</a>
        </p>
      </details>

      <details>
        <summary>{t(TranslationKey.FAQHowToUseTitle)}</summary>
        <p>{t(TranslationKey.FAQHowToUse)}</p>
        <ol>
          <li>{t(TranslationKey.FAQHowToUseStep1)}</li>
          <li>{t(TranslationKey.FAQHowToUseStep2)}</li>
          <li>{t(TranslationKey.FAQHowToUseStep3)}</li>
          <li>{t(TranslationKey.FAQHowToUseStep4)}</li>
        </ol>
      </details>

      <details>
        <summary>{t(TranslationKey.FAQUnlockCodeTitle)}</summary>
        <p>{t(TranslationKey.FAQUnlockCode)}</p>
        <ul>
          <li>{t(TranslationKey.FAQUnlockCodePoint1)}</li>
          <li>{t(TranslationKey.FAQUnlockCodePoint2)}</li>
        </ul>
        <p>{t(TranslationKey.FAQUnlockCodeExplanation)}</p>
      </details>

      <details>
        <summary>{t(TranslationKey.FAQHowLongTitle)}</summary>
        <p>{t(TranslationKey.FAQHowLong)}</p>
      </details>

      <details className="technical-details">
        <summary>{t(TranslationKey.FAQTechnicalTitle)}</summary>
        <p>{t(TranslationKey.FAQTechnical)}</p>
        <p>{t(TranslationKey.FAQTechnicalStorage)}</p>
      </details>

      <details>
        <summary>{t(TranslationKey.FAQHelpTitle)}</summary>
        <p>
          {t(TranslationKey.FAQHelp)}{" "}
          <a href="https://garrit.xyz/contact">Website</a>{" "}
          <a href="https://github.com/garritfra/sendpasswords.net/issues">
            GitHub
          </a>.
        </p>
      </details>
    </div>
  );
};

export default Faq;