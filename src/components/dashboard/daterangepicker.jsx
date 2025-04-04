"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const DateRangePicker = ({ onRangeChange }) => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [startToEndDate, setStartToEndDate] = useState({})

    const rangeGenerator = (startDate, endDate) => {
        if (startDate && endDate) {
            const newRange = {
                from: format(startDate, "yyyy-MM-dd"),
                to: format(endDate, "yyyy-MM-dd"),
            }
            onRangeChange(newRange)
        }
    }

    useEffect(() => {
        rangeGenerator(startDate, endDate)
    }, [startDate, endDate]) // Removed rangeGenerator from dependencies

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
            }
        }

        getFirstAndLastDate()
    }, [])

    return (
        <div className="w-fit flex gap-4">
            {/* Start date */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2">
                <h6 className="font-archivo text-sm text-on-surface-variant dark:text-on-surface-variant-dark">Start:</h6>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            className={cn(
                                "w-fit justify-center text-left font-clash font-semibold bg-tertiary-container hover:bg-tertiary-container text-on-tertiary-container rounded-full dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark hover:dark:bg-tertiary-container-dark hover:dark:text-on-tertiary-container-dark hover:shadow-sm",
                                !startDate && "text-muted-foreground",
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4 text-on-tertiary-container dark:text-on-tertiary-container-dark" />
                            {startDate ? (
                                format(startDate, "dd-MM-yy")
                            ) : (
                                <span className="font-clash font-semibold text-on-tertiary-container dark:text-on-tertiary-container-dark">
                  Start date
                </span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-tertiary-container text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark mt-1 mx-4 md:mx-10">
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
            <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2">
                <h6 className="font-archivo text-sm text-on-surface-variant dark:text-on-surface-variant-dark">End:</h6>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            className={cn(
                                "w-fit justify-center text-left font-semibold bg-tertiary-container hover:bg-tertiary-container text-on-tertiary-container rounded-full dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark hover:dark:bg-tertiary-container-dark hover:dark:text-on-tertiary-container-dark hover:shadow-sm",
                                !endDate && "text-muted-foreground",
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4 text-on-tertiary-container dark:text-on-tertiary-container-dark" />
                            {endDate ? (
                                format(endDate, "dd-MM-yy")
                            ) : (
                                <span className="font-clash font-semibold text-on-tertiary-container dark:text-on-tertiary-container-dark">
                  End date
                </span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-tertiary-container text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark mt-1 mx-4 md:mx-10">
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
    )
}

export default DateRangePicker

