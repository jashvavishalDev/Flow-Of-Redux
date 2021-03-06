//using redux toolkit

import {useDispatch, useSelector} from 'react-redux';
import {actions} from './store/index';

function App() {

  const counter= useSelector(( state )=>  state.counter  );
  const dispatch= useDispatch();

  const onIncrement=()=>{ dispatch(actions.onIncrement() ); };

  const onDecrement=()=>{ dispatch( actions.onDecrement() ); };

  const addBy =() =>{ dispatch( actions.addBy(10) ); };

  return (
    <div>
       <h1> Counter App </h1>
       <h2> {counter} </h2>
       <button onClick={onIncrement}>Increment</button>
       <button onClick={onDecrement}>Decrement</button>
       <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;





// import {useDispatch, useSelector} from 'react-redux';

// function App() {

//   const counter= useSelector(( state )=>  state.counter  );
//   const dispatch= useDispatch();

//   const onIncrement=()=>{ dispatch( { type: "INC" } ); };

//   const onDecrement=()=>{ dispatch( { type: "DEC" } ); };

//   const addBy =() =>{ dispatch( { type: "ADD", payload: 10} ); };

//   return (
//     <div>
//        <h1> Counter App </h1>
//        <h2> {counter} </h2>
//        <button onClick={onIncrement}>Increment</button>
//        <button onClick={onDecrement}>Decrement</button>
//        <button onClick={addBy}>Add by 10</button>
//     </div>
//   );
// }

// export default App;
