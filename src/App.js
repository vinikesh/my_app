import { useReducer } from "react";


export function App() {

  const [checked, setChecked] = useReducer((checked) =>  !checked , false)

  return (
    <>
      <h1>Hello</h1>
      <label >{checked ? "selected" : "not selected"}</label>
      <input type="checkbox" value={checked} onChange={setChecked}/>
    </>
  );
}

export function multiplyByTwo(a){
  return a * 2;
}

export default App;
