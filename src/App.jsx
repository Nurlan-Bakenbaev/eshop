import NavbarComponent from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Success from "./components/pages/Success";
import Cancel from "./components/pages/Cancel";
import Store from "./components/pages/Store";
import CartProvider from "./CartContext";

function App() {
  return (
      <CartProvider>
    <Container>
      <NavbarComponent />
      <BrowserRouter>
      <Routes>
        <Route index element={<Store/>}/>
        <Route path="success" element={<Success/>}/>
        <Route path="cancel" element={<Cancel/>}/>


      </Routes>
      </BrowserRouter>
    </Container>
    </CartProvider>
  );
}

export default App;
