interface SetPopoverProps {
  code: string;
  name: string;
  releaseDate: string;
}

export default function SetPopover(props: SetPopoverProps) {
  const { code, name, releaseDate } = props;

  return (
    <>
      <p>{name}</p>
      <p>{code}</p>
      <p>{releaseDate}</p>
    </>
  );
}
