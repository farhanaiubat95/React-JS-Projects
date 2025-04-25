// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "../pages/home/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} ></Route>
          {/* <Route path="/features" element={<Features />} ></Route>
          <Route path="*" element={<NoPage />} ></Route> */}
        </Routes>
    </BrowserRouter>
  );
}
