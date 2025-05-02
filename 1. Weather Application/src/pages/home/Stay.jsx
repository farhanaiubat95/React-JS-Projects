import React from "react";

const Stay = () => {
  return (
      <div className=" mb-2 flex items-center justify-center pb-5  px-5 xl:px-20 bg-teal-600">
        <div className="text-white text-center py-7 w-[500px] md:w-[100%] ">
          <h5 className="text-2xl md:text-2xl  lg:text-3xl mb-1">
            Stay Weather-Informed
          </h5>
          <p className="text-base lg:text-lg py-5 text-wrap">
            Get ahead of the weather with Rain Viewer - a simple but powerful
            weather app. Download now to experience accurate forecasts, timely
            rain alerts, and an intuitive user interface.
          </p>
          <div className="mt-6">
            <a
              className="lg:text-lg mx-3 text-sm  px-5 py-3 leading-none border border-white rounded bg-white text-teal-600 hover:bg-transparent hover:text-white"
              href="#"
            >
              Get the app
            </a>
          </div>
        </div>
      </div>
  );
};

export default Stay;
