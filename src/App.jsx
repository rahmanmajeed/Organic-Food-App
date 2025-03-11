import { Camera } from "lucide-react";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <div id="app">
        {/** Header */}
        <Header />
        {/**PageContent */}
        <PageContent />
        {/**Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
