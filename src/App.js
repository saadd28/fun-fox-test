import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Skeleton from "./Components/Skeleton/Skeleton";
import MainScreen from "./Screens/MainScreen/MainScreen";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Skeleton />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
