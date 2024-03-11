import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesIndex from "./Routes/RoutesIndex";
import Header from "./components/Header/Header";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </>
  );
}

export default App;
