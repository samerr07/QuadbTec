import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";

function App() {
  
  return (
    <div className="App">
      <Router>
      
      
        <Routes>
         
          <Route path="/show/:id" element={<ShowSummary/>}/>
          <Route path="/" element={<ShowList />}/>

          
          </Routes>
    
    </Router>
    </div>
  );
}



export default App;