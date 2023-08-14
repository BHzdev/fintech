import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Summary from "./Pages/Summary";
import "./Style.css";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Summary />
      </main>
    </div>
  );
}

export default App;
