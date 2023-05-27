import { useEffect, useState } from "react";
import * as openpgp from "openpgp";
import "simpledotcss/simple.min.css";
import "./App.css";

function App() {
  const [key, setKey] = useState<openpgp.SerializedKeyPair<string> | null>(
    null
  );
  const [isKeyCopied, setIsKeyCopied] = useState(false);

  const [text, setText] = useState<string>("");
  const [isTextCopied, setIsTextCopied] = useState(false);

  const [friendKey, setFriendKey] = useState<string>("");

  const [decryptText, setDecryptText] = useState<string>("");
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
    if ("clipboard" in navigator && navigator.clipboard !== undefined) {
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

  const onCopyEncryptedTextClicked = async () => {
    if (friendKey && key) {
      const parsedFriendKey = await openpgp.readKey({
        armoredKey: friendKey.trim(),
      });
      const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text }),
        encryptionKeys: [parsedFriendKey],
        format: "armored",
      });
      copyToClipboard(encrypted.toString());
    }
    setIsTextCopied(true);
  };

  // TODO: Use proper function type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDecryptTextTextChanged = async (e: any) => {
    setDecryptText(e.target.value);
    decrypt();
  };

  const decrypt = async () => {
    if (decryptText && key) {
      const parsedPrivateKey = await openpgp.readPrivateKey({
        armoredKey: key.privateKey,
      });
      const decrypted = await openpgp.decrypt({
        message: await openpgp.readMessage({ armoredMessage: decryptText }),
        decryptionKeys: [parsedPrivateKey],
      });
      console.log(decrypted);
      setDecryptOutput(decrypted.data.toString());
    }
  };

  return (
    <>
      <header>
        <h1>Sendpass.com</h1>
        <p>Send your passwords and sensitive data - safely and secure!</p>
      </header>
      <main>
        <div id="encryption-section">
          <h2>Send</h2>
          <label htmlFor="friend-key">Friend's Key:</label>
          <textarea
            id="friend-key"
            value={friendKey}
            onChange={(e) => {
              return setFriendKey(e.target.value);
            }}
          ></textarea>
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value.trim())}
          ></textarea>
          <button id="encrypt-btn" onClick={onCopyEncryptedTextClicked}>
            {isTextCopied ? "Copied to clipboard!" : "Copy Encrypted Text"}
          </button>
        </div>

        <div id="decryption-section">
          <h2>Receive</h2>
          <div id="key-display">
            <button id="copy-key-btn" onClick={onCopyKeyButtonClicked}>
              {isKeyCopied ? "Copied!" : "Copy Your Key"}
            </button>
          </div>

          <label htmlFor="encrypted-text">Encrypted Text:</label>
          <textarea
            id="encrypted-text"
            value={decryptText}
            onChange={onDecryptTextTextChanged}
            onKeyUp={onDecryptTextTextChanged}
          ></textarea>
          <label htmlFor="output">Output:</label>
          <textarea id="output" readOnly value={decryptOutput}></textarea>
        </div>
        <div id="insructions">
          <h2>Instructions</h2>
          <ol>
            <li>Ask your friend for their key</li>
            <li>Enter the text you want to encrypt</li>
            <li>
              Copy the encrypted text. It is safe to share it as plain text!
            </li>
          </ol>
        </div>
      </main>
      <footer>
        <p>
          Maintained with ♥ by{" "}
          <a target="blank" href="https://garrit.xyz/">
            Garrit Franke
          </a>{" "}
          for a safer web.
        </p>

        <a href="https://github.com/garritfra/sendpass">Source code</a>

        <p>
          👻&nbsp;Proud member of{" "}
          <a href="https://darktheme.club/">darktheme.club</a> 👻
        </p>
        <a href="#top">^ TOP ^</a>
      </footer>
    </>
  );
}

export default App;
