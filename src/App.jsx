import Home from "./Components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";


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
