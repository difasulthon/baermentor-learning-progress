// import { useState } from "react";
import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";

function Button(): React.FC {
  return <button>Hi</button>;
}

function App(): React.FC<> {
  // const [count, setCount] = useState(0);
  const isLoading = true;

  return (
    <>
      {/* <Button />
      <Button />
      <Button /> */}
      <Profile name="Difa" jobTitle="Software Engineer" jobDesc="coding" />
      <Profile name="Sulthon" jobTitle="Software Engineer" jobDesc="coding" />
      <Profile name="Diani" jobTitle="Software Engineer" jobDesc="coding" />
      <Profile name="Dinda" jobTitle="Software Engineer" jobDesc="coding" />
      {isLoading && <p>loading</p>}
      <div>
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
      </div>
      <Button />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
      </p> */}
    </>
  );
}

export default App;
