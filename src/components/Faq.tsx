const Faq = () => {
  return (
    <div id="faq">
      <h2>Frequently Asked Questions</h2>

      <details>
        <summary>What is this tool?</summary>
        <p>
          This tool is a secure way to share passwords and other sensitive data
          with your friends. It ensures that your data remains protected during
          transmission and only accessible to the intended recipients.
        </p>
      </details>
      <details>
        <summary>Why should I use this?</summary>

        <p>
          Unlike other password sharing websites that store your secret data and
          generate public links, this tool prioritizes your privacy and
          security. It runs entirely inside your browser, and no input is ever
          send to our servers. By using this tool, you eliminate the risk of
          your data being exposed or stored and potentially sold to third
          parties.
        </p>

        <p>
          Don&apost believe me? The source code for this tool is{" "}
          <a href="https://github.com/garritfra/sendpasswords.net">
            publicly available
          </a>
          ! 🙂
        </p>
      </details>

      <details>
        <summary>How does this work, exactly?</summary>
        <p>
          Our tool operates in a stateless manner, meaning it does not store any
          data on our servers. It is built on OpenPGP.js, a pure JavaScript
          implementation of PGP (Pretty Good Privacy), a widely recognized
          encryption standard. When you share sensitive data, it is encrypted
          locally on your device using PGP cryptography, and only the intended
          recipients with the corresponding private key can decrypt and access
          the information.
        </p>
        <p>
          Your key consists of a public and a private part. The public key can
          savely be shared with anyone. The private key is stored locally in
          your browser and should never be exposed to anyone. If you suspect
          that your key might have been exposed, you should regenerate it
          manually.
        </p>
      </details>
      <details>
        <summary>How long is my key valid?</summary>
        <p>
          Your key is stored locally in your browser and currently valid
          indefinetely. If you suspect that your key might have been exposed,
          you should regenerate it manually.
        </p>
      </details>
      <details>
        <summary>
          I have a question or feedback. How can I get in touch?
        </summary>

        <p>
          You can head over to my{" "}
          <a href="https://garrit.xyz/contact">personal website</a> to find ways
          to contact me.
        </p>
      </details>
      <details>
        <summary>I see an issue! Where do I report it?</summary>

        <p>
          If you run into problems or bugs, please head over to{" "}
          <a href="https://github.com/garritfra/sendpasswords.net/issues">
            our GitHub repo
          </a>{" "}
          and open an issue. Thanks for for help!!
        </p>
        <p>
          If you don&apost have an account on GitHub and don&apost want to create one,
          you&aposre very welcome to contact me through my
          <a href="https://garrit.xyz/contact">personal website</a>!
        </p>
      </details>
    </div>
  );
};

export default Faq;
