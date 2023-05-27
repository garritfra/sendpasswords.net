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
          Don't believe me? The source code for this tool is{" "}
          <a href="https://github.com/garritfra/sendpass">publicly available</a>
          ! 🙂
        </p>
      </details>

      <details>
        <summary>How does it work?</summary>

        <p>
          Our tool operates in a stateless manner, meaning it does not store any
          data on our servers. It is built on OpenPGP.js, a pure JavaScript
          implementation of PGP (Pretty Good Privacy), a widely recognized
          encryption standard. When you share sensitive data, it is encrypted
          locally on your device using PGP cryptography, and only the intended
          recipients with the corresponding private key can decrypt and access
          the information.
        </p>
      </details>
      <details>
        <summary>I have a question. How can I get in touch?</summary>

        <p>
          You can head over to my{" "}
          <a href="https://garrit.xyz/contact">personal website</a> to find ways
          to contact me.
        </p>
      </details>
    </div>
  );
};

export default Faq;
