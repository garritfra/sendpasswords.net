import { useTranslation } from "react-i18next";
import { TranslationKey } from "../i18n/keys";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <div id="faq">
      <h2>{t(TranslationKey.FAQTitle)}</h2>

      <details>
        <summary>What is this website for?</summary>
        <p>
          This is a safe way to share passwords with friends and family - like passing a note
          that only they can read. It's perfect when you need to share login details
          or other private information with someone you trust.
        </p>
      </details>

      <details>
        <summary>Is this safe to use?</summary>
        <p>
          Yes! This tool is designed with your privacy in mind. When you share a password:
        </p>
        <ul>
          <li>Everything happens right here in your browser - we never see your passwords</li>
          <li>Only the person you choose can read your message</li>
          <li>We don't store anything - your message disappears once sent</li>
        </ul>
        <p>
          Want to verify this? Our code is{" "}
          <a href="https://github.com/garritfra/sendpasswords.net">
            open for anyone to check
          </a>
          ! 🙂
        </p>
      </details>

      <details>
        <summary>How do I use this?</summary>
        <p>
          It's as simple as sharing a secret note:
        </p>
        <ol>
          <li>Share the website link with your friend</li>
          <li>Your friend will create their personal unlock code and send it to you</li>
          <li>Type in your password or secret message</li>
          <li>Share the protected message with your friend - only they can read it!</li>
        </ol>
      </details>

      <details>
        <summary>What's an unlock code?</summary>
        <p>
          An unlock code is like a special key that only your friend has. It comes in two parts:
        </p>
        <ul>
          <li>A public part they share with you (safe to share)</li>
          <li>A private part they keep secret (never share this!)</li>
        </ul>
        <p>
          When you get a new unlock code from your friend, your message will be automatically
          protected so only they can read it.
        </p>
      </details>

      <details>
        <summary>How long can I use this?</summary>
        <p>
          Your unlock codes are saved in your browser and work for as long as you need them.
          If you think someone else might have gotten access to your codes, you should
          create new ones to stay safe.
        </p>
      </details>

      <details className="technical-details">
        <summary>I'm curious - how does this work technically?</summary>
        <p>
          For the technically curious: We use OpenPGP.js, which is a JavaScript implementation
          of PGP (Pretty Good Privacy) encryption. All encryption happens locally in your
          browser - we operate completely stateless, meaning no data touches our servers.
        </p>
        <p>
          The public/private keypair is stored in your browser's local storage. If you
          suspect your private key might have been compromised, you should generate a new
          keypair immediately.
        </p>
      </details>

      <details>
        <summary>Need help or found an issue?</summary>
        <p>
          You can contact me through my{" "}
          <a href="https://garrit.xyz/contact">website</a> or report issues on{" "}
          <a href="https://github.com/garritfra/sendpasswords.net/issues">
            GitHub
          </a>.
        </p>
      </details>
    </div>
  );
};

export default Faq;