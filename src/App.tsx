import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mods from "./pages/Mods";
// import PublicAddon from "./pages/PublicAddon";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mods" element={<Mods />} />
        {/* <Route path="/public-addon" element={<PublicAddon />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
