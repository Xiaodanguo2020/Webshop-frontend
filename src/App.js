import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ShopPage from "./pages/ShopPage";
import { NavBar, Navbarcontainer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbarcontainer />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/details/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
