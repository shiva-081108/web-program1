//import React from 'react';

//function App(){

//let count =  10


//function Increasecount(){
//count = count +1
//console.log(count)
//}

  //return(
//<div>
//<h2> like/cart : {count}</h2>
//<button onClick={inccreaseCount}>Increase count</button> 

//</div>
 // )
//}

//export default App
//hookstate-hookin react
//it is a special react variable- it will store the updated value and also it will update the value in the UI when it changes./
//syntX- const[mainVaraible-show on your screen, set mainVaraible- update the value] = usestate(initialValue)



import React from 'react';
import {usestate} from 'react';



function App(){
  const[like,setLike] = usestate(10)

function Increaselike(){
 setLike( like + 1)
  console.log(like)
}


return(
<div>
<h2> like/cart : {like}</h2>
<button onClick={IncreaseLike}>Increase</button> 

</div>
  )
} 

export default App
