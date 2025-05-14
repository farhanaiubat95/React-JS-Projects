import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/air-logo.png";
import Subtitle from "../../shared/Subtitle";

const quick__links = [
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
const quick__links2 = [
    {
        path: "/gallery",
        display: 'Gallery'
    },
    {
        path: "/login",
        display: 'Login'
    },
    {
        path: "/register",
        display: 'Register'
    }
];
const Footer = () => {
    return (
        <footer className="mt-20">
            <Container className="mx-auto px-3 lg:px-6">
                <div className="lg:mx-6">
                    <Subtitle subtitle={"Stay Safe"} />
                </div>
                <Row className="grid md:grid-cols-4 gap-4 mt-5 lg:mx-6">
                    <Col className="text-center md:text-left">
                        <div className="logo flex flex-col justify-center items-center md:justify-start md:items-start">
                            <img className="w-48" src={logo} alt="" />
                            <p className="my-4 text-color2 font-semibold">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, architecto!
                            </p>

                            <div className="social__links flex items-center gap-4">
                                <span>
                                    <Link className="text-[17px] text-red-600 px-2 py-1 bg-color3 border-2 border-color3 hover:bg-transparent hover:border-color2" to='#'><i class="fa-brands fa-youtube"></i></Link>
                                </span>
                                <span>
                                    <Link className="text-[217x] text-blue-500 px-2 py-1 bg-color3 border-2 border-color3 hover:bg-transparent hover:border-color2" to='#'><i class="fa-brands fa-facebook-f"></i></Link>
                                </span>
                                <span>
                                    <Link className="text-[217x] text-blue-300 px-2 py-1 bg-color3 border-2 border-color3 hover:bg-transparent hover:border-color2" to='#'><i class="fa-brands fa-twitter"></i></Link>
                                </span>
                                <span>
                                    <Link className="text-[20p17 text-yellow-400 px-2 py-1 bg-color3 border-2 border-color3 hover:bg-transparent hover:border-color2" to='#'><i class="fa-brands fa-instagram"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center ">
                        <h5 className="footer_link_title text-[20px] text-color1 mb-3">Discover</h5>
                        <ListGroup>
                            {quick__links.map((item, index) => (
                                <ListGroupItem key={index} className="ps-0 border-0 text-[18px] hover:underline mb-2">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col className="text-center ">
                        <h5 className="footer_link_title text-[20px] text-color1 mb-3">Quick Links</h5>
                        <ListGroup>
                            {quick__links2.map((item, index) => (
                                <ListGroupItem key={index} className="ps-0 border-0 text-[18px] hover:underline mb-2">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col>
                        <div className="gallery">
                            <div className="grid grid-cols-3 gap-2" >
                                <img className="h-[100px] md:h-[70px] lg:h-[80px] w-full" src="src/assets/images/tourimg01.jpg" alt="" />
                                <img className="h-[100px] md:h-[70px] lg:h-[80px] w-full" src="src/assets/images/tourimg02.jpg" alt="" />
                                <img className="h-[100px] md:h-[70px] lg:h-[80px] w-full" src="src/assets/images/tourimg03.jpg" alt="" />
                                <img className="h-[100px] md:h-[70px] lg:h-[80px] w-full" src="src/assets/images/tourimg04.jpg" alt="" />
                                <img className="h-[100px] md:h-[70px] lg:h-[80px] w-full" src="src/assets/images/tourimg05.jpg" alt="" />
                                <img className="h-[100px] md:h-[70px] lg:h-[80px] w-full" src="src/assets/images/tourimg06.jpg" alt="" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer