import "./App.css";
import LogIn from "./pages/LogIn";
import background from "./images/starsbg.png";
// Chiques puse esto en la app para ver como se veia e irle moviendo para hacer el fondo del login

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      <header className="App-header">
        <LogIn />
      </header>
    </div>
  );
}

export default App;
