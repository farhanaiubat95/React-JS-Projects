// import 'react'
import Image from "../../assets/images/banner1.jpg"

const Banner = () => {
  const icon1 = 'https://www.accuweather.com/images/weathericons/36.svg';
  return (
    <div className="md:h-[640px] relative ">
      <div className="w-[100%] h-[100%]">
        <img className="w-[100%] h-[100%]" src={Image} alt="" />
      </div>
      <div className="bg-[#02020233]  absolute bottom-0 left-0 top-0 right-0 flex flex-col items-center justify-center">
        <div className="w-[350px] md:w-[400px] lg:w-[500px]">
          {/* Searchbar */}
          <div className="w-full " >
            <form className=" mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>

                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-white border border-teal-600 rounded-lg bg-[#1b1c1f]/75 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Search your Address, City, or Zip Code..."
                  required
                />

                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 border border-teal-600 bg-teal-600 hover:bg-transparent border- focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  ">Search</button>
              </div>
            </form>
          </div>
          {/* location */}
          <div className="mt-5">
            <div className="flex items-center justify-between py-3 px-4 mt-2 bg-[#26282c]/75 border border-teal-700 rounded-lg shadow-md">
              <div className="w-[50%}">
                <h6 className="text-white">Dhaka, Bangladesh</h6>
              </div>
              <div className="flex gap-2.5 w-[50%}">
                <img className="w-[20px]" src={icon1} alt="" />
                <span className="text-white">30°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner