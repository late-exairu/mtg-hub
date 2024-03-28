import { Swiper, SwiperSlide } from "swiper/react";
import data from "@/data/data.json";
import "swiper/css";

interface StandardSliderProps {
  className: string;
}

export default function standardSlider(props: StandardSliderProps) {
  const { className } = props;
  function checkReleased(releaseDate: string) {
    const today = new Date();
    const release = new Date(releaseDate);
    return today >= release;
  }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            direction: "horizontal",
          },
        }}
        className={`${className} mySwiper h-[800px] md:h-auto`}
      >
        {data.standard.map((block, i) => (
          <SwiperSlide className="bg-secondary p-4 rounded-xl h-auto" key={i}>
            <h2 className="text-sm text-foreground/50 mb-4">
              {block.legalTill}
            </h2>

            <ul className="flex flex-col gap-1">
              {block.sets.map((set) => (
                <li key={set.code}>
                  <a
                    href={`https://scryfall.com/sets/${set.code}`}
                    className={`hover:underline ${
                      !checkReleased(set.releaseDate) && "opacity-50"
                    }`}
                  >
                    <i
                      className={`ss ss-${set.code} text-2xl size-6 mr-1 inline-flex items-center justify-center`}
                    ></i>{" "}
                    <span>
                      {set.name} ({set.code.toUpperCase()})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
