import "./index.css";
import { createRoot } from 'react-dom/client'
import { useState } from "react";

const makeUpData = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({ key: i, left: Math.floor(Math.random() * 90) });
  }
  data.sort((a, b) => a.left - b.left);
  return data;
};

const App = () => {
  const [data, setData] = useState(() => makeUpData());

  return (
    <>
      <button onClick={() => setData(makeUpData())}>Refresh</button>
      {data.map(({ key, left }) => (
        <div className="line" key={key}>
          <span style={{left: `${left}%`}} />
        </div>
      ))}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
