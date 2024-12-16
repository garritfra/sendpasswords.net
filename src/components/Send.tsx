import { useEffect, useState } from "react";
import * as openpgp from "openpgp";
import useClipboard from "../hooks/useClipboard";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../i18n/keys";

const Send = () => {
  const { t } = useTranslation();

  const [text, setText] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const [isTextCopied, setIsTextCopied] = useState(false);
  const [isShareLinkCopied, setIsShareLinkCopied] = useState(false);

  const [friendKey, setFriendKey] = useState<string>("");
  const { copy } = useClipboard();

  const receiveLink = `${window.location.href}receive`;

  useEffect(() => {
    (async () => {
      if (friendKey && text) {
        const parsedFriendKey = await openpgp.readKey({
          armoredKey: friendKey,
        });
        const encrypted = await openpgp.encrypt({
          message: await openpgp.createMessage({ text }),
          encryptionKeys: [parsedFriendKey],
          format: "armored",
        });
        setOutput(encrypted.toString());
      } else {
        setOutput("");
      }
    })();
  }, [text, friendKey]);

  const onCopyEncryptedTextClicked = async () => {
    copy(output);
    setIsTextCopied(true);
  };

  const onShareLinkClicked = async () => {
    if ("canShare" in navigator && navigator.canShare()) {
      await navigator.share({
        title: "Let me share my password with you",
        text: "Open this link and follow the instructions",
        url: receiveLink,
      });
    } else {
      const linkText = `Let me share a password with you!

Open this link and follow the instructions:
${receiveLink}
    `;
      copy(linkText);
    }
    setIsShareLinkCopied(true);
  };

  return (
    <div id="encryption-section">
      <label htmlFor="share-link-btn">
        {t(TranslationKey.SendInstructions1)}{" "}
        <a href={receiveLink}>{receiveLink}</a>.
      </label>
      <button id="share-link-btn" onClick={onShareLinkClicked}>
        {"canShare" in navigator && navigator.canShare()
          ? t(TranslationKey.ShareLinkButton)
          : isShareLinkCopied
          ? t(TranslationKey.ShareLinkButtonCopied)
          : t(TranslationKey.ShareLinkButton)}
      </button>
      <label htmlFor="friend-key">{t(TranslationKey.SendInstructions2)}</label>
      <textarea
        id="friend-key"
        value={friendKey}
        placeholder={t(TranslationKey.UnlockCodePlaceholder)}
        onChange={(e) => setFriendKey(e.target.value)}
      ></textarea>
      <label htmlFor="text">{t(TranslationKey.SendInstructions3)}</label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t(TranslationKey.SecretMessagePlaceholder)}
      ></textarea>
      <div id="result" style={output ? undefined : { display: "none" }}>
        <label htmlFor="output">{t(TranslationKey.SendInstructions4)}</label>
        <textarea 
          id="output" 
          value={output}
          readOnly
          aria-label={t(TranslationKey.ProtectedMessageLabel)}
        ></textarea>
        <button id="encrypt-btn" onClick={onCopyEncryptedTextClicked}>
          {isTextCopied 
            ? t(TranslationKey.CopyProtectedMessageCopied) 
            : t(TranslationKey.CopyProtectedMessage)}
        </button>
      </div>
    </div>
  );
};

export default Send;