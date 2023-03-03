import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const [numberToChangeBy, setNumberToChangeBy] = useState(1);
    return (<div className="App">
    <pre className="rainbow box text-center">Value {count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => setCount(parseInt(count,10)+parseInt(numberToChangeBy,10))}><span className="huge">+</span>Increment by {numberToChangeBy}</button>
        <button className="button-box" onClick={() => setCount(parseInt(count,10)-parseInt(numberToChangeBy,10))}><span className="huge">-</span>Decrement by {numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={(e) => setNumberToChangeBy(e.target.value)} type="number" value={numberToChangeBy} name="number" id="number" /></p>
  </div>);
}

export default Counter;