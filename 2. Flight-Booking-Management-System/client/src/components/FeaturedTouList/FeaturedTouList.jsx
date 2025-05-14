import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../data/tours';
import { Col } from 'reactstrap';

import useFetch from '../../hooks/userFetch';
import {BASE_URL} from '../../utilities/server';

const FeaturedTouList = () => {

    return (
    <>
        {tourData?.map(tour => (
                <Col  className='mb-4' key={tour._}>
                    <TourCard tour={tour} />
                </Col>
            ))
        }
    </>
    );
};

export default FeaturedTouList;
