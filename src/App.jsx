import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./views/Login.jsx";

import Register from "./views/Register.jsx"
import { Route, Routes } from "react-router-dom";

const App = () => {
  <>
  <div className="grid_container" >
   <nav>
    <Navigation />
   </nav>
   <main>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Register" element={<Register />} />
  
   </Routes>
   </main>
  </div>
    
  </>
};

export default App;
