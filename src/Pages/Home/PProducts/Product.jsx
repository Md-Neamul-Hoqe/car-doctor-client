import PropType from "prop-types";
import { useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { img, title, price, ratings } = product;

  useEffect(() => {
    const theCard = document.getElementById(`card${product._id}`);
    const bag = theCard.querySelector("a");

    theCard?.addEventListener("mouseover", () => {
      bag?.classList?.remove("hidden");
    });

    theCard?.addEventListener("mouseout", () => {
      bag?.classList?.add("hidden");
    });
  }, [product._id]);

  return (
    <div id={`card${product._id}`} className="card card-bordered">
      {/* Hover Effect */}
      <Link className="btn btn-square bg-white absolute right-5 top-5 hidden">
        <HiOutlineShoppingBag className="text-3xl text-logo-red" />
      </Link>

      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="rating" defaultChecked={ratings}>
          <input
            type="radio"
            name={`rating-${product._id}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${product._id}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${product._id}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${product._id}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${product._id}`}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h2 className="card-title text-sub-heading text-2xl font-bold">
          {title}
        </h2>
        <p className="text-logo-red text-xl font-semibold">${price}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropType.object,
};

export default Product;
