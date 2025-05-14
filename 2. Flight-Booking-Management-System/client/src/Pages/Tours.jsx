import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import { Col } from 'reactstrap';
import tourData from '../data/tours';
import TourCard from '../shared/TourCard';
import Searchbar from '../shared/Searchbar';
import NewsLetter from '../shared/NewsLetter';
import { span } from 'framer-motion/client';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <section>
        <CommonSection title={"Your Favourite All Tour Deals"} />
      </section>

      <section className='common_tour'>
        <div className="container mx-auto my-12">
          <div class="grid mx-6 ">
            <Searchbar />
          </div>
        </div>
      </section>

      <section className="our_tours">
        <div className="container mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-10 sm:mx-3 lg:mx-6">
            {
              tourData?.map(tour => (
                <Col className='mb-4' key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            }
          </div>

          <div className="grid text-center">
            <div className="pagination flex items-center justify-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number => (
                <span
                  key={number}
                  onClick={() => setPage(number)}
                  className={page === number ? "active__page" : ""}
                >
                  {number + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <NewsLetter />
      </section>
    </>
  )
}

export default Tours;
