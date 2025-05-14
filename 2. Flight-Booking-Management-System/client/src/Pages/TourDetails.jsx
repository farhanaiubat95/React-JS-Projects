import React, { useRef, useState } from 'react';
import { ListGroup, Form } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../data/tours';
import calculateAvgRating from '../utilities/avgRating';
import Subtitle from '../shared/Subtitle';
import avatar from "../assets/images/avatar.png";
import Booking from '../components/Booking/Booking';

const TourDetails = () => {

  const { id } = useParams();
  const reviewMsgRef = useState('');
  const [tourRating, setTourRating] = useState(null);

  // This is the route that will be used to get the tour data from the tour data provider 
  // We will call our API and load tour data from tour database
  const tour = tourData.find(tour => tour.id === id);
  // If tour data is not found, display a message

  const { flightFrom, flightTo, departureDate, duration, price, maxPersion, description, reviews, avgRating, photo, featured } = tour;

  const { totalRating, avgrating } = calculateAvgRating(reviews);

  // format date
  const formatDate = { day: 'numeric', month: 'long', year: 'numeric' };

  // submit request to the server
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;


    // later call the API 
  }

  return (
    <>
      <section className='pt-12 '>
        <div className="container mx-auto px-4 lg:px-12">
          <div className='mb-7 lg:px-10'>
            <Subtitle subtitle={flightTo} />
          </div>

          <div className='flex flex-col lg:flex-row justify-between lg:px-6'>
            {/* div - 1 */}
            <div className="flex flex-col w-full  lg:w-[60%] xl:w-[75%] lg:px-6">
              <div className="tour__image w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] mb-5 lg:mb-3">
                <img className='w-full h-full rounded-[20px] border border-color2' src={photo} alt={flightTo} />
              </div>

              <div className="tour__info border border-gray-500 rounded-[10px] p-5 mt-5">
                {/* text-1 */}
                <div className='flex justify-between items-center gap-5 text-color2'>
                  <div>
                    <h1 className='text-[25px] lg:text-[35px]'>{flightFrom} to {flightTo}</h1>
                  </div>
                  <div>
                    <span className='text-[15px] mr-1'>
                      <i class="fa-solid fa-star text-color5_y">
                      </i>
                    </span>
                    <span className='text-white'>{avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span className='ml-1 text-[15px]'>({reviews.length})</span>
                      )}
                    </span>
                  </div>
                </div>

                {/* text-2 */}
                <div className='tour__time my-3 text-gray-200'>
                  <i class="fas fa-calendar"></i><span className='ml-2 mr-10'>Departure Date : {departureDate}</span>
                  <i class="fas fa-calendar-alt"></i> <span className='ml-2 mr-10'>Duration Date : {duration}</span>
                </div>

                {/* text-3 */}
                <div className='tour__time text-gray-200'>
                  <span className='text-[20px] text-color5_y'><i class="fa-solid fa-dollar-sign"></i>{price}</span> <span className='mr-10 text-gray-300'> / per person</span>
                  <i class="fa-solid fa-users"></i> <span className='ml-2 mr-10'>Max person : {maxPersion}</span>
                </div>

                {/* text-4 */}
                <div className='tour__description mt-6'>
                  <h2 className='text-[22px] text-color1'>Description</h2>
                  <p className='py-3 text-gray-200'>{description}</p>
                </div>

              </div>

              {/* reviews section */}
              <div className="tour__reviews  border border-gray-500 rounded-[10px] p-5 mt-5">
                <h4 className='mb-8 text-[20px] italic text-color2'>Reviews ({reviews?.length} reviews) </h4>

                <Form onSubmit={submitHandler} className='mb-8'>
                  <div className="rating_group mb-5 flex gap-4 text-[#FCC737]">
                    <span onClick={() => setTourRating(1)}>1 <i class="fa-solid fa-star"></i></span>
                    <span onClick={() => setTourRating(2)}>2 <i class="fa-solid fa-star"></i></span>
                    <span onClick={() => setTourRating(3)}>3 <i class="fa-solid fa-star"></i></span>
                    <span onClick={() => setTourRating(4)}>4 <i class="fa-solid fa-star"></i></span>
                    <span onClick={() => setTourRating(5)}>5 <i class="fa-solid fa-star"></i></span>
                  </div>

                  <div className="reviews__input w-full flex items-center justify-between px-2 py-1 border border-color1 rounded-[50px] hover:shadow-color1 shadow-sm">
                    <input className='w-full px-2 bg-transparent focus:outline-none' ref={reviewMsgRef} type="text" placeholder='give your review here' required />
                    <button className='head-btn my-1 md:text-[17px] hover:bg-transparent text-white hover:text-color2 bg-color1 p-1 px-4 rounded-[50px] border border-color2' type='submit'>Submit</button>
                  </div>
                </Form>

                <ListGroup className='user__reviews'>
                  {
                    reviews?.map(reviews => (
                      <div className="reviews_content flex justify-between mb-12 gap-6">
                        <div className='flex gap-2 w-[90%]'>
                          <img className='w-8 h-8 rounded-[50px] border border-color2' src={avatar} alt='user' />
                          <div className='flex flex-col '>
                            <h3 className='text-[16px] text-[#1ad0af] font-semibold font-sans'>{reviews.name}</h3>
                            <h5 className='mb-4 text-[13px] text-[#F5F0CD]'>
                              {
                                new Date("12-20-2024").toDateString(
                                  "en-US",
                                  formatDate
                                )
                              }</h5>
                            <p className='text-gray-300 text-[15px] '>{reviews.comment}</p>
                          </div>
                        </div>

                        <div className="reviews_content_info w-[10%]">
                          <span className='text-[15px]'>{reviews.rating} </span>
                          <span className='text-color5_y '><i class="fa-solid fa-star"></i></span>
                        </div>

                      </div>

                    ))
                  }
                </ListGroup>
              </div>
            </div>

            {/* div - 2 */}
            <div className='lg:w-[40%] xl:w-[35%]'>
              <div className='text-center block lg:hidden mt-10 mb-5'>
                <Subtitle subtitle={'Fill up this form'} />
              </div>
              <Booking tour={tour} avgRating={avgRating} />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default TourDetails;
