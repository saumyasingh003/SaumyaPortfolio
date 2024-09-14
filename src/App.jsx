
import Home from "./Components/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ParticlesBackground from "./Components/ParticlesBackground";

function App() {
  return (
    <div className=" ">
    {/* <ParticlesBackground/> */}
      <BrowserRouter>
  

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
