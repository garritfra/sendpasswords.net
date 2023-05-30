import { useState } from "react";
import * as openpgp from "openpgp";
import useKeypair from "../hooks/useKeypair";

const Send = () => {
  const [text, setText] = useState<string>("");
  const [isTextCopied, setIsTextCopied] = useState(false);

  const [friendKey, setFriendKey] = useState<string>("");

  const { key } = useKeypair();

  // TODO: Refactor into hook
  const copyToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const onCopyEncryptedTextClicked = async () => {
    if (friendKey && key) {
      const parsedFriendKey = await openpgp.readKey({ armoredKey: friendKey });
      const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text }),
        encryptionKeys: [parsedFriendKey],
        format: "armored",
      });
      copyToClipboard(encrypted.toString());
    }
    setIsTextCopied(true);
  };

  return (
    <div id="encryption-section">
      <h2>Send</h2>
      <label htmlFor="friend-key">1. Ask your friend for their key:</label>
      <textarea
        id="friend-key"
        value={friendKey}
        onChange={(e) => setFriendKey(e.target.value)}
      ></textarea>
      <label htmlFor="text">2. Enter the text you want to encrypt:</label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value.trim())}
      ></textarea>
      <button id="encrypt-btn" onClick={onCopyEncryptedTextClicked}>
        {isTextCopied ? "Copied to clipboard!" : "Copy Encrypted Text"}
      </button>
    </div>
  );
};

export default Send;
