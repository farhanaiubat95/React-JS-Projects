export default function WeatherApiPlans() {
    const plans = [
        {
            title: "Current Weather Data",
            badges: ["API", "Available"],
            points: [
                "Access current weather data for any location on Earth including over 200,000 cities",
                "Data is available in JSON, XML, HTML formats",
                "Includes data on temperature, humidity, pressure, wind, cloud, and more"
            ],
        },
        {
            title: "Hourly Forecast 4 days",
            badges: ["API", "Available"],
            points: [
                "Hourly forecast available for 4 days",
                "Covers over 200,000 cities",
                "Includes temperature, precipitation, wind, and more"
            ],
        },
        {
            title: "Daily Forecast 16 days",
            badges: ["API", "Available"],
            points: [
                "16-day forecast available for any location",
                "Includes weather summary and detailed parameters",
                "Included in paid subscription plans"
            ],
        },
        {
            title: "Climatic Forecast 30 days",
            badges: ["API", "Available"],
            points: [
                "Weather forecast for 30 days",
                "Includes climatic parameters",
                "Available through paid subscription"
            ],
        },
        {
            title: "Bulk Download",
            badges: ["Available", "Subscription"],
            points: [
                "Get weather archive in bulk for any location",
                "Historical data includes hourly, daily info for 5+ years",
                "Available to Professional & Expert tiers"
            ],
        },
        {
            title: "Global Weather Alerts Push notifications",
            badges: ["Available"],
            points: [
                "Get alerts for extreme weather",
                "Includes event name, type, location, urgency, severity",
                "Free for government and emergency use"
            ],
        },
        {
            title: "5 Day / 3 Hour Forecast",
            badges: ["API", "Available"],
            points: [
                "3-hour forecast for 5 days for any location",
                "JSON and XML formats",
                "Includes temperature, wind, humidity"
            ],
        },
        {
            title: "Road Risk API",
            badges: ["API", "Available"],
            points: [
                "Specify your road risk weather needs",
                "Covers road wetness, ice, fog, snow",
                "Includes air temperature, visibility, wind speed"
            ],
        },
        {
            title: "Solar Irradiance API",
            badges: ["API", "Available"],
            points: [
                "Get solar radiation data by location",
                "Covers global horizontal irradiance (GHI), direct normal irradiance (DNI), etc.",
                "Helpful for solar energy planning"
            ],
        },
        {
            title: "Solar Irradiance History Bulk",
            badges: ["Bulk", "Subscription"],
            points: [
                "Get solar radiation history data",
                "Covers past conditions for modeling",
                "Available for download with subscription"
            ],
        },
        {
            title: "Solar Irradiance History Forecast Bulk",
            badges: ["Bulk", "Subscription"],
            points: [
                "Get both historical and forecasted solar irradiance in one dataset",
                "Supports solar power systems planning",
                "Available for large-scale use"
            ],
        },
    ];

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto text-gray-800">
            {/* Header */}
            <h2 className="text-3xl font-bold mb-4">
                Current & Forecast Weather API Plans
            </h2>
            <p className="mb-10 text-gray-600">
                Fast and easy-to-use weather APIs. Includes data on current weather, forecast, solar radiation, alerts, and more.
            </p>

            {/* Grid of cards */}
            <div className="grid md:grid-cols-2 gap-6">
                {plans.map((plan, idx) => (
                    <div key={idx} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow transition">
                        <h3 className="text-lg font-semibold mb-2 flex flex-wrap items-center gap-2">
                            {plan.title}
                            {plan.badges.map((badge, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full"
                                >
                                    {badge}
                                </span>
                            ))}
                        </h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {plan.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
