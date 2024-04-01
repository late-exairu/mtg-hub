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
  currentStandard?: boolean;
}

export default function SetItem(props: SetItemProps) {
  const { set, currentStandard } = props;

  function checkReleased(releaseDate: string) {
    const today = new Date();
    const release = new Date(releaseDate);
    return today >= release;
  }

  return (
    <Popover>
      <PopoverTrigger
        className={`hover:underline relative bg-card rounded-[5px] block shadow-sm shadow-ring hover:bg-secondary ${
          !checkReleased(set.releaseDate) && "opacity-40"
        }`}
      >
        <i
          className={`ss ss-${set.code} relative text-4xl size-16 -top-2 inline-flex items-center justify-center`}
        ></i>
        <span
          className={`${
            currentStandard
              ? "text-background bg-uncommon"
              : "text-background bg-rare"
          } z-10 text-xxs absolute left-1/2 bottom-1 px-1 -translate-x-1/2 bg-card shadow-sm rounded-[3px] shadow-ring text-center uppercase`}
        >
          {set.code}
        </span>
      </PopoverTrigger>
      <PopoverContent className="bg-background rounded-[5px]">
        <SetPopover {...set} />
      </PopoverContent>
    </Popover>
  );
}
