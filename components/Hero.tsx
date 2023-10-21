import Image from "next/image";
import heroImage from "../public/hero.png";
// import heroSvg from "../../public/location.svg";

const Hero = () => {
  return (
    <>
      <div className="hero flex">
        <div className="text-center my-auto">
          <h1 className="font-bold text-[54px]">Putuk Truno Camp Area</h1>
          <p className=" text-gray-50">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app
          </p>
        </div>
        <div className="max-w-flex-col">
          <Image src={heroImage} alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
