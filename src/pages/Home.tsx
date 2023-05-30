import Faq from "../components/Faq";
import Receive from "../components/Receive";
import Send from "../components/Send";

const HomePage = () => {
  return (
    <main>
      <Send />
      <Receive />
      <Faq />
    </main>
  );
};

export default HomePage;
