// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        {/* <Route path="/about" component={About} /> */}
      </Routes>
    </Router>
  );
}

export default App;
