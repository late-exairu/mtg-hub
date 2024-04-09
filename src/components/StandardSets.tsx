import { twMerge } from "tailwind-merge";
import SetItem from "@/components/SetItem";
import StandardLegend from "@/components/StandardLegend";
import data from "@/data/data.json";

interface StandardSets {
  className: string;
}

export default function StandardSets(props: StandardSets) {
  const { className } = props;
  const standardYear = 3;

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

      <StandardLegend />
    </div>
  );
}
