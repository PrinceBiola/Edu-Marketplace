import "./App.css";
import LayOut from "./LayOut/LayOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Auth/Login";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Shop from './Pages/Shop/Shop'
import ShopContextProvider from "./Context/ShopContext";
import SignUp from "./Pages/Auth/SignUp";

function App() {
  return (
    <>
      <ShopContextProvider>
        {/* <LayOut/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<LayOut />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/shop" element={<Shop />} />
            
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
