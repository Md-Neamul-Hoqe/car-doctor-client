import PropTypes from "prop-types";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const BannerImage = ({ image, heading, paragraph, idx }) => {
  return (
    <div
      id={`slide${idx}`}
      className="carousel-item relative w-full 2xl:h-[calc(50vw/2)] md:max-h-screen rounded-xl">
      <img src={image} className="w-full rounded-xl" />
      <div className="absolute flex h-full p-28 bottom-0 bg-gradient-to-r from-gray-950 to-gray-950/0">
        <div className="space-y-6 max-w-md text-white">
          <h2 className="font-bold text-6xl leading-[75px] text-white">{heading}</h2>
          <p className="text-lg leading-8">{paragraph}</p>
          <div className="flex gap-5">
            <button className="btn btn-ghost border-white hover:border-logo-red hover:bg-logo-red">
              Discover More
            </button>
            <button className="btn btn-ghost border-white hover:border-logo-red hover:bg-logo-red">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${idx === 1 ? 4 : idx - 1}`}
          className="btn btn-sm md:btn-md lg:btn-lg btn-circle border-0 text-white bg-opacity-50 hover:bg-logo-red">
          <AiOutlineArrowLeft />
        </a>
        <a
          href={`#slide${idx === 4 ? 1 : idx + 1}`}
          className="btn btn-sm md:btn-md lg:btn-lg btn-circle border-0 text-white bg-opacity-50 hover:bg-logo-red">
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
};

BannerImage.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  idx: PropTypes.number,
};

export default BannerImage;
