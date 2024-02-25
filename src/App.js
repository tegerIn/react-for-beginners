import { useState, useEffect } from "react";
import Button from "./Button";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destoryed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClickHide = () => setShowing((prev) => !prev);
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("i run when 'counter & keyword' changes");
  }, [counter, keyword]);

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <Hello /> : null}
      <button onClick={onClickHide}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
