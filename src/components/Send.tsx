import { useEffect, useState } from "react";
import * as openpgp from "openpgp";

const Send = () => {
  const [text, setText] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const [isTextCopied, setIsTextCopied] = useState(false);

  const [friendKey, setFriendKey] = useState<string>("");

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

  // TODO: Refactor into hook
  const copyToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const onCopyEncryptedTextClicked = async () => {
    copyToClipboard(output);
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
      <label htmlFor="output">
        3: Copy this encrypted text and send it to your friend:
      </label>
      <textarea
        id="output"
        value={output}
        style={output ? undefined : { display: "none" }}
      ></textarea>
      <button id="encrypt-btn" onClick={onCopyEncryptedTextClicked}>
        {isTextCopied ? "Copied to clipboard!" : "Copy Encrypted Text"}
      </button>
    </div>
  );
};

export default Send;
