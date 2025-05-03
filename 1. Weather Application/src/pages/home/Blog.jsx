import React from "react";
import image1 from "../../assets/images/blog1.jpg";
import image2 from "../../assets/images/blog2.jpg";
import image3 from "../../assets/images/blog3.jpg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Forecast Weather Smarter: Avoid These 5 Common Mistakes",
    author: "Anastasia M.",
    date: "Apr 28",
    readTime: "4 mins read",
    image: image1,
  },
  {
    title: "Weather Radar Resolution: A Key to Sharper Forecasts",
    author: "Anastasia M.",
    date: "Apr 22",
    readTime: "4 mins read",
    image: image2,
  },
  {
    title: "Heat Bursts: Nighttime Temperature Spikes",
    author: "Anastasia M.",
    date: "Apr 14",
    readTime: "4 mins read",
    image: image3,
  },
];

export default function BlogSection() {
  return (
    <div className=" text-white py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Blog</h2>
      <p className="text-center mb-10">
        Discover informative articles, news, and updates related to Rain Viewer and weather events.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-teal-800 rounded-lg overflow-hidden shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold underline hover:text-teal-200 cursor-pointer mb-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {post.author} · {post.date} · {post.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center py-5'>
        <Link className='border-b-2 text-white text-[19px] font-medium hover:text-teal-600'>View all features</Link>
      </div>
    </div>
  );
}
