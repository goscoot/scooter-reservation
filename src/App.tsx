import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import "./scss/styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
