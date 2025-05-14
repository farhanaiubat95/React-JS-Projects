import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "./../../assets/images/air-logo1.png";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";

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
const Header = () => {
    const [open, setOpen] = React.useState(false);
    return <header className="header">
        <Container className="md:px-4  xl:px-0 mx-auto">
            <Row className=" lg:mx-[5rem]">
                <div className="nav__wrapper flex items-center justify-between">
                    {/* -----Logo start------- */}
                    <div className="logo py-2 px-4 md:p-0 flex flex-col justify-left items-start">
                        <img className="w-2/4 md:w-4/5" src={logo} alt="" />
                        <button onClick={() => setOpen(!open)} className="mobile-menu mt-2 block md:hidden">
                            <i class="fa-solid fa-bars text-color2"></i>
                        </button>
                    </div>
                    {/* -----Logo end------- */}

                    {/* -----Menu Start------- */}
                    <div className="navigation hidden md:block absolute top-[130px] md:static px-3">
                        <ul className="menu flex flex-col md:flex-row items-center md:gap-5 text-color2 font-semibold">
                            {
                                nav__links.map((item, index) => (
                                    <li className="nav__item md:text-[17px] lg:text-[20px] min-w-[460px] md:min-w-[0] text-center border border-color3 hover:bg-color3 hover:md:bg-transparent md:border-0  bg-color1 md:bg-transparent  text-white md:text-color2" key={index}>
                                        <NavLink to={item.path}>
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* -----Menu end------- */}

                    <div className="nav__right flex flex-col md:flex-row items-center gap-4 pr-3 mt-[-40px] md:mt-0">
                        <div className="nav__btn flex items-center gap-4">
                            <Button className="head-btn md:text-[17px] hover:bg-color1 p-1 text-color2 hover:text-white px-4 rounded-[50px] border border-transparent"><Link to='/login'>Login</Link></Button>
                            <Button className="head-btn md:text-[17px] hover:bg-transparent text-white hover:text-color2 bg-color1 p-1 px-4 rounded-[50px] border border-color2"><Link to='/register'>Register</Link></Button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>

        {/* -----Mobile Sidebar Responsive------- */}
        <ResponsiveMenu open={open} />

    </header>
};
export default Header;