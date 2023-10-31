import { Link } from "react-router-dom";
import PropType from "prop-types";

const Banner = ({ bannerInfo }) => {
  const { heading, breadcrumb } = bannerInfo;

  return (
    <section className="bg-checkout-img rounded-xl relative mb-24 h-60 bg-cover">
      <div className="bg-gradient-to-r from-black rounded-xl flex justify-start items-center h-full w-full">
        <h2 className="ml-24 text-4xl font-bold text-white">{heading}</h2>
        <div className="trapezium"></div>
        <div className="text-sm breadcrumbs absolute bottom-0 left-1/2 transition -translate-x-1/2">
          <ul className="text-xl text-white items-center font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{breadcrumb}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  bannerInfo: PropType.object,
};

export default Banner;
