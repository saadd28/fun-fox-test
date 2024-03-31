import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Skeleton from "./Components/Skeleton/Skeleton";
import Screen1 from "./Screens/Screen1/Screen1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Skeleton />
        <Routes>
          <Route path="/" element={<Screen1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
