import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesIndex from "./Routes/RoutesIndex";
import Header from "./components/Header/Header";
import Button from "@mui/material/Button";
import { AuthProvider } from "@/contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
