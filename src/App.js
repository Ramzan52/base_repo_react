import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
