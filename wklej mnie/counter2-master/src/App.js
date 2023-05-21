import "./App.css";
import Heading from "./components/Heading";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="App">
      <header className="App-header ">
        <Heading text="React Counter App" />
      </header>
      <div className="orzel-7">
        {/* inne rzeczy niz string wpisujemy w nawiasach {} */}
        <Counter counterInitValue={33} />
        {/* <Counter counterInitValue={108} /> */}
      </div>
    </div>
  );
};

export default App;
