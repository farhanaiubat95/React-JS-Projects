import Image1 from "../../assets/images/mac.jpg";
import Image2 from "../../assets/images/android-authority.jpg";
import Image3 from "../../assets/images/the-verge.png";

const Feature = () => {
  return (
    <div className="my-5 px-4">
      <div className="flex items-center justify-center text-white">
        <span className=" py-5 text-3xl lg:text-5xl">Feature in</span>
      </div>
      <div className="flex items-center justify-between">
        <img className="w-[130px] md:w-[200px]" src={Image1} alt="" />
        <img className="w-[130px] md:w-[200px]" src={Image2} alt="" />
        <div className="w-[130px] h-[100px] md:w-[200px]">
          <img className="w-[100%] md:w-[100%] " src={Image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
