import React from 'react';
import '../css/common-section.css';
import { Container, Row, Col } from 'reactstrap';

const CommonSection = ({ title }) => {
    return (
        <section className="common_section relative h-[200px] mt-4 lg:h-[280px]">
            <div className="common_section_overlay">
                <div className='leading-[200px] lg:leading-[280px]' lg='12'>
                    <h1 className=' common-section-h1 text-[30px] lg:text-[50px] italic'>{title}</h1>
                </div>
            </div>
        </section>
    )
}

export default CommonSection;
