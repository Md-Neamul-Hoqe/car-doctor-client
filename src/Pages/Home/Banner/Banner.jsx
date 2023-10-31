import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import BannerImage from "./BannerImage";

const Banner = () => {
  const data = {
    images: [img1, img2, img3, img4],

    headings: [
      "Affordable Price For Car Servicing",
      "Affordable Price For Car Servicing",
      "Affordable Price For Car Servicing",
      "Affordable Price For Car Servicing",
    ],

    paragraph: [
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    ],
  };

  return (
    <section className="carousel w-full rounded-xl mb-24">
      {data?.images?.map((image, idx) => (
        <BannerImage
          key={idx}
          image={image}
          heading={data.headings[idx]}
          paragraph={data.paragraph[idx]}
          idx={idx + 1}
        />
      ))}
    </section>
  );
};

export default Banner;
