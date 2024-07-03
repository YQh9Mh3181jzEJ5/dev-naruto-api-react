import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>ナルト図鑑！</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>ナルト図鑑です</p>
      </div>
      <p className="read-the-docs">ナルト図鑑です</p>
    </>
  );
}

export default App;
