import GlobalStyles from "./components/styled/Globals.styled";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Popular from "./components/Popular";
import Packages from "./components/Packages";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Gallery />
      <Popular />
      <Packages />
    </>
  );
}

export default App;
