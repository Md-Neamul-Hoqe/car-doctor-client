import PropType from "prop-types";

const SectionHeader = ({ headerSection }) => {
  const { smallHeading, heading, paras } = headerSection;

  return (
    <>
      <h3 className="text-xl text-logo-red font-bold">{smallHeading}</h3>
      <h1 className="text-5xl font-bold text-heading my-6">{heading}</h1>
      {paras?.map((para, idx) => (
        <p
          className={`leading-8 max-w-3xl ${
            paras.length < 2 ? "text-center mx-auto" : ""
          }`}
          key={idx}>
          {para}
        </p>
      ))}
    </>
  );
};

SectionHeader.propTypes = {
  headerSection: PropType.object,
};
export default SectionHeader;
