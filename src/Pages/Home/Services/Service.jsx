import PropType from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, title, price } = service;

  return (
    <div className="card card-bordered">
      <figure className="px-8 pt-8">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body px-8 py-5">
        <h2 className="card-title">{title}</h2>
        <div className="text-logo-red grow flex justify-between items-center text-xl font-semibold">
          <div>Price: ${price}</div>
          <Link to={`/checkout/${_id}`}>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropType.object,
};

export default Service;
