import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Service from "./Service";
import { Link } from "react-router-dom";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      setServices(res.data);
    });
    // fetch("http://localhost:5000/services")
    //   .then((res) => res.json())
    //   .then((data) => setServices(data));
  }, []);

  const headerSection = {
    smallHeading: "Service",
    heading: "Our Service Area",
    paras: [
      "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    ],
  };
  return (
    <section>
      <aside className="text-center">
        <SectionHeader headerSection={headerSection} />
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
