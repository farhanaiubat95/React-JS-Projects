import React from "react";
import Image from "../../assets/images/api.webp";
import { Link } from "react-router-dom";

export default function ApiSection() {
    return (
        <div>
            <div className=" text-white p-8 flex flex-col md:flex-row items-center justify-center">
                {/* Text Section */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">API</h2>
                    <p className="mb-4">
                        For developers: Explore our API offering, including features, pricing, and access.
                    </p>
                    <Link className='border-b-2 text-[13px] lg:text-[17px] font-medium hover:text-teal-600'>Learn more</Link>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={Image}
                        alt="API Plug"
                        className="mx-auto"
                    />
                </div>
            </div>
          
        </div>
    );
}
