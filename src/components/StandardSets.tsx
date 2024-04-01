import SetItem from "./SetItem";
import data from "@/data/data.json";

interface StandardSets {
  className: string;
}

export default function StandardSets(props: StandardSets) {
  const { className } = props;
  const standardYear = 3;

  return (
    <>
      <div className={`${className} flex gap-2`}>
        {data.standard.map((block, i) => (
          <div className="rounded-xl h-auto relative" key={i}>
            <div className="text-sm border-b-2 pb-0.5 mb-1.5 border-foreground">
              {block.legalTill}

              {block.rotateWith && (
                <i
                  className={`ss ss-x ss-${block.rotateWith} text-xl size-4 inline-flex items-center justify-center`}
                ></i>
              )}
            </div>

            <ul className="flex gap-1">
              {block.sets.map((set) => (
                <li
                  key={set.code}
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
                  key={set.code}
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
      </div>
    </>
  );
}
