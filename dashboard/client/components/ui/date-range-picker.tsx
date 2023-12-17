"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/utils/styleUtils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


type Props = {
    callBack?: (date: Date) => void
}
import { useEffect } from "react"

export function CalendarDateRangePicker({
    className, callBack
}: React.HTMLAttributes<HTMLDivElement> & Props) {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date()
    )
    useEffect(() => {

        callBack && date && callBack(date)

    }, [callBack, date])

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[260px] justify-start text-center font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date && (
                            <>
                                {format(date, "LLL dd, y")}
                            </>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                        initialFocus
                        mode="default"
                        defaultMonth={date}
                        selected={date}
                        numberOfMonths={1}
                        onDayClick={(date) => setDate(date)}
                    />
                </PopoverContent>
            </Popover>

        </div >
    )
}