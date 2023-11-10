import SectionHeader from "../SectionHeader/SectionHeader";
import Service from "./Service";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import { useState } from "react";
// import axios from "axios";

const Services = () => {
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");

  const services = useServices(asc, search);

  console.log(asc);

  const headerSection = {
    smallHeading: "Service",
    heading: "Our Service Area",
    paras: [
      "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    ],
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target?.search?.value);
  };
  return (
    <section>
      <aside className="text-center">
        <SectionHeader headerSection={headerSection} />
        <form onSubmit={handleSearch}>
          <input type="search" name="search" className="input input-bordered" />
          <input
            type="submit"
            value="Search"
            className="btn bg-logo-red text-white"
          />
        </form>
        <button
          onClick={() => setAsc(!asc)}
          className="btn bg-logo-red text-white hover:bg-logo-red/70 mt-4">
          Price: {asc ? "High to low" : "Low to high"}
        </button>
      </aside>

      <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services?.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </aside>

      <aside className="text-center mb-12">
        <Link className="btn btn-ghost border-logo-red hover:border-logo-red text-logo-red">
          More Services
        </Link>
      </aside>
    </section>
  );
};

export default Services;
