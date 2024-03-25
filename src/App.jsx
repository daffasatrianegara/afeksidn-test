import LandingPage from "./pages/landing-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
