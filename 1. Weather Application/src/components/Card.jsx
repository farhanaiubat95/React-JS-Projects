import React from 'react'
import { Link } from 'react-router-dom'


//Card body
const CardBody=[
    { title: 'Weather Radar and Satellite Maps', content: 'View precipitation and cloud coverage in real time with radar and satellite maps.', imageUrl: 'https://www.rainviewer.com/images/rv3/homepage/desktop_homepage_2_mob.webp', links: 'Learn More'},
    { title: 'Weather Radar and Satellite Maps', content: 'View precipitation and cloud coverage in real time with radar and satellite maps.', imageUrl: 'https://www.rainviewer.com/images/rv3/homepage/desktop_homepage_3.webp', links: 'Learn More'},
    { title: 'Weather Radar and Satellite Maps', content: 'View precipitation and cloud coverage in real time with radar and satellite maps.', imageUrl: 'https://www.rainviewer.com/images/rv3/homepage/desktop_homepage_4.webp', links: 'Learn More'}
]
const Card = () => {
  return (
    <div className='py-5'>
        {
            CardBody.map((item,index) => (
              index % 2 != 0 ? (
                <div className='flex my-10'>               
                <div className='text-white w-[50%] lg:w-[40%] flex  items-center justify-center px-4'>
                    <div className='w-[95%] lg:w-[85%]'>
                    <h3 className='text-xl lg:text-2xl font-bold'>{item.title}</h3>
                    <p className='text-[14px] lg:text-[18px] font-thin my-5'>{item.content}</p>
                    <Link className='border-b-2 text-[13px] lg:text-[17px] font-medium hover:text-teal-600'>{item.links}</Link>
                    </div>
                </div>
                <div className=' w-[50%] lg:w-[60%] '>
                    <img className='w-[100%]  xl:h-[450px]' src={item.imageUrl} alt="" />
                </div>
            </div>
              ):(
                <div className='flex my-10'>
                <div className=' w-[50%] lg:w-[60%] '>
                    <img className='w-[100%]  xl:h-[450px]' src={item.imageUrl} alt="" />
                </div>
                <div className='text-white w-[50%] lg:w-[40%] flex  items-center justify-center px-4'>
                    <div className='w-[95%] lg:w-[85%]'>
                    <h3 className='text-xl lg:text-2xl font-bold'>{item.title}</h3>
                    <p className='text-[14px] lg:text-[18px] font-thin my-5'>{item.content}</p>
                    <Link className='border-b-2 text-[13px] lg:text-[17px] font-medium hover:text-teal-600'>{item.links}</Link>
                    </div>
                </div>
            </div>
              )
            ))
        }

        <div className='text-center py-5'>
            <Link className='border-b-2 text-white text-[19px] font-medium hover:text-teal-600'>View all features</Link>
        </div>
    </div>
  )
}

export default Card
