import "./App.css";
import Routes from "./routes";
import ResetGlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <ResetGlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
