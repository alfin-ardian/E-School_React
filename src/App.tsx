import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const logoProps = {
    width: 96,
    height: 96,
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="/vite.svg"
            className="logo"
            alt="Vite logo"
            {...logoProps}
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            {...logoProps}
          />
        </a>
      </div>
      <h1>Vite React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
