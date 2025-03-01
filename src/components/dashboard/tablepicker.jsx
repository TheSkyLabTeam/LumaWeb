"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "data171",
    label: "Eit171",
  },
  {
    value: "data195",
    label: "Eit195",
  },
  {
    value: "data284",
    label: "Eit284",
  },
  {
    value: "data304",
    label: "Eit304",
  },
  {
    value: "datahmiigr",
    label: "HMIIGR",
  },
  {
    value: "datahmimag",
    label: "HMIMAG",
  },
]

export function TablePicker({onTableChange}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleTableChange = (table) => {
    onTableChange(table);
  }

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center mt-4 mb-2 md:m-0 gap-2">
      <h6 className="font-archivo text-sm text-on-surface-variant dark:text-on-surface-variant-dark">Table picker:</h6>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-fit justify-between rounded-full font-clash font-semibold bg-tertiary-container text-on-tertiary-dark hover:bg-tertiary-container hover:text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark dark:hover:bg-tertiary-container-dark"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select table..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command className="font-archivo bg-tertiary-container text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark">
            <CommandInput  placeholder="Search table..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="bg-tertiary-container text-on-tertiary-container dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    handleTableChange(currentValue);
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
    </Popover>
    </div>
  )
}
