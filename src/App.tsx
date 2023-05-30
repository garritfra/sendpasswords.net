import { useState } from "react";
import * as openpgp from "openpgp";
import "simpledotcss/simple.min.css";
import "./App.css";
import Faq from "./components/Faq";
import Instructions from "./components/Instructions";
import useKeypair from "./hooks/useKeypair";
import Send from "./components/Send";

function App() {
  const [isKeyCopied, setIsKeyCopied] = useState(false);
  const [isKeyRegenerated, setIsKeyRegenerated] = useState(false);

  const [decryptText, setDecryptText] = useState<string>("");
  const [decryptOutput, setDecryptOutput] = useState<string>("");

  const { key, generateKey } = useKeypair();

  // TODO: Refactor into hook
  const copyToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const onCopyKeyButtonClicked = async () => {
    if (key) {
      copyToClipboard(key.publicKey.armor());
    }
    setIsKeyCopied(true);
  };

  const onRegenerateKeyClicked = async () => {
    generateKey();
    setIsKeyRegenerated(true);
  };

  // TODO: Use proper function type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDecryptTextTextChanged = async (e: any) => {
    setDecryptText(e.target.value);
    decrypt();
  };

  const decrypt = async () => {
    if (decryptText && key) {
      const decrypted = await openpgp.decrypt({
        message: await openpgp.readMessage({ armoredMessage: decryptText }),
        decryptionKeys: [key.privateKey],
      });
      setDecryptOutput(decrypted.data.toString());
    }
  };

  return (
    <>
      <header>
        <h1>Send Passwords</h1>
        <p>Send your passwords and sensitive data - safely and secure!</p>
      </header>
      <main>
        <Instructions />
        <Send />
        <div id="decryption-section">
          <h2>Receive</h2>
          <div id="key-display">
            <div className="spaced">
              <button id="copy-key-btn" onClick={onCopyKeyButtonClicked}>
                {isKeyCopied ? "Copied!" : "Copy Your Key"}
              </button>
              <button className="secondary" onClick={onRegenerateKeyClicked}>
                {isKeyRegenerated ? "Regenerated!" : "Regenerate Your Key"}
              </button>
            </div>
          </div>

          <label htmlFor="encrypted-text">Encrypted Text:</label>
          <textarea
            id="encrypted-text"
            value={decryptText}
            onChange={onDecryptTextTextChanged}
            onKeyUp={onDecryptTextTextChanged}
          ></textarea>
          <label
            htmlFor="output"
            style={decryptOutput ? undefined : { display: "none" }}
          >
            Output:
          </label>
          <textarea
            id="output"
            readOnly
            value={decryptOutput}
            style={decryptOutput ? undefined : { display: "none" }}
          ></textarea>
        </div>
        <Faq />
      </main>
      <footer>
        <p>
          Maintained with ♥ by{" "}
          <a target="blank" href="https://garrit.xyz/">
            Garrit Franke
          </a>{" "}
          for a safer web.
        </p>

        <a href="https://github.com/garritfra/sendpasswords.net">Source code</a>

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
