import data from "@/data/data.json";
import { useRef } from "react";

interface StandardSliderProps {
  className: string;
}

export default function StandardSets(props: StandardSliderProps) {
  const { className } = props;
  const standatdYear = 3;

  function checkReleased(releaseDate: string) {
    const today = new Date();
    const release = new Date(releaseDate);
    return today >= release;
  }

  return (
    <>
      <div className={`${className} flex h-[800px] gap-2 md:h-auto`}>
        {data.standard.map((block, i) => (
          <div className="rounded-xl h-auto relative" key={i}>
            <div className="text-sm border-b-2 pb-0.5 mb-1.5 border-foreground">
              {block.legalTill}
            </div>

            <ul className="flex gap-1">
              {block.sets.map((set) => (
                <li
                  key={set.code}
                  className={`${
                    i === standatdYear
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                >
                  <a
                    href={`https://scryfall.com/sets/${set.code}`}
                    className={`hover:underline bg-secondary rounded-[5px] block shadow-sm shadow-ring ${
                      !checkReleased(set.releaseDate) && "opacity-40"
                    }`}
                  >
                    <i
                      className={`ss ss-3x ss-${set.code} mt-[-3px] text-xl size-16 inline-flex items-center justify-center`}
                    ></i>{" "}
                    {/* <span>
                    {set.name} ({set.code.toUpperCase()})
                  </span> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`mt-1 flex h-[800px] gap-2 md:h-auto`}>
        {data.standard.map((block, i) => (
          <div className="rounded-xl h-auto relative" key={i}>
            <ul className="flex gap-1">
              {block.sets.map((set) => (
                <li
                  key={set.code}
                  className={`${
                    i === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <a
                    href={`https://scryfall.com/sets/${set.code}`}
                    className={`hover:underline bg-secondary rounded-[5px] block shadow-sm shadow-ring ${
                      !checkReleased(set.releaseDate) && "opacity-40"
                    }`}
                  >
                    <i
                      className={`ss ss-3x ss-${set.code} mt-[-3px] text-xl size-16 inline-flex items-center justify-center`}
                    ></i>{" "}
                    {/* <span>
                    {set.name} ({set.code.toUpperCase()})
                  </span> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
