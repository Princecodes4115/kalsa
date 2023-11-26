"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ToggleGroupFilter from "./ToggleGroupFilter";
import CalendarPicker from "./CalendarPicker";
import TransactionType from "./TransactionType";
import TransactionStatus from "./TransactionStatus";
import { Button } from "@/components/ui/button";

export default function Filter() {
  return (
    <Sheet style={{}}>
      <SheetTrigger>Filter </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
        </SheetHeader>
        <ToggleGroupFilter />
        <CalendarPicker />
        <TransactionType />
        <TransactionStatus />
        <SheetFooter>
          <SheetClose>
            <div className="flex flex-row flex-wrap gap-24  justify-between mt-[5rem]">
              <Button type="reset" className="float-left py-6 px-10">
                Clear
              </Button>
              <Button
                type="submit"
                className="float-right py-6 px-10 bg-gray-500 disabled"
              >
                Apply
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
