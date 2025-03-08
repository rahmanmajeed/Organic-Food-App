import { Camera } from "lucide-react";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <>
      <div id="app">
        {/** Header */}
        <Header />
        {/**PageContent */}
        <PageContent />
        {/**Footer */}
      </div>
    </>
  );
}

export default App;
