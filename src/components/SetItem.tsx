import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import SetPopover from "./SetPopover";

interface SetItemProps {
  set: {
    code: string;
    name: string;
    releaseDate: string;
  };
}

export default function SetItem(props: SetItemProps) {
  const { set } = props;

  function checkReleased(releaseDate: string) {
    const today = new Date();
    const release = new Date(releaseDate);
    return today >= release;
  }

  return (
    <Popover>
      <PopoverTrigger
        className={`hover:underline bg-card rounded-[5px] block shadow-sm shadow-ring hover:bg-secondary ${
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
  );
}
