import GlobalStyles from "./components/styled/Globals.styled";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Popular from "./components/Popular";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Gallery />
      <Popular />
    </>
  );
}

export default App;
