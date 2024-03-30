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

  return (
    <div className="text-sm">
      <p className="whitespace-pre-wrap">{name}</p>
      <p>
        Set code: <span className="uppercase">{code}</span>
      </p>
      <p>Release Date: {formatDate(releaseDate)}</p>
    </div>
  );
}
