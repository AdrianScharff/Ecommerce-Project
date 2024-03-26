import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesIndex from "./Routes/RoutesIndex";
import Header from "./components/Header/Header";
import Button from "@mui/material/Button";
import { AuthProvider } from "./contexts/AuthContext";
import { CartContextProvider } from "./contexts/CartContext/CartContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartContextProvider>
          <BrowserRouter>
            <RoutesIndex />
          </BrowserRouter>
        </CartContextProvider>
      </AuthProvider>
      ;
    </>
  );
}

export default App;
