import React, { useState } from "react";
import "../css/login.css";
import { Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import loginImg from "../assets/images/login-bg.png"

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }; //call input id

  const handleClick = e => {
    if (credentials.email == "" || credentials.password == "" || credentials.username == "") {
      alert("Please fill all the fields");
    } else {
      e.preventDefault();
      console.log(credentials);
    }
  }; //for submit all input

  return (
    <section className="my-24 mx-5 log-form-section">
      <div className="loginimg rounded-[15px] md:w-[80%] xl:w-[60%]">
        <div className="login-overlay flex justify-center items-center bg-black bg-opacity-15 rounded-[15px]">
          <div className="p-4 flex flex-col lg:flex-row justify-between items-center gap-6 w-full">
            <div className="bg-[#043545] px-5 bg-opacity-85 w-full lg:w-[50%] rounded-[15px] flex flex-col justify-center items-center py-[180px]">
              <div className="log-text">
                <div className="text-center">
                  <h1 className="text-white text-[40px] font-bold">Welcome </h1>
                  <p className="text-white px-3">
                    “Remember that happiness is a way of travel – not a destination.” – Roy M. Goodman
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#043545] px-5  py-10 bg-opacity-85 w-full lg:w-[50%] rounded-[15px]">
              <div className="w-full log-form pt-7 relative">
                <div className="form-img text-center w-[130px] h-[130px] rounded-[50px] absolute">
                  <div className="relative">
                    <div><img src={loginImg} alt="" /></div>
                    <div className="w-full h-full absolute
                                                        rounded-[70px] form-img-overlay "></div>
                  </div>
                </div>

                <div>
                  <h2 className="text-center mb-5 text-[45px] lg:text-[35px]">Registration From</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup className="mt-5">
                      <input required id="username" type="text" className="w-full bg-transparent focus:outline-none rounded-[10px] border-b px-2 py-1 shadow-sm " placeholder="@alex" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="mt-5">
                      <input required id="email" type="email" className="w-full bg-transparent focus:outline-none rounded-[10px] border-b px-2 py-1 shadow-sm " placeholder="enter your email" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="mt-5">
                      <input required id="password" type="password" className="w-full bg-transparent focus:outline-none rounded-[10px] border-b px-2 py-1 shadow-sm " placeholder="enter your password" onChange={handleChange} />
                    </FormGroup>
                    <div className="text-center">
                      <Button type="submit" className=" w-full mt-8 py-2 border hover:bg-[#265667fa] rounded-[10px] " onClick={handleClick}>Register</Button>
                    </div>
                    <FormGroup className="flex justify-center items-center lg:text-[12px] xl:text-[14px] mt-4 px-2">
                      <div className="text-center mt-4">
                        Already have an account? <Link to="/login"><span className="text-blue-500 hover:text-blue-300">Sign in</span></Link>
                      </div>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;