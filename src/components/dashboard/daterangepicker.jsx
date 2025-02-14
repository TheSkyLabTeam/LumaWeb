import {useState, useEffect} from "react";
import {format} from "date-fns";
import {Calendar as CalendarIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

const DateRangePicker = ({onRangeChange}) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedRange, setSelectedRange] = useState({});
    const [startToEndDate, setStartToEndDate] = useState({});

    const rangeGenerator = (startDate, endDate) => {
        if (startDate && endDate) {
            const newRange = {
                from: `${startDate.getFullYear()}-${String(
                    startDate.getMonth() + 1
                ).padStart(2, "0")}-${String(startDate.getDate()).padStart(2, "0")}`,
                to: `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(
                    2,
                    "0"
                )}-${String(endDate.getDate()).padStart(2, "0")}`
            };
            setSelectedRange(newRange);
            onRangeChange(newRange);
        }
    };

    useEffect(
        () => {
            rangeGenerator(startDate, endDate);
        },
        [startDate, endDate]
    );

    useEffect(() => {
        async function getFirstAndLastDate() {
            try {
                const response = await fetch("/api/last-date")
                const data = await response.json()
                setStartToEndDate({
                    firstDate: new Date(data.firstDate.rows[0].date),
                    lastDate: new Date(data.lastDate.rows[0].date),
                })
            } catch (e) {
                console.error("Failed to fetch the available dates", e)
                throw new Error("Failed to fetch the available dates")
            }
        }

        getFirstAndLastDate()
    }, [])

    return (
        <div className="w-fit flex gap-4">
            {/* Start date */}
            <div id="startContainer" className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2">
                <h6 className="font-archivo text-sm text-on-surface-variant dark:text-on-surface-variant-dark">
                    Start:
                </h6>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="oneDatePicker"
                            className={cn(
                                "w-fit justify-centert text-left font-clash font-semibold bg-tertiary-container hover:bg-tertiary-container text-on-tertiary-container rounded-full dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark hover:dark:bg-tertiary-container-dark hover:dark:text-on-tertiary-container-dark hover:shadow-sm",
                                !startDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon
                                className="mr-2 h-4 w-4 text-on-tertiary-container dark:text-on-tertiary-container-dark"/>
                            {startDate
                                ? format(startDate, "dd-MM-yy")
                                : <span
                                    className="font-clash font-semibold text-on-tertiary-container dark:text-on-tertiary-container-dark">
                    Start date
                  </span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto p-0 bg-tertiary-container text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark mt-1 mx-4 md:mx-10">
                        <Calendar
                            mode="single"
                            captionLayout="dropdown-buttons"
                            fromDate={startToEndDate.firstDate}
                            toDate={startToEndDate.lastDate}
                            selected={startDate}
                            onSelect={setStartDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
            {/* End date */}
            <div id="endContainer" className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2">
                <h6 className="font-archivo text-sm text-on-surface-variant dark:text-on-surface-variant-dark">
                    End:
                </h6>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="oneDatePicker"
                            className={cn(
                                "w-fit justify-centert text-left font-semibold bg-tertiary-container hover:bg-tertiary-container text-on-tertiary-container rounded-full dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark hover:dark:bg-tertiary-container-dark hover:dark:text-on-tertiary-container-dark hover:shadow-sm",
                                !endDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon
                                className="mr-2 h-4 w-4 text-on-tertiary-container dark:text-on-tertiary-container-dark"/>
                            {endDate
                                ? format(endDate, "dd-MM-yy")
                                : <span
                                    className="font-clash font-semibold text-on-tertiary-container dark:text-on-tertiary-container-dark">
                    End date
                  </span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto p-0 bg-tertiary-container text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark mt-1 mx-4 md:mx-10">
                        <Calendar
                            mode="single"
                            captionLayout="dropdown-buttons"
                            fromDate={startToEndDate.firstDate}
                            toDate={startToEndDate.lastDate}
                            selected={endDate}
                            onSelect={setEndDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default DateRangePicker;
