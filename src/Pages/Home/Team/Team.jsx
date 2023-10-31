import PropType from "prop-types";
import SectionHeader from "../SectionHeader/SectionHeader";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import TeamSlide from "./TeamSlide";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/**
 * This Carousel is Combine of
 * 1. https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/navigation-controls/arrows-and-dots/react?file=/src/App.js
 * 2. https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/autoplay/automove/react?file=/src/App.js:140-194
 * 3. https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/misc/resize/react?file=/src/App.js
 */

const Team = () => {
  let index = 0;

  /* Header contents */
  const headerSection = {
    smallHeading: "Team",
    heading: "Meet Our Team",
    paras: [
      "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    ],
  };

  /* Slider contents */
  const slide = {
    images: [img1, img2, img3],

    headings: ["Car Engine Plug", "Car Engine Plug", "Car Engine Plug"],

    paragraph: ["Engine Expert", "Engine Expert", "Engine Expert"],
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const animation = { duration: 50000, easing: (t) => t };

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 3,
      spacing: 30,
    },

    /* Slide handler */
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(s) {
      setLoaded(true);
      s.moveToIdx(6, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
  });

  return (
    <section>
      <aside className="text-center">
        <SectionHeader headerSection={headerSection} />
      </aside>
      <aside>
        <>
          <div className="navigation-wrapper my-5">
            <div ref={sliderRef} className="keen-slider">
              {slide?.images?.map((image, idx) => (
                <TeamSlide
                  key={index}
                  image={image}
                  heading={slide.headings[idx]}
                  paragraph={slide.paragraph[idx]}
                  idx={++index}
                />
              ))}
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
        </>
        {/* <div className="carousel carousel-center rounded-box max-h-[487px] mt-10 mb-24 relative">
          {slide?.images?.map((image, idx) => (
            <TeamSlide
              key={index}
              image={image}
              heading={slide.headings[idx]}
              paragraph={slide.paragraph[idx]}
              idx={++index}
            />
          ))}
          {slide?.images?.map((image, idx) => (
            <TeamSlide
              key={index}
              image={image}
              heading={slide.headings[idx]}
              paragraph={slide.paragraph[idx]}
              idx={++index}
            />
          ))}
        </div> */}
      </aside>
    </section>
  );
};

function Arrow(props) {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const disabled = props?.disabled ? " arrow--disabled" : "";

  return (
    <svg
      // eslint-disable-next-line react/prop-types
      onClick={props?.onClick}
      className={`arrow ${
        // eslint-disable-next-line react/prop-types
        props?.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      {
        // eslint-disable-next-line react/prop-types
        props?.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )
      }
      {
        // eslint-disable-next-line react/prop-types
        !props?.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )
      }
    </svg>
  );
}

Arrow.propType = {
  props: PropType.object,
};

export default Team;
