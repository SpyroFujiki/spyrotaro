import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar, Footer, HomePage, TOS, Feedback, Services} from "./index.js";
import ScrollToTop from "/src/effect";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <div style={{flex : 1}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tos" element={<TOS />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
