
import Banner from "./Banner.jsx"
import Feature from "./Feature.jsx"
import Card from "./Card.jsx"
import Trust from "./Trust.jsx"
import Stay from "./Stay.jsx"
import Blog from "./Blog.jsx"

const Home = () => {

  return (
    <div className="bg-[#1b1c1f] mt-11 pt-8">
      {/* Banner text  */}
      <div className="flex items-center justify-center pb-5">
      <div className="text-white text-center py-7 w-[500px] md:w-[600px] lg:w-[100%]">
        <h1 className="text-2xl md:text-3xl  lg:text-4xl mb-1">Always One Step Ahead of the Weather</h1>
        <p className="text-base lg:text-xl py-5 text-wrap">Discover the essetial weather app for weather chasing, daily routine, activities and tavel planning.</p>
        <div className="mt-6">
          <a className="lg:text-lg mx-3 text-sm  px-5 py-3 leading-none border-teal-600 rounded bg-teal-600 hover:bg-transparent" href="#">Get the app</a>
          <a className="lg:text-lg mx-3 text-sm  px-5 py-3 leading-none border-teal-600 rounded bg-teal-600 hover:bg-transparent" href="#">Discover Features</a>
        </div>
      </div>
      </div>

      {/* Banner */}
     <div>
       <Banner/>
     </div>

      {/* Body */}
      <div className="w-[95%] xl:w-[65%] md:mx-auto">
      {/* Features Extension */}
      <div>
       <Feature/>
      </div>

       {/* Card */}
      <div>
       <Card/>
      </div>

      {/* Trust */}
      <div>
        <Trust/>
      </div>
      </div>

      {/* Stay Weather Informed */}
      <div  className="w-[100%] xl:w-[65%] md:mx-auto py-2  ">
        <Stay/>
      </div>

      {/* Blog */}
      <div>
        <Blog/>
      </div>

    </div>
  )
}

export default Home