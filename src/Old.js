import "./styles.css";
import { useState } from "react";

export default function App() {
  const [myState, setMyState] = useState({
    list_1: null,
    list_2: null
    // intersection: null,
    // join: null
  });

  const findDifferences = () => {
    const itemsA = myState.list_1.split("\n").map((item) => item.trim());
    const itemsB = myState.list_2.split("\n").map((item) => item.trim());
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

  let handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    let temp = value.split("\n");
    console.log(temp);
    setMyState({
      ...myState,
      [name]: temp
    });
    // Find a way to create an arr and set it?
    // let temp = e.target.value.split(",");
    // console.log(temp);
    // setMyState({
    //   [e.target.name]: e.target.value
    // });
  };

  return (
    <div className="App">
      <div className="box">
        <h2>Task 1</h2>
        <div className="form">
          <p>Enter items in two lists. (comma seperated)</p>
          <div className="box flex">
            <textarea
              rows={5}
              colums={40}
              name="list_1"
              value={myState.list_1}
              onChange={handleChange}
              placeholder="ex: frog cat dog"
            />
            <textarea
              rows={5}
              colums={40}
              name="list_2"
              value={myState.list_2}
              onChange={handleChange}
              placeholder="ex: cheetah tiger 2 help"
            />
            <button id="calc">Calculate</button>
          </div>
        </div>
      </div>

      <div className="view flex">
        <h3>Items</h3>
        <h4>1. Items present only in</h4>
        <ul>
          <li>1. Items present only in</li>
          <li>2. Items present only in {myState.list_2}</li>
          <li>3. Items present only in A and B (X)</li>
          <li>4. Items combining A and B (+)</li>
        </ul>
      </div>
    </div>
  );
}
