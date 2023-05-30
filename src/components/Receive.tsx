import { useState } from "react";
import * as openpgp from "openpgp";
import useKeypair from "../hooks/useKeypair";
import useClipboard from "../hooks/useClipboard";

const Receive = () => {
  const [isKeyCopied, setIsKeyCopied] = useState(false);
  const [isKeyRegenerated, setIsKeyRegenerated] = useState(false);

  const [decryptText, setDecryptText] = useState<string>("");
  const [decryptOutput, setDecryptOutput] = useState<string>("");

  const { key, generateKey } = useKeypair();
  const { copy } = useClipboard();

  const onCopyKeyButtonClicked = async () => {
    if (key) {
      copy(key.publicKey.armor());
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
    <div id="decryption-section">
      <h2>Receive</h2>
      <div id="key-display">
        <label htmlFor="key-copy">
          1. Copy your key and send it to your friend:
        </label>
        <div className="spaced" id="key-copy">
          <button id="copy-key-btn" onClick={onCopyKeyButtonClicked}>
            {isKeyCopied ? "Copied!" : "Copy Your Key"}
          </button>
          <button className="secondary" onClick={onRegenerateKeyClicked}>
            {isKeyRegenerated ? "Regenerated!" : "Regenerate Your Key"}
          </button>
        </div>
      </div>

      <label htmlFor="encrypted-text">
        2. Paste the text your friend sent you back:
      </label>
      <textarea
        id="encrypted-text"
        value={decryptText}
        onChange={onDecryptTextTextChanged}
        onKeyUp={onDecryptTextTextChanged}
        placeholder={
          "-----BEGIN PGP MESSAGE-----\n...\n-----END PGP MESSAGE-----"
        }
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
  );
};

export default Receive;
