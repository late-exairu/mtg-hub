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
              release in {getTimeToRelease(nextSet.releaseDate)}
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
            {setWithRotation.name} [{setWithRotation.code.toUpperCase()}]
            <span className="italic block">
              next rotation in {getTimeToRelease(setWithRotation.releaseDate)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
