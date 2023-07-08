import React, { useState } from "react";

function App() {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [result, setResult] = useState(null);

  const findDifferences = () => {
    const itemsA = listA.split("\n").map((item) => item.trim());
    const itemsB = listB.split("\n").map((item) => item.trim());

    const onlyInA = itemsA.filter((item) => !itemsB.includes(item));
    const onlyInB = itemsB.filter((item) => !itemsA.includes(item));
    const inBoth = itemsA.filter((item) => itemsB.includes(item));
    const combined = [...onlyInA, ...onlyInB];

    setResult({
      onlyInA,
      onlyInB,
      inBoth,
      combined
    });
  };

  return (
    <div>
      <h1>Find Differences between Lists A and B</h1>
      <div>
        <label>List A:</label>
        <textarea
          value={listA}
          onChange={(e) => setListA(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>
      <div>
        <label>List B:</label>
        <textarea
          value={listB}
          onChange={(e) => setListB(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>
      <button onClick={findDifferences}>Compute</button>
      {result && (
        <div>
          <h2>Results:</h2>
          <div>
            <h3>Items present only in A:</h3>
            <ul>
              {result.onlyInA.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Items present only in B:</h3>
            <ul>
              {result.onlyInB.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Items present in both A and B:</h3>
            <ul>
              {result.inBoth.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Items combining both A and B (unique):</h3>
            <ul>
              {result.combined.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
