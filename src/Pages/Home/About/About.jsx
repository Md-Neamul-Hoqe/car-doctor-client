import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  const headerSection = {
    smallHeading: "About Us",
    heading: "We are qualified & of experience in this field",
    paras: [
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
      " the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
    ],
  };

  return (
    <section className="hero mb-24">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <aside className="indicator flex-1">
          <div className="indicator-item indicator-middle">
            {/* <div className="indicator-item indicator-middle indicator-center"> */}
            <div className="w-1/2 ring ring-white rounded-sm ring-offset-base-100 ring-offset-4">
              <img src={parts} className="rounded-none" alt="About section" />
            </div>
          </div>
          <img
            src={person}
            className="w-4/5 rounded-lg z-0"
            alt="About section"
          />
        </aside>
        <aside className="card items-start flex-1 w-full bg-base-100 space-y-5">
          <SectionHeader headerSection={headerSection} />
          <Link className="btn bg-logo-red text-white">Get more info</Link>
        </aside>
      </div>
    </section>
  );
};

export default About;
