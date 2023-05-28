import * as openpgp from "openpgp";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export default function usePrivateKey() {
  const [armoredKey, setArmoredKey] = useLocalStorage<string | null>(
    "private_key",
    null
  );

  const [key, setKey] = useState<openpgp.KeyPair | null>(null);

  useEffect(() => {
    if (armoredKey === null) {
      generateKey();
    }
  }, []);

  useEffect(() => {
    if (armoredKey !== null) {
      openpgp.readPrivateKey({ armoredKey }).then((privateKey) =>
        setKey({
          publicKey: privateKey.toPublic(),
          privateKey,
        })
      );
    }
  }, [armoredKey]);

  useEffect(() => {
    if (key !== null) {
      setArmoredKey(key.privateKey.armor());
    }
  }, [key]);

  const generateKey = () => {
    openpgp
      .generateKey({
        userIDs: [{}],
      })
      .then((pgpKey) => {
        return setArmoredKey(pgpKey.privateKey);
      });
  };

  return {
    key,
    generateKey,
  };
}
