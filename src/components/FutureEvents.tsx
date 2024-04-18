import {
  getNextRotation,
  getTimeToRelease,
  getNextSetToRelease,
} from "@/lib/utils";
import data from "@/data/data.json";

export default function FutureEvents() {
  const standard = data.standard;
  const setWithRotation = getNextRotation(standard);
  const nextSet = getNextSetToRelease(standard);

  return (
    <div className="">
      <div className="">
        <h3 className="font-bold text-lg">What is Standard Rotation?</h3>
        <p className="text-sm">
          Standard rotates annually in September, with the four oldest sets
          being cycled out alongside the release of the Fall set. This means
          that approximately every three months, a new Magic set is released and
          added to Standard, resulting in a maximum of 12 expansions being legal
          at any given time. Sets remain legal for a minimum of two to three
          years.
        </p>
      </div>

      <div className="text-sm mt-4 flex-col sm:flex-row flex gap-5">
        <div className="flex flex-col">
          <h3 className="text-base font-bold">Next set</h3>
          <div className="flex relative items-center pl-[50px]">
            <i
              className={`ss ss-${nextSet.code} flex text-4xl size-[42px] items-center justify-center absolute left-0 -translate-y-1/2 top-1/2`}
            ></i>
            <p className="flex flex-col">
              {nextSet.name} [{nextSet.code.toUpperCase()}]
              <span className="italic block">
                {getTimeToRelease(nextSet.releaseDate).trim() === "0 days"
                  ? `releases today*`
                  : `releases in ${getTimeToRelease(nextSet.releaseDate)}*`}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-bold">Next rotation</h3>
          <div className="flex relative items-center pl-[50px]">
            <i
              className={`ss ss-${setWithRotation.code} flex text-4xl size-[42px] items-center justify-center absolute left-0 -translate-y-1/2 top-1/2`}
            ></i>
            <p className="flex flex-col">
              with release of {setWithRotation.name} [
              {setWithRotation.code.toUpperCase()}]
              <span className="italic block">
                in {getTimeToRelease(setWithRotation.releaseDate)}*
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="text-sm mt-4">
        <p className="italic">
          *Sets are made available on MTG Arena several days in advance of their
          official release, on Tuesdays.
        </p>
      </div>
    </div>
  );
}
