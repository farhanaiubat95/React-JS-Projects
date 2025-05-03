import React from "react";

const articles = [
    {
        date: "03 May 2025",
        title: "From Scorching Heat to Icy Winters: How Miners Adapt to Extreme Weather",
        category: "ENERGY, NATURAL RESOURCES, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/681/4e8/d07/6814e8d0707cb690881405.jpg",
    },
    {
        date: "01 May 2025",
        title: "Celebrating The Turn of the Seasons: Weather and May Day Traditions Around the World",
        category: "COMMUNITY, TOMRA COMPANY, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/681/24e/13b/68124e13bce90684017744.jpg",
    },
    {
        date: "23 Apr 2025",
        title: "Should Extreme Weather Trigger a Remote Work Policy? Here's Why It Should",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/681/102/bde/681102bde6585555777407.jpg",
    },
    {
        date: "23 Apr 2025",
        title: "Weather Backgrounds for Logistics Delivery",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/681/0f5/395/6810f5395943a354401756.jpg",
    },
    {
        date: "23 Apr 2025",
        title: "How Weather Shapes Consumer Demand",
        category: "HOW WE THINK, TECHNOLOGIES, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/680/b9f/68c/680b9f68c3381931282480.jpg",
    },
    {
        date: "23 Apr 2025",
        title: "Weather's Impact on Employee Productivity",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/680/902/d57/680902d573846075974152.jpg",
    },
    {
        date: "23 Apr 2025",
        title: "Impact of Weather on Cycling",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/680/a4a/0bc/680a4a0bce7d4094115465.jpg",
    },
    {
        date: "23 Apr 2025",
        title: "How Weather Can Alter Your Metabolism: Why does your body burn more calories in the cold?",
        category: "BUSINESS, TOMRA COMPANY, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/680/902/d57/680902d573846075974152.jpg",
    },
    {
        date: "23 Apr 2025",
        title: "How Heavy Rain Can Affect Diamond Mining",
        category: "HOW WE THINK, TECHNOLOGIES, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/680/7ab/d5e/6807abd5e32b5252369300.jpg",
    },
    {
        date: "17 Apr 2025",
        title: "Can your body predict the weather? The truth behind 'weather-sensitive' individuals",
        category: "COMMUNITY, NATURAL RESOURCES, WEATHER",
        image: "https://openweather.co.uk/storage/app/uploads/public/680/a4a/0bc/680a4a0bce7d4094115465.jpg",
    },
];

export default function WeatherArticles() {
    return (
        <div>
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
                                <h2 className="text-lg font-semibold text-teal-800 leading-snug">
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
            
        </div>
    );
}
