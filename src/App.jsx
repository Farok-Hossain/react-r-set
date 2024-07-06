import { useState } from "react";
import Album from "./components/Album";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="text-center text-3xl">This is Home</h1>
      <div className="text-center">
        <button className="btn btn-accent mb-3">{counter}</button>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
        <button
          className="btn btn-secondary ml-4"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
      </div>
      <Album />
    </div>
  );
};

export default App;
