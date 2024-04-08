import SetItem from "./SetItem";
import data from "@/data/data.json";
import { twMerge } from "tailwind-merge";

interface StandardSets {
  className: string;
}

export default function StandardSets(props: StandardSets) {
  const { className } = props;
  const standardYear = 3;

  const getNextSetToRelease = () => {
    const currentDate = new Date();
    const allSets = data.standard.reduce((acc, curr) => {
      return acc.concat(curr.sets);
    }, [] as Array<{ name: string; code: string; releaseDate: string }>[]);

    const unreleasedSets = allSets.flat().filter((set) => {
      const date = new Date(set.releaseDate);
      return date >= currentDate;
    });

    return unreleasedSets[0];
  };

  const getTimeToRelease = (date: string) => {
    const currentDate = new Date();
    const releaseDate = new Date(date);
    const timeToRelease = releaseDate.getTime() - currentDate.getTime();
    const months = Math.floor(timeToRelease / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
      (timeToRelease % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );

    return `${months > 0 ? `${months} months` : ""} ${days} days`;
  };

  const nextSet = getNextSetToRelease();

  return (
    <div className={twMerge("", className)}>
      <div className="flex gap-2">
        {data.standard.map((block, i) => (
          <div className="rounded-xl h-auto relative" key={i}>
            <div className="text-sm border-b-2 pb-0.5 mb-1.5 border-foreground">
              {block.legalTill}
            </div>

            <ul className="flex gap-1">
              {block.sets.map((set) => (
                <li
                  key={set.name.replace(/ /g, "-").toLowerCase()}
                  className={`${
                    i === standardYear
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                >
                  <SetItem set={set} currentStandard={true} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`mt-1 flex gap-2`}>
        {data.standard.map((block, i) => (
          <div className="rounded-xl h-auto relative" key={i}>
            <ul className="flex gap-1">
              {block.sets.map((set) => (
                <li
                  key={set.name.toLowerCase().replace(/ /g, "-")}
                  className={`${
                    i === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <SetItem set={set} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-sm mt-4 flex gap-5">
        <div className="flex relative items-center pl-[50px]">
          <i
            className={`ss ss-${nextSet.code} flex text-4xl size-[42px] items-center justify-center absolute left-0 -translate-y-1/2 top-1/2`}
          ></i>
          <p className="flex flex-col">
            {nextSet.name} [{nextSet.code.toUpperCase()}]
            <span className="italic block">
              release in {getTimeToRelease(nextSet.releaseDate)}
              {/* {getTimeToRelease("2024-08-02")} */}
            </span>
          </p>
          {/* <p className="flex items-center">
            Next rotation(
            <i
              className={`${`ss ss-one relative text-2xl lg:text-3xl xl:text-4xl -lg:top-1 mb-4 lg:mb-1 xl:mb-0 lg:size-[51px] xl:size-[63px] size-[37px] lg:-top-2 inline-flex items-center justify-center`}`}
            ></i>
            ) release in{" "}
            <span className="bg-uncommon mr-1 inline-block rounded-[2px]"></span>
          </p> */}
        </div>
        <div className="">
          <p className="flex items-center">
            <span className="size-3 bg-uncommon mr-1 inline-block rounded-[2px]"></span>{" "}
            - current standard
          </p>
          <p className="flex items-center">
            <span className="size-3 bg-rare mr-1 inline-block rounded-[2px]"></span>{" "}
            - next standard
          </p>
        </div>
        <div className="">
          <p className="flex items-center">
            <span className="size-3 mr-1 inline-block rounded-[2px] bg-card shadow-sm shadow-ring hover:bg-secondary"></span>{" "}
            - set is released
          </p>
          <p className="flex items-center">
            <span className="size-3 mr-1 inline-block rounded-[2px] bg-card shadow-sm shadow-ring hover:bg-secondary opacity-40"></span>{" "}
            - set is not released
          </p>
        </div>
      </div>
    </div>
  );
}
