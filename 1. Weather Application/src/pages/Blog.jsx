import React from "react";

const articles = [
    {
        date: "03 May 2025",
        title: "From Scorching Heat to Icy Winters: How Miners Adapt to Extreme Weather",
        category: "ENERGY, NATURAL RESOURCES, WEATHER",
        image: "mining_image_url",
    },
    {
        date: "01 May 2025",
        title: "Celebrating The Turn of the Seasons: Weather and May Day Traditions Around the World",
        category: "COMMUNITY, TOMRA COMPANY, WEATHER",
        image: "mayday_image_url",
    },
    {
        date: "23 Apr 2025",
        title: "Should Extreme Weather Trigger a Remote Work Policy? Here's Why It Should",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "remote_work_image_url",
    },
    {
        date: "23 Apr 2025",
        title: "Weather Backgrounds for Logistics Delivery",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "logistics_image_url",
    },
    {
        date: "23 Apr 2025",
        title: "How Weather Shapes Consumer Demand",
        category: "HOW WE THINK, TECHNOLOGIES, WEATHER",
        image: "consumer_demand_image_url",
    },
    {
        date: "23 Apr 2025",
        title: "Weather's Impact on Employee Productivity",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "employee_productivity_image_url",
    },
    {
        date: "23 Apr 2025",
        title: "Impact of Weather on Cycling",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "cycling_image_url",
    },
    {
        date: "23 Apr 2025",
        title: "How Weather Can Alter Your Metabolism: Why does your body burn more calories in the cold?",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "metabolism_image_url",
    },
    {
        date: "23 Apr 2025",
        title: "How Heavy Rain Can Affect Diamond Mining",
        category: "HOW WE THINK, TECHNOLOGIES, WEATHER",
        image: "diamond_mining_image_url",
    },
    {
        date: "17 Apr 2025",
        title: "Can your body predict the weather? The truth behind 'weather-sensitive' individuals",
        category: "COMMUNITY, NATURAL RESOURCES, WEATHER",
        image: "weather_sensitive_image_url",
    },
];

export default function WeatherArticles() {
    return (
        <div className="bg-gray-100 p-6 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                        <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}></div>
                        <div className="p-4">
                            <p className="text-sm text-red-500 mb-1">{article.date}</p>
                            <p className="text-xs text-gray-500 uppercase font-semibold mb-2">{article.category}</p>
                            <h2 className="text-lg font-semibold text-gray-800 leading-snug">
                                {article.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-2">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((page, i) => (
                        <button
                            key={i}
                            className={`w-8 h-8 rounded bg-white border border-gray-300 text-sm font-medium ${i === 0 ? "bg-red-500 text-white" : "text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
