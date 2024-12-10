import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { ImageIcon } from "@radix-ui/react-icons";
import { InfoCircledIcon } from "@radix-ui/react-icons";

// SunImage component
export default function SunImage(props) {
  // Determine the color & description of the dot based on the table prop
  let dotColor;

  switch (props.table) {
    case "eit171":
      dotColor = "blue";
      break;
    case "eit195":
      dotColor = "green";
      break;
    case "eit284":
      dotColor = "yellow";
      break;
    case "eit304":
      dotColor = "red";
      break;
    case "hmiigr":
      dotColor = "orange";
      break;
    case "hmimag":
      dotColor = "gray";
      break;
    default:
      dotColor = "slate";
      break;
  }

  return (
    <div
      className={`
        relative
        ${props.csun} 
        bg-surface-container 
        dark:bg-secondary-container-dark/40 
        max-w-56 w-56 h-fit md:w-53 xl:w-48 2xl:w-56
        overflow-hidden
        transform translate-y-80
      `}
    >
      {/* Image container */}
      <div
        id="imageContainer"
        className="w-full h-fit relative"
      >
        {props.image == undefined
        ? <div className="w-56 max-w-56 h-56 max-h-56 md:w-52 md:h-52 md:max-h-52 xl:w-48 xl:h-48 xl:max-h-48 2xl:w-56 2xl:h-56 2xl:max-h-56 relative animate-pulse" />
        : props.image === ''
        ? <div className="flex flex-col items-center justify-center w-56 max-w-56 h-56 max-h-56 md:w-52 md:h-52 md:max-h-52 xl:w-48 xl:h-48 xl:max-h-48 2xl:w-56 2xl:h-56 2xl:max-h-56 relative bg-surface-container-low text-on-surface/60 dark:bg-surface-container-low-dark dark:text-on-surface-dark/60">
            <ImageIcon className="w-10 h-10" />
            <h4>No image for this date</h4>
          </div>
        : <>
            <Image
                src={props.image}
                alt="Sun image"
                width={512}
                height={512}
                className="dark:border-secondary-container-dark/30 w-56 max-w-56 h-56 max-h-56 md:w-52 md:h-52 md:max-h-52 xl:w-48 xl:h-48 xl:max-h-48 2xl:w-56 2xl:h-56 2xl:max-h-56 dark:border-2"
              />
            <div
            id="idDot"
            className={`w-3 h-3 mx-1 absolute top-2 left-1 grid place-content-center rounded-full bg-${dotColor}-500`}
            >
            <div className={`w-3 h-3 rounded-full animate-ping bg-${dotColor}-500`} />
            </div>
        </>
        }
      </div>
      {/* Name container */}
      <div
        id="nameContainer"
        className="w-full px-4 my-2 flex items-center justify-between text-on-surface dark:text-on-surface-dark"
      >
        <div className="flex items-center">
          <p className="font-clash font-semibold">
            {props.table.toUpperCase()}
          </p>
        </div>
        {/* Hover card for additional information */}
        <HoverCard className="cursor-pointer z-50">
          <HoverCardTrigger>
            <InfoCircledIcon className="w-5 h-5" />
          </HoverCardTrigger>
          <HoverCardContent className="z-50">
            {props.description}
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
