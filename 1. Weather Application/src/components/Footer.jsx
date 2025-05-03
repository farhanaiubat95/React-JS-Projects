import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

import image1 from "../assets/images/app.webp";
import image2 from "../assets/images/google.webp";


export default function Footer() {
    return (
        <footer className="bg-black text-white text-sm">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-8 border-b border-gray-700">
                {/* App Buttons */}
                <div className="flex justify-end mb-6 space-x-4">
                    <img src={image1} alt="App Store" className="h-10" />
                    <img src={image2} alt="Google Play" className="h-10" />
                </div>

                {/* Links Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    <div>
                        <h4 className="text-gray-400 mb-2">Rain Viewer</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Features</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-400 mb-2">Maps</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Live Radar</a></li>
                            <li><a href="#" className="hover:underline">Hurricane Tracking</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-400 mb-2">API</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">API</a></li>
                            <li><a href="#" className="hover:underline">Data Sources</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-400 mb-2">Appearance</h4>
                        <select className="bg-black border border-gray-600 px-2 py-1 rounded">
                            <option>Auto</option>
                            <option>Dark</option>
                            <option>Light</option>
                        </select>
                    </div>
                    <div>
                        <h4 className="text-gray-400 mb-2">Language</h4>
                        <a href="#" className="hover:underline">English (US)</a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-400">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Social Icons */}
                    <div className="flex space-x-4 text-white text-base">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>

                    <div>Made in Bangladesh</div>

                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Privacy Notice</a>
                        <a href="#" className="hover:underline">Terms and Conditions</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-600 mt-4">
                    © 2025 Web Application by Farhana Bente Islam - ID - 21303195, <a href="#" className="underline">MeteoLab Inc.</a>
                </div>
            </div>
        </footer>
    );
}
