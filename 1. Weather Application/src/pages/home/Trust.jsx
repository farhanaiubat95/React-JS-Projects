import React from 'react'
import Star from "../../assets/images/startrate.svg"

const Trust = () => {
  const Log1 = 'https://www.rainviewer.com/images/rv5/icons/avatar_1.png'
  return (
    <div className='py-5'>
      {/* part 1 */}
      <div className='text-white'>
        <div className='text-center'><h1 className='text-xl lg:text-3xl'>Trusted by Thousands</h1></div>
        <div className='flex justify-center items-center py-5 gap-5 xl:gap-0'>
          <div className='flex flex-col items-center w-[100px] '>
            <h4 className='text-[16px] font-semibold'>AppStore</h4>
            <h5 className='text-[16px] font-semibold'>4.6</h5>
            <img className='w-20 h-4' src={Star} alt="" />
          </div>
          <div className='flex flex-col items-center w-[100px] '>
            <h4 className='text-[16px] font-semibold'>Google Play</h4>
            <h5 className='text-[16px] font-semibold'>4.5</h5>
            <img className='w-20 h-4' src={Star} alt="" />
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div className='flex flex-col mx-5 lg:mx-0 lg:flex-row gap-4 py-5'>
        {/* 1 */}
        <div>
          <div class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-[#FFF1DB1F] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8 text-white">
              <div class="text-gray-900 font-bold text-xl mb-2 flex justify-center"><img src={Star} alt="" /></div>
              <p class="text-base text-center">
                “A little enthusiastic sometimes with rain predictions
                but it's accurate and in the money for radar images, and the one radar app I've kept and not uninstalled”
              </p>
            </div>
            <div class="flex items-center">
              <img className='w-10 h-10 rounded-full mr-4' src={Log1} alt="" />
              <div class="text-sm text-white">
                <p class="leading-none">Farhana Bente Islam</p>
              </div>
            </div>
          </div>
        </div>
        {/*2  */}
        <div>
          <div class="border-r border-b border-l rounded-[16px] border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-[#FFF1DB1F] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8 text-white text-center">
              <div class="text-gray-900 font-bold text-xl mb-2 flex justify-center"><img  src={Star} alt="" /></div>
              <p class="text-base text-center">
                “I must change my feedback once more this is still the best brain app in the app store the issue I was having was with
                my phone and not this top of the line app one part I really like is the widgets.”
              </p>
            </div>
            <div class="flex items-center">
              <img className='w-10 h-10 rounded-full mr-4' src={Log1} alt="" />
              <div class="text-sm text-white">
                <p class="leading-none">Farhana Bente Islam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Trust