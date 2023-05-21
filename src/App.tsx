import { useEffect, useState } from "react";
import * as openpgp from "openpgp";
import "./App.css";

function App() {
  const [key, setKey] = useState<openpgp.SerializedKeyPair<string> | null>(
    null
  );
  const [isKeyCopied, setIsKeyCopied] = useState(false);

  const [message, setMessage] = useState<string>("");
  const [isMessageCopied, setIsMessageCopied] = useState(false);

  const [friendKey, setFriendKey] = useState<string>("");

  const [decryptMessage, setDecryptMessage] = useState<string>("");
  const [decryptOutput, setDecryptOutput] = useState<string>("");

  useEffect(() => {
    openpgp
      .generateKey({
        userIDs: [{}],
        rsaBits: 4096,
      })
      .then((pgpKey) => {
        return setKey(pgpKey);
      });
  }, []);

  const copyToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const onCopyKeyButtonClicked = async () => {
    if (key) {
      copyToClipboard(key.publicKey);
    }
    setIsKeyCopied(true);
  };

  const onCopyEncryptedMessageClicked = async () => {
    if (friendKey && key) {
      const parsedFriendKey = await openpgp.readKey({ armoredKey: friendKey });
      const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: message.trim() }),
        encryptionKeys: [parsedFriendKey],
        format: "armored",
      });
      copyToClipboard(encrypted.toString().trim());
    }
    setIsMessageCopied(true);
  };

  // TODO: Use proper function type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDecryptMessageTextChanged = async (e: any) => {
    setDecryptMessage(e.target.value);
    decrypt();
  };

  const decrypt = async () => {
    if (decryptMessage && key) {
      const parsedPrivateKey = await openpgp.readPrivateKey({
        armoredKey: key.privateKey,
      });
      const decrypted = await openpgp.decrypt({
        message: await openpgp.readMessage({ armoredMessage: decryptMessage }),
        decryptionKeys: [parsedPrivateKey],
      });
      console.log(decrypted);
      setDecryptOutput(decrypted.data.toString());
    }
  };

  return (
    <>
      <h1>Send your passwords and sensitive data - safely and secure!</h1>

      <div id="key-display">
        <h2>Your Key</h2>
        <textarea id="own-key" value={key?.publicKey} readOnly></textarea>
        <button id="copy-key-btn" onClick={onCopyKeyButtonClicked}>
          {isKeyCopied ? "Copied!" : "Copy Key"}
        </button>
      </div>

      <div id="encryption-section">
        <h2>Send Message</h2>
        <label htmlFor="friend-key">Friend's Key:</label>
        <textarea
          id="friend-key"
          value={friendKey}
          onChange={(e) => {
            return setFriendKey(e.target.value);
          }}
        ></textarea>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value.trim())}
        ></textarea>
        <button id="encrypt-btn" onClick={onCopyEncryptedMessageClicked}>
          {isMessageCopied ? "Copied to clipboard!" : "Encrypt"}
        </button>
      </div>

      <div id="decryption-section">
        <h2>Receive Message</h2>
        <label htmlFor="encrypted-message">Encrypted Message:</label>
        <textarea
          id="encrypted-message"
          value={decryptMessage}
          onChange={onDecryptMessageTextChanged}
          onKeyUp={onDecryptMessageTextChanged}
        ></textarea>
        <label htmlFor="output">Output:</label>
        <textarea id="output" readOnly value={decryptOutput}></textarea>
      </div>
    </>
  );
}

export default App;
