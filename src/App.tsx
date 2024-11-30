import React from "react";
import Home from "./pages/Home.tsx";
import Picks from "./pages/Picks.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const mockData = [
  { team: "Lakers", odds: "+120", points: 102, spread: -4.5 },
  { team: "Warriors", odds: "-140", points: 105, spread: +4.5 },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/picks" element={<Picks data={mockData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
