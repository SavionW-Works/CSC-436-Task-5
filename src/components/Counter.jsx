import { useReducer, useState } from 'react';

let new_num = 0; 

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { ...state, count: parseInt(state.count, 10) + parseInt(state.numberToChangeBy, 10) }

    case 'Decrement':
      return { ...state, count: parseInt(state.count, 10) - parseInt(state.numberToChangeBy, 10) }  

    case 'setChange': 
      return { ...state, numberToChangeBy: new_num  }

    default: 
      throw new Error();
  }
}


const Counter = () => {
  //const [count, setCount] = useState(0);
  //const [numberToChangeBy, setNumberToChangeBy] = useState(1); 

  const initialState = {
    count: 0,
    numberToChangeBy: 1
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  

  const Increment = () => {
    dispatch({ type: 'Increment' });
  }

  const Decrement = () => {
    dispatch({ type: 'Decrement' });
  } 

  const setChange = (e, num) => {
    new_num = e
    dispatch({type: 'setChange'}); 
  }

  console.log('state', state)

  return (<div className="App">

    <pre className="rainbow box text-center">Value {state.count}</pre>

    <div className="flex gap center">
      <button className="button-box" onClick={Increment}>
        <span className="huge">+</span>Increment by {state.numberToChangeBy}
      </button>

      <button className="button-box" onClick={Decrement}>
        <span className="huge">-</span>Decrement by {state.numberToChangeBy}
      </button>
    </div>

    <p className="flex gap center">
      <label className="button-box" htmlFor="number">Number to Increment/Decrement by </label>
      <input className="input-box" onChange={(e) => setChange(e.target.value)} type="number" value={state.numberToChangeBy} name="number" id="number" />
    </p>
  </div>);
}

export default Counter;