import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import data from "@/data/data.json";
import SetPopover from "./SetPopover";
interface StandardSliderProps {
  className: string;
}

export default function StandardSets(props: StandardSliderProps) {
  const { className } = props;
  const standardYear = 3;

  function checkReleased(releaseDate: string) {
    const today = new Date();
    const release = new Date(releaseDate);
    return today >= release;
  }

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
                  <Popover>
                    <PopoverTrigger
                      className={`hover:underline bg-card rounded-[5px] block shadow-sm shadow-ring ${
                        !checkReleased(set.releaseDate) && "opacity-40"
                      }`}
                    >
                      <i
                        className={`ss ss-${set.code} text-4xl size-16 inline-flex items-center justify-center`}
                      ></i>
                    </PopoverTrigger>
                    <PopoverContent className="bg-background">
                      <SetPopover {...set} />
                    </PopoverContent>
                  </Popover>
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
                  <Popover>
                    <PopoverTrigger
                      className={`hover:underline bg-card rounded-[5px] block shadow-sm shadow-ring ${
                        !checkReleased(set.releaseDate) && "opacity-40"
                      }`}
                    >
                      <i
                        className={`ss ss-${set.code} text-4xl size-16 inline-flex items-center justify-center`}
                      ></i>
                    </PopoverTrigger>
                    <PopoverContent className="bg-background">
                      <SetPopover {...set} />
                    </PopoverContent>
                  </Popover>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
