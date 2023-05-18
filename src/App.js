import "./App.css";
import { Message } from "./Message";
import { Clicker } from "./Clicker";
import { useState } from "react";
import {Reset} from './Reset'

function App() {
  let [counter, setCounter] = useState(0);
  // console.log(typeof counter);

  const onHandleClick = (direction) => {
    if (direction === "Up") {
      setCounter(++counter);
    } else if(direction === "Down"){
      setCounter(--counter);
    } else {

      setCounter(0)
    }

    //console.log(direction)
  };
  return (
    <div className="App">
      <Message Mytext="Hello World!!!" />
      <Clicker onClicked={onHandleClick} />
      Counter: {counter}
      <Reset onClicked={onHandleClick}/>
    </div>
  );
}

export default App;

