import "simpledotcss/simple.min.css";
import "./App.css";
import Faq from "./components/Faq";
import Send from "./components/Send";
import Receive from "./components/Receive";

function App() {
  return (
    <>
      <header>
        <h1>Send Passwords</h1>
        <p>Send your passwords and sensitive data - safely and secure!</p>
      </header>
      <main>
        <Send />
        <Receive />
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
