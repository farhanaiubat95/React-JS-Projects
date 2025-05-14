import React from 'react';
import { Container, Row, Button, Col } from "reactstrap";
import Searchbar from '../shared/Searchbar';
import Subtitle from '../shared/Subtitle';
import FeaturedTouList from '../components/FeaturedTouList/FeaturedTouList';
const Home = () => {
  return (<>
    {/* Banner part start */}
    <section className='banner-img my-[30px] lg:px-6 '>
      <Container className='mx-auto'>
        <Row className="lg:mx-6">
          <div className="home-img">
            <div className="image-overlay text-center">
              <div className='w-[70%] lg:w-[80%] xl:w-[60%] py-10px '>
              <p className='home-p text-[30px] md:text-[45px] lg:text-[60px] xl:text-[80px] font-bold text-white'>Take a trip around the world together</p>
              </div>
              <div className='w-[80%] sm:w-[80%] xl:w-[60%] mt-[40px] md:mt-[0] text-center'>
                <Searchbar />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
    {/* Banner part end */}

    {/* Tour details part start */}
    <section className='my-[80px] md:my-[80px] px-4 xl:px-0'>
      <div className="container mx-auto  lg:px-6 ">
        <div className="grid-rows-12 mb-5 lg:mx-6">
          <Subtitle subtitle={"Explore"} />
          <h2 className='featured__tour__title mt-5'>Find your best tour</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:mx-6">
          <FeaturedTouList />
        </div>
      </div>
    </section>
    {/* Tour details part end */}

    {/* subscribe part start */}

    {/* subscribe part end */}
  </>
  )
}

export default Home;
