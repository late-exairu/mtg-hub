interface SetPopoverProps {
  code: string;
  name: string;
  releaseDate: string;
}

export default function SetPopover(props: SetPopoverProps) {
  const { code, name, releaseDate } = props;

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function isSetReleased(releaseDate: string) {
    const today = new Date();
    const release = new Date(releaseDate);
    return today >= release;
  }

  return (
    <div className="text-sm">
      <p className="whitespace-pre-wrap font-medium">{name}</p>
      <p>
        Set code: <span className="uppercase">{code}</span>
      </p>
      {isSetReleased(releaseDate) ? (
        <p>Released: {formatDate(releaseDate)}</p>
      ) : (
        <p>To be released: {formatDate(releaseDate)}</p>
      )}
      {code === "???" ? null : (
        <div className="relative mt-3 text-center flex border-t-1 border-foreground inset-x-0 text-xxs uppercase">
          <a
            className="p-1 flex-1 rounded-[5px] bg-secondary hover:bg-popover"
            href={`https://scryfall.com/sets/${code}/`}
            target="_blank"
          >
            Open on Scryfall
          </a>
          {/* <a
          className="p-1 flex-1"
          href={`https://scryfall.com/sets/${code}/`}
          target="_blank"
        >
          Open on Scryfall
        </a> */}
        </div>
      )}
    </div>
  );
}
