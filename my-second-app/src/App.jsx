import React from "react";
import './App.css';

function App(){
let username ="shiva"
function greet(){
  alert("hi guyd")
}


return(

  //HTML
  //CLOSE ALL HTML TAGS 
  <div classname="App">
    <nav>
      <ul>
        <li>home</li>
        <li>support</li>
        <li>out</li>
      </ul>
    </nav>
<h1 className="head">this is react session</h1>
<h2>my name is :{username}</h2>
<p>good evening</p>
<button onClick={greet}>click me</button>
<input type="text" placeholder="enter your name"/>
  </div>
  
)


}
export default App;