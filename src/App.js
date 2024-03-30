import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Skeleton from "./Components/Skeleton/Skeleton";

function App() {
  return (
    <>
      <BrowserRouter>
        <Skeleton />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
