import { useEffect, useState } from "react";
import * as openpgp from "openpgp";
import useClipboard from "../hooks/useClipboard";

const Send = () => {
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
        1: Tell your friend to visit <a href={receiveLink}>{receiveLink}</a>.
      </label>
      <button id="share-link-btn" onClick={onShareLinkClicked}>
        {"canshare" in navigator && navigator.canShare()
          ? "Share Link"
          : isShareLinkCopied
          ? "Copied to Clipboard!"
          : "Copy Link to Clipboard"}
      </button>
      <label htmlFor="friend-key">
        2. Paste the text your friend sent you below:
      </label>
      <textarea
        id="friend-key"
        value={friendKey}
        placeholder={
          "-----BEGIN PGP PUBLIC KEY BLOCK-----\n...\n-----END PGP PUBLIC KEY BLOCK-----"
        }
        onChange={(e) => setFriendKey(e.target.value)}
      ></textarea>
      <label htmlFor="text">3. Enter the text you want to encrypt:</label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="mysecretpassword"
      ></textarea>
      <div id="result" style={output ? undefined : { display: "none" }}>
        <label htmlFor="output">
          4: Copy this encrypted text and send it to your friend:
        </label>
        <textarea id="output" value={output}></textarea>
        <button id="encrypt-btn" onClick={onCopyEncryptedTextClicked}>
          {isTextCopied ? "Copied to clipboard!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
};

export default Send;
