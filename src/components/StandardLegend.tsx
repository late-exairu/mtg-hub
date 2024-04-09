export default function StandardLegend() {
  return (
    <div className="text-sm mt-6 flex gap-5">
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
  );
}
