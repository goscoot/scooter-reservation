import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import "./scss/styles.scss";
import Products from "./pages/Products";
import Booking from "./pages/Booking";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
