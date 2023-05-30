import "simpledotcss/simple.min.css";
import "./App.css";
import Faq from "./components/Faq";
import Send from "./components/Send";
import Receive from "./components/Receive";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Send />
        <Receive />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
