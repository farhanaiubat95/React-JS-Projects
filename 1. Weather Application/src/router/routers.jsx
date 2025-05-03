import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import LiveRadar from "../pages/LiveRadar.jsx";
import WeatherApiPlans from "../pages/WeatherApiPlans.jsx";
import Blog from "../pages/Blog.jsx";
// You can add more pages here later

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liveradar" element={<LiveRadar />} />
      <Route path="/weather-api" element={<WeatherApiPlans />} />
      <Route path="/weather-blog" element={<Blog />} />

    </Routes>
  );
}
