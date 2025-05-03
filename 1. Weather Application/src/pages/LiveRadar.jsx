import { useState } from "react";

export default function LiveRadar() {
    const [activeMap, setActiveMap] = useState("rain");

    const mapUrls = {
        rain: "https://embed.windy.com/embed2.html?lat=20&lon=90&detailLat=23.7&detailLon=90.4&width=100%&height=100%&zoom=5&level=surface&overlay=rain&product=radar&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1",
        wind: "https://embed.windy.com/embed2.html?lat=20&lon=90&detailLat=23.7&detailLon=90.4&width=100%&height=100%&zoom=5&level=surface&overlay=wind&product=radar&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1",
        temp: "https://embed.windy.com/embed2.html?lat=20&lon=90&detailLat=23.7&detailLon=90.4&width=100%&height=100%&zoom=5&level=surface&overlay=temp&product=radar&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1",
    };

    return (
        <div className="py-10 mt-20 text-center bg-[#1b1c1f] text-teal-200">
            <h1 className="text-3xl mb-8">Live Weather Radar Map</h1>

            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => setActiveMap("rain")}
                    className={`px-4 py-2 rounded ${activeMap === "rain" ? "bg-teal-500 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                >
                    Rain Radar
                </button>
                <button
                    onClick={() => setActiveMap("wind")}
                    className={`px-4 py-2 rounded ${activeMap === "wind" ? "bg-teal-500 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                >
                    Wind Map
                </button>
                <button
                    onClick={() => setActiveMap("temp")}
                    className={`px-4 py-2 rounded ${activeMap === "temp" ? "bg-teal-500 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                >
                    Temperature
                </button>
            </div>

            {/* Map */}
            <div className="w-full h-[80vh]">
                <iframe
                    title="Live Weather Map"
                    src={mapUrls[activeMap]}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}
