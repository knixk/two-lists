import React, { useState } from "react";
import "./styles.css";

// # Task 1
// Kanishk Shrivastava

function App() {
  const [list_1, setList1] = useState("");
  const [list_2, setList2] = useState("");
  // creating an ans object
  const [result, setResult] = useState(null);

  const evaluateAns = () => {
    const items_1 = list_1.split("\n").map((item) => item.trim());
    const items_2 = list_2.split("\n").map((item) => item.trim());

    // in one but not in two
    const onlyInList1 = items_1.filter((item) => !items_2.includes(item));

    // in two but not in one
    const onlyInList2 = items_2.filter((item) => !items_1.includes(item));

    // only in both
    const intersection = items_1.filter((item) => items_2.includes(item));

    // concat
    const union = [...onlyInList1, ...onlyInList2];

    setResult({
      onlyInList1,
      onlyInList2,
      intersection,
      union
    });
  };

  return (
    <div className="app">
      <h1>Task #1</h1>
      <div className="box">
        <div>
          <label>List 1</label>
          <textarea
            name="list1"
            value={list_1}
            onChange={(e) => setList1(e.target.value)}
            rows={5}
            placeholder="ex: tiger was&#10;a great&#10;animal"
            cols={40}
          />
        </div>
        <div>
          <label>List 2</label>
          <textarea
            name="list2"
            value={list_2}
            onChange={(e) => setList2(e.target.value)}
            rows={5}
            placeholder="ex: items in&#10;list &#10;two"
            cols={40}
          />
        </div>
        <button onClick={evaluateAns}>Calculate</button>
      </div>
      <br />
      {result && (
        <div>
          <h2>Result</h2>
          <div className="card">
            <h3>Items present only in List 1:</h3>
            <ul>
              {result.onlyInList1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Items present only in List 2:</h3>
            <ul>
              {result.onlyInList2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Items present both 1 and 2:</h3>
            <ul>
              {result.intersection.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Items combining 1 and 2:</h3>
            <ul>
              {result.union.map((item, index) => (
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
