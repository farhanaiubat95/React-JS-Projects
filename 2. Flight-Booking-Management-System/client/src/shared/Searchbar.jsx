import React, { useRef } from 'react'
import { Form, FormGroup } from 'reactstrap';
const Searchbar = () => {

  // take useRef from React component and create a new instance of it. 
  const flightFromRef = useRef('');
  const flightToRef = useRef('');
  const maxPersionRef = useRef(0);

  //SearchHandler is used to handle navigation requests from the server 
  const SearchHandler = () => {
    const flightFrom = flightFromRef.current.vlaue
    const flightTo = flightToRef.current.value
    const maxPersion = maxPersionRef.current.value
  }
  return (

    <div className="search__bar w-full">
      <Form className='flex flex-wrap md:flex-nowrap items-center md:gap-4 lg:mx-4 xl:mx-0 md:p-2'>
        <FormGroup className='flex gap-3 form_group'>
          <span className='text-[18px] xl:text-[24px]'><i class="fa-solid fa-location-dot"></i></span>
          <div className='text-left'>
            <h6 className='text-[16px] md:text-[18px] xl:text-[20px]'>Flight From</h6>
            <input type="text" placeholder="Where from?" required ref={flightFromRef} />
          </div>
        </FormGroup>
        <FormGroup className='flex gap-3 form_group'>
          <span className='text-[18px] xl:text-[24px]'><i class="fa-solid fa-location-crosshairs"></i></span>
          <div className='text-left'>
            <h6 className='text-[16px] md:text-[18px] xl:text-[20px]'>Flight To</h6>
            <input type="text" placeholder="Where to?" required ref={flightToRef} />
          </div>
        </FormGroup>
        <FormGroup className='flex gap-3 form_group'>
          <span className='text-[18px] xl:text-[24px]'><i class="fa-solid fa-users"></i></span>
          <div className='text-left'>
            <h6 className='text-[16px] md:text-[18px] xl:text-[20px]'>Person</h6>
            <input type="number" placeholder="total persons" required ref={maxPersionRef} />
          </div>
        </FormGroup>
        <FormGroup className='flex justify-end w-[100%] sm:w-[5%]'>
          <button className='search__icon' type="submit" onClick={SearchHandler}>
            <i class="fas fa-search"></i>
          </button>
        </FormGroup>



      </Form>
    </div>
  )
}

export default Searchbar;
