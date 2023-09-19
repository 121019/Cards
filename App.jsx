import React from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "./src/components/Characters";
import Freyja from "./src/components/Freyja";
import Frigg from "./src/components/Frigg";
import Viggo from "./src/components/Viggo";

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Characters/>} />
          <Route path="/Freyja" element={<Freyja />} />
          <Route path="/Frigg" element={<Frigg />} />
          <Route path="/Viggo" element={<Viggo />} />
        </Routes>
      </div>
    
  );
}

export default App;
