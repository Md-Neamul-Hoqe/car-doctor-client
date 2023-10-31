import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Product from "./Product";
import { Link } from "react-router-dom";
import axios from "axios";

const PProducts = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios.get("services.json").then((res) => setPopular(res.data));
    // fetch("services.json")
    //   .then((res) => res.json())
    //   .then((data) => setPopular(data));
  }, []);

  const headerSection = {
    smallHeading: "Popular Products",
    heading: "Browse Our Products",
    paras: [
      "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    ],
  };
  return (
    <section className="mb-24">
      <aside className="text-center mb-24">
        <SectionHeader headerSection={headerSection} />
      </aside>
      <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {popular?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </aside>
      <aside className="text-center mb-12">
        <Link className="btn btn-ghost border-logo-red hover:border-logo-red text-logo-red">
          More Products
        </Link>
      </aside>
    </section>
  );
};

export default PProducts;
