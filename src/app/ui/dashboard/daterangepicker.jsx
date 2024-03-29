import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateRangePicker({ onRangeChange, className}) {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });


  const handleRangeChange = (date) => {
    setDate(date);
    onRangeChange(date);
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-fit justify-start text-left font-normal rounded-full bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container hover:text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark dark:hover:bg-tertiary-container-dark",
              !date && "text-muted-foreground"
            )}
            style={{fontFamily: 'Clash'}}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 mx-6" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleRangeChange}
            numberOfMonths={2}
            className="bg-tertiary-container text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
