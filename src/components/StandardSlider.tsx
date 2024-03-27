import { Swiper, SwiperSlide } from "swiper/react";
import data from "@/data/data.json";

import "swiper/css";

export default function standardSlider() {
  function checkReleased(releaseDate: string) {
    const today = new Date();
    const release = new Date(releaseDate);
    return today >= release;
  }

  checkReleased(data.standard[0].sets[0]);

  return (
    <>
      <p>Current Standard</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {data.standard.map((block, i) => (
          <SwiperSlide className="bg-secondary p-4 rounded-xl" key={i}>
            <h2 className="text-sm text-foreground/50 mb-4">
              {block.legalTill}
            </h2>
            <ul className="flex flex-col gap-1">
              {block.sets.map((set) => (
                <li key={set.code} className="flex items-center">
                  <a
                    href={`https://scryfall.com/sets/${set.code}`}
                    className={`hover:text-primary ${
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
