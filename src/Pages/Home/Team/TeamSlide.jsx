import PropTypes from "prop-types";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import SocialLinks from "./SocialLinks";

const TeamSlide = ({ image, heading, paragraph, idx }) => {
  //   console.log(idx, `carousel${idx}`);
  return (
    <div id={`carousel${idx}`} className="keen-slider__slide number-slide1">
      <div className="card bg-base-100 card-bordered">
        <figure className="mx-7 mt-7">
          <img
            src={image}
            alt="Drink"
            className="w-[314px] h-[293px] rounded-b-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="font-bold text-2xl text-sub-heading">{heading}</h2>
          <p className="text-xl font-semibold">{paragraph}</p>
          <SocialLinks />
        </div>
      </div>
      {/* <div className="absolute flex justify-between gap-6 transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          onClick={() => console.log(`carousel${idx}`)}
          href={`#carousel${idx === 1 ? 6 : idx - 1}`}
          className="btn btn-sm md:btn-md lg:btn-lg btn-circle border-0 text-heading hover:text-white bg-opacity-50 hover:bg-logo-red">
          <AiOutlineArrowLeft />
        </a>
        <a
          onClick={() => console.log(`carousel${idx}`)}
          href={`#carousel${idx === 6 ? 1 : idx + 1}`}
          className="btn btn-sm md:btn-md lg:btn-lg btn-circle border-0 text-heading hover:text-white bg-opacity-50 hover:bg-logo-red">
          <AiOutlineArrowRight />
        </a>
      </div> */}
    </div>
  );
};

TeamSlide.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  idx: PropTypes.number,
};

export default TeamSlide;
