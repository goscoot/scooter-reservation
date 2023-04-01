import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import "./scss/styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
