import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { decrement, increment } from './counterSlice';

function App() {

 const mydata =  useSelector(y=>y.counter.counter);
 const dataDis = useDispatch();

 const myIncrementcounter = ()=> {
  dataDis(increment());
 }

 const myDecrement = ()=> {
  dataDis(decrement());
 }
  return (
    <div className="App"> 
    {mydata}
      
      <button onClick={myIncrementcounter}>+</button>
      <button onClick={myDecrement}>-</button>
    </div>  
  );
}

export default App;
