import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { NavLink, Link } from "react-router-dom";

const nav__links = [
    {
        path: "/home",
        display: 'Home'
    },
    {
        path: "/about",
        display: 'About'
    },
    {
        path: "/tours",
        display: 'Tours'
    }
];
const ResponsiveMenu = ({ open }) => {
    return (
        <AnimatePresence mode='wait'>
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -500 }}
                        transition={{ duration: 0.3 }}
                        className='absolute top-[100px] left-0 mr-10 w-full h-screen z-20 md:hidden'
                    >
                        <div className='text-lg font-semibold uppercase bg-color3 border border-color2 text-white  m-6 rounded-3xl'>
                            <ul className="flex flex-col justify-center items-center">
                                {
                                    nav__links.map((item, index) => (
                                        <li className="responsive-menu " key={index}>
                                            <NavLink to={item.path}>
                                                {item.display}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveMenu
