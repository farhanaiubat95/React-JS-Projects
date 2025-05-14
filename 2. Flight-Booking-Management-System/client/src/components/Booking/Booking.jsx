import React, { useState } from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import "../../css/booking.css";
import { useNavigate } from "react-router-dom";
const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "farhana@gmail.com",
    fullName: "",
    phone: "",
    maxperson: 1,
    bookFrom: "21-12-24",
    bookTo: "25-12-24",
  });

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }; //call input id

  const serviceFee = 10;
  const totalPrice = Number(price) * Number(credentials.maxperson) + Number(serviceFee);


  const handleClick = e => {
    if (credentials.fullName == "" || credentials.phone == "" || credentials.bookFrom == "" || credentials.bookTo == "" || credentials.maxperson == "" || credentials.userEmail == "") {
      alert("Please fill all the fields");
    } else {
      e.preventDefault();
      console.log(credentials);
    }

  }; //for submit all input



  return (
    <div className="booking py-5 px-6 xl:px-10 bg-color6">
      <div className="flex items-center justify-between pb-3 border-b border-b-color2">
        <span className="flex items-center gap-2 text-color5_y font-bold ">
          <span className="text-[20px] lg:text-[23px]">$</span>
          <span className="text-[30px] lg:text-[38px]">{price}</span>
          <span className="font-[400] italic text-gray-300 text-[16px] lg:text-[20px]">
            / per person
          </span>
        </span>
        <span className="text-[15px] mr-1">
          <i class="fa-solid fa-star text-color5_y"></i>

          <span className="ml-1">
            {avgRating === 0 ? null : avgRating}
            <span className="mx-1 text-gray_d">({reviews?.length})</span>
          </span>
        </span>
      </div>

      {/* Ticket booking form start*/}
      <div>
        <div className="booking__form w-full">
          <h5 className="py-3 text-[22px] text-[#bfdae4]">Information</h5>
          <form className="booking__info-form" onSubmit={handleClick}>
            <FormGroup>
              <input
                type="text"
                placeholder="give your full name"
                id="fullName"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                placeholder="at least 11 digits"
                id="phone"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="flex justify-between">
              <div className="w-[50%] pr-2">
                <lebel className="block text-[#bfdae4]">Date From</lebel>
                <input
                  type="date"
                  placeholder="date from"
                  id="bookFrom"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-[50%] pl-2">
                <lebel className="block text-[#bfdae4]">Date To</lebel>
                <input
                  type="date"
                  placeholder="date to"
                  id="bookTo"
                  required
                  onChange={handleChange}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                placeholder="max person"
                id="maxperson"
                required
                onChange={handleChange}
              />
            </FormGroup>
          </form>
        </div>
      </div>
      {/* Ticket booking form end */}

      {/* Ticket booking form last part start*/}
      <div className="booking__form__last pt-2">
        <ListGroup>
          <ListGroupItem className="border-0 px-0 py-2 flex justify-between items-center font-light text-[17px]">
            <h5>
              $ {price} <i class="fa-solid fa-xmark"></i> 1 person
            </h5>
            <span>$ {price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 flex justify-between items-center font-light text-[17px]">
            <h5>Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total flex justify-between items-center py-2 font-bold text-[19px]">
            <h5>Total</h5>
            <span>{totalPrice}</span>
          </ListGroupItem>
        </ListGroup>
      </div>

      <button className="w-full mt-5 py-2 border border-[#000b29] bg-[#000b29] hover:bg-transparent rounded-[50px]" onClick={handleClick}>
        Book Now
      </button>
      {/* Ticket booking form last part end*/}
    </div>
  );
};

export default Booking;
