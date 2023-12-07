import { SunImage } from "@/app/ui/dashboard/sunimage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function AccordionImages(props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="text-secondary/60" style={{ fontFamily: "clash" }}>
            {props.title}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full flex gap-2 justify-between">
            <div id="eitContainer" className="flex gap-2">
              <SunImage />
              <SunImage />
              <SunImage />
              <SunImage />
            </div>
            <div id="hmiContainer" className="flex gap-2">
              <SunImage />
              <SunImage />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
