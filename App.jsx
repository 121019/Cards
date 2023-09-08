import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./src/components/Characters";
import princesseguerriere from "./src/components/princesseguerriere";
import vikingguerrier2 from "./src/components/vikingguerrier2";
import vikingguerrier3 from "./src/components/vikingguerrier3";

function App() {
  return (
    <Router>
      <div className="App">
        <Characters />;
        <Routes>
          <Route exact path="/" component={Characters} />
          <Route path="/princesse Guerriere" component={princesseguerriere} />
          <Route path="/vikingguerrier2" component={vikingguerrier2} />
          <Route path="/vikingguerrier3" component={vikingguerrier3} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
