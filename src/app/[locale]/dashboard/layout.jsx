import SideNav from "@/components/dashboard/sidenav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Image from "next/image";
import { Link } from "@/navigation";

export default function Layout({ children }) {
  return (
    <div className="flex lg:h-screen flex-col md:overflow-hidden">
      <div
        id="dashboard"
        className="w-full p-4 md:overflow-y-auto md:p-4 bg-background dark:bg-background-dark antialiased select-none"
      >
        <div className="px-2 flex flex-row gap-6 items-center">
          <div id="brandContainer">
            <Image
              className="w-7 h-auto"
              src="/luma.svg"
              alt="logo"
              width={200}
              height={50}
            />
          </div>
          <div
            id="navLinksContainer"
            className="flex flex-row gap-4 font-archivo"
          >
            <Link href={'/dashboard'}>
              <p>Dashboard</p>
            </Link>
            <Link href={"/daterange"}>
              <p className="text-on-surface/60">Date range</p>
            </Link>
          </div>
        </div>
        {children}
        <SpeedInsights />
      </div>
    </div>
  );
}
