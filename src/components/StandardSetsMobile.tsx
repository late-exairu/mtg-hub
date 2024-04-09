import { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import SetItem from "@/components/SetItem";
import FutureEvents from "@/components/FutureEvents";
import data from "@/data/data.json";

interface StandardSetsMobile {
  className: string;
}

export default function StandardSetsMobile(props: StandardSetsMobile) {
  const { className } = props;
  const [standardHeigh, setStandardHeigh] = useState(0);
  const standardYears = 3;
  const blockWrapRef = useRef<HTMLDivElement | null>(null);
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const blockWrap = blockWrapRef.current;
    const block = blockRef.current;

    if (block && blockWrap) {
      const blockHeight = block.clientHeight;
      const blockWrapGap = blockWrap?.style.gap as unknown as number;
      setStandardHeigh(
        blockHeight * standardYears + blockWrapGap * (standardYears - 1)
      );
    }
  }, [blockRef]);

  return (
    <div className={twMerge("", className)}>
      <div ref={blockWrapRef} className="flex relative flex-col gap-2 pl-3">
        <div
          className={`absolute left-0 top-5 w-[3px] bg-uncommon`}
          style={{ height: standardHeigh }}
        />
        <div
          className={`absolute left-[5px] top-[124px] w-[3px] bg-rare`}
          style={{ height: standardHeigh }}
        />
        {data.standard.map((block, i) => (
          <div ref={blockRef} className="rounded-xl block relative" key={i}>
            <div className="text-sm border-b text-right pb-0.5 mb-1.5 border-foreground/30">
              {block.legalTill}
            </div>

            <ul className="flex gap-1">
              {block.sets.map((set) => (
                <li
                  key={set.name.replace(/ /g, "-").toLowerCase()}
                  className={`${"opacity-100"}`}
                >
                  <SetItem set={set} currentStandard={true} isMobile={true} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-sm mt-4 flex gap-5">
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

      <FutureEvents />
    </div>
  );
}
