"use client";

import { DashboardIcon, CalendarIcon } from "@radix-ui/react-icons";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { name: "Date Range", href: "/dashboard/daterange", icon: CalendarIcon }
];

export default function NavLinks() {
  const pathname = usePathname();
  let fixedPathmane = pathname.substring(3, pathname.length);

  return (
    <div className="flex flex-row">
      {links.map(link => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex px-4 items-center gap-2 font-clash font-semibold text-base text-on-surface-variant dark:text-on-surface-variant-dark transition-all hover:text-primary dark:hover:text-primary-dark",
              {
                "text-primary dark:text-primary-dark":
                  fixedPathmane === link.href
              }
            )}
          >
            <LinkIcon className="w-6 h-6"/>
            <p className="hidden md:block">
              {link.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
