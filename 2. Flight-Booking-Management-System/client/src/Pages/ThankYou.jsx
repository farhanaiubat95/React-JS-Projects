import { section } from 'framer-motion/client'
import React from 'react'
import { Link } from 'react-router-dom';
import '../css/booking.css';


const ThankYou = () => {
    return (
        <section className=' pt-8'>
            <div className="thankyou-img  h-[50vh] py-10 ">
                <div className="thank-overlay">
                    <div className="thank-you text-center bg-black bg-opacity-65 p-16 rounded-[30px] ">
                        <i class="fa-regular fa-circle-check thank-i"></i>
                        <h2>Thank you for your order</h2>
                        <p className='text-[20px] lg:text-[25px]'>Your sit has been booked successfully</p>
                        <button className="w-full mt-5 py-2 border border-[#0698d1] bg-[#0698d1] hover:bg-transparent hover:text-[#0698d1] rounded-[50px]">
                            <Link to="/home">Back to home</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThankYou
