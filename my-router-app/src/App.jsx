// import React from 'react';
// //basic setup react-router-dom
// import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

// //homepage
// function Home(){
//   return(
//     <div>
//       <h2>home page-file</h2>
//     </div>
//   )
// }

// //About page
// function About(){
//   return(
//     <div>
//       <h2>About page -file</h2>
//     </div>
//   )
// }

// function PageNotFound(){
//   return(
 
//   <div>
//     <h2>404 page not found</h2>

//   </div>
//   )
// }


// function App(){
//   return(
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<PageNotFound />} />

        
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./Navbar"
import Dashboard from "./Dashboard"
import profile from "./profile"
import Home from "./Home"

function App(){
  return(
    <BrowserRouter>
    <Routes>
<Route  path ="/"   element={ <Home/>}     />
<Route path ="/dashboard" element={  <Dashboard/>}  />
<Route path = "/profile"  element={ <profile/>}   />


    </Routes>
    </BrowserRouter>
  )
}
export default App