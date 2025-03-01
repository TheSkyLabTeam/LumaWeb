import { Link } from "@/navigation";
import DarkTheme from "./darktheme";
import NavLinks from "@/components/dashboard/nav-links";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

export default function SideNav() {
  return (
    <div
      className="flex w-full h-full flex-row px-4 md:p-4 lg:flex-col items-center bg-surface-container-low dark:bg-surface-container-low-dark"
    >
      <div
        id="sideNavContent"
        className="w-full h-full flex flex-row items-center justify-between lg:flex-col"
      >
        <div id="sideBrandContainer" className="w-auto h-fit md:w-full md:h-fit">
          <h2 className="font-clash font-semibold text-2xl text-on-surface dark:text-on-surface-dark transition-all">
            <Link href="/">Luma</Link>
          </h2>
        </div>
        {/* Navbar content for md+ screens */}
        <div
          id="navLinksContainer"
          className="hidden lg:flex flex-row md:flex-col md:w-full h-full justify-between"
        >
          <div>
            <p className="font-clash font-semibold text-sm my-2 text-on-surface-variant dark:text-on-surface-variant-dark">
              Mode
            </p>
            <NavLinks />
          </div>
          <DarkTheme />
        </div>
        {/* Navbar content for mobile screens */}
        <div id="mobileSheetContainer" className="lg:hidden">
          <Sheet>
            <SheetTrigger className="p-0 w-12 h-12">
              <HamburgerMenuIcon className="w-10 h-10 text-on-surface dark:text-on-surface-dark" />
            </SheetTrigger>
            <SheetContent className="bg-surface text-on-surface-variant border-0 py-6 pl-4 pr-6 rounded-l-2xl dark:bg-surface-dark dark:text-on-surface-variant-dark">
              <SheetHeader className={"items-start"}>
                <SheetTitle>Luma menu</SheetTitle>
                <SheetDescription className={"items-start text-start"}>
                  <ul className="mt-4 text-3xl leading-loose font-semibold text-on-surface dark:text-on-surface-dark">
                    <li>
                      <Link href="/dashboard">One date </Link>
                    </li>
                    <li>
                      <Link href="/dashboard/daterange">Date range</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
