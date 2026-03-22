import { Herro } from "./components/Herro";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Herro />
        <Landing />
      </main>
    </div>
  );
}

export default App;
