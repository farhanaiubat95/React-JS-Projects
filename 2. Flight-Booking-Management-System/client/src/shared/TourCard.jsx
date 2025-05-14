import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utilities/avgRating';

const TourCard = ({ tour }) => {
  const { id, flightFrom, flightTo, departureDate, duration, price, maxPersion, description, reviews, avgRating, photo, featured } = tour;

  const { totalRating, avgrating } = calculateAvgRating(reviews);

  return <div className="tour_card border-2 border-color1 rounded-3xl">
    <Card>
      <div className="tour_img h-[250px] lg:h-[220px]">
        <img className='rounded-3xl border p-[3px] w-full h-full' src={photo} alt="tour_img" />
        {featured && <span className='tour-img-span1'>Featured</span>}
        <span className='tour-img-span2 text-[20px] lg:text-[16px]'>{flightTo}</span>
      </div>
    </Card>
    <CardBody className='px-4 py-5'>
      <div className="card__top flex  justify-end">
        <span className='text-[15px] mr-1'>
          <i class="fa-solid fa-star text-color5_y">
          </i></span>
        <span>{avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? (
            "Not rated"
          ) : (
            <span className='ml-1 text-[15px]'>({reviews.length})</span>
          )}
        </span>
      </div>
      {/* 1 */}
      <div className="card__top flex items-center justify-between">
        <span className='tour_location flex items-center gap-2 text-color2'>
          <i class="fa-solid fa-location-dot"></i>From
        </span>
        <span className='text-color5 text-[18px] font-semibold'>{flightFrom}</span>
      </div>

      {/* 2 */}
      <div className="card__top flex items-center justify-between">
        <span className='tour_location flex items-center gap-2 text-color4'>
          <i class="fas fa-location"></i>To
        </span>
        <span className='text-[#CA7373] text-[18px] font-semibold'>{flightTo}</span>
      </div>

      {/* 3 */}
      <div className="card__top flex items-center justify-between pt-4">
        <span className='flex items-center gap-2 text-color5_y text-[16px] font-bold '>
          <i class="fas fa-dollar-sign"></i>
          <span className='text-[27px]'>{price}</span>
          <span className='font-[400] italic'>/ per person</span>
        </span>
      </div>

      {/*4 */}
      <div className="card__top flex items-center justify-between mt-2">
        <span className='tour_location text-[13px] border-b border-b-transparent pt-2 hover:border-color1 pointer flex items-center gap-2 text-color4'>
          <Link to={`/tours/${id}`}>More Details</Link>
        </span>

        <span className='tour_location text-[13px]  bg-color1 rounded-[10px] border border-color1 hover:bg-transparent pointer flex items-center gap-2 text-color4'>
          <Link className='px-2 py-1' to={`/products/${id}`}>Book Now</Link>
        </span>
      </div>


    </CardBody>
  </div>
};

export default TourCard;
