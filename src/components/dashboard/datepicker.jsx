"use client"
import {useEffect, useState, useContext} from "react"
import {format} from "date-fns"
import {CalendarIcon} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import DateContext from "@/context/DateContext"

export function DatePicker({onDateChange}) {
    const {date, setDate} = useContext(DateContext)
    const [startToEndDate, setStartToEndDate] = useState({
        firstDate: null,
        lastDate: null,
    })

    const handleDateChange = (date) => {
        setDate(date)
        onDateChange(date)
    }

    // Get the first and last date of the current month
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
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    id="oneDatePicker"
                    className={cn(
                        "opacity-0 -translate-x-8 w-fit justify-center text-left font-clash font-semibold bg-tertiary-container hover:bg-tertiary-container text-on-tertiary-container rounded-full dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark hover:dark:bg-tertiary-container-dark hover:dark:text-on-tertiary-container-dark hover:shadow-sm",
                        !date && "text-muted-foreground",
                    )}
                >
                    <CalendarIcon
                        className="mr-2 h-4 w-4 text-on-tertiary-container dark:text-on-tertiary-container-dark"/>
                    {date ? (
                        format(date, "PPP")
                    ) : (
                        <span className="font-clash text-on-tertiary-container dark:text-on-tertiary-container-dark">
              Pick a date
            </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-auto p-0 bg-tertiary-container text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark mt-1 mx-4 md:mx-10">
                <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    fromDate={startToEndDate.firstDate}
                    toDate={startToEndDate.lastDate}
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

