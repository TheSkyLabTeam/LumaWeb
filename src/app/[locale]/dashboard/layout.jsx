import SideNav from "@/components/dashboard/sidenav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import NavLinks from "@/components/dashboard/nav-links";
import DarkTheme from "@/components/dashboard/darktheme";

export default function Layout({ children }) {
  return (
    <div className="flex lg:h-screen flex-col md:overflow-hidden">
      <div
        id="dashboard"
        className="w-full p-4 md:overflow-y-auto md:p-4 bg-background dark:bg-background-dark antialiased select-none"
      >
        <div className="px-2 flex flex-row gap-6 items-center justify-between">
          <div id="brandContainer">
            <Link href={"/"}>
              <svg
                className="w-6 h-auto"
                width="190"
                height="236"
                viewBox="0 0 190 236"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.6484 127.177C40.6484 130.096 37.6266 132.013 35.0964 130.557C14.1222 118.488 -1.65548e-05 95.851 -1.65548e-05 69.9152C-1.65548e-05 31.3021 31.3021 0 69.9152 0C104.984 0 134.022 25.819 139.058 59.485C139.405 61.8042 137.553 63.818 135.208 63.818L44.6484 63.818C42.4392 63.818 40.6484 65.6088 40.6484 67.818V127.177Z"
                  className="fill-black dark:fill-primary-dark"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M148.451 107.879C148.451 104.959 151.473 103.042 154.003 104.498C174.977 116.567 189.1 139.205 189.1 165.14C189.1 203.753 157.798 235.056 119.184 235.056C84.1158 235.056 55.0776 209.236 50.0419 175.571C49.695 173.251 51.5468 171.238 53.8918 171.238L144.451 171.238C146.66 171.238 148.451 169.447 148.451 167.238L148.451 107.879Z"
                  className="fill-black dark:fill-primary-dark"
                />
                <rect
                  x="50"
                  y="73"
                  width="89"
                  height="89"
                  rx="6"
                  className="fill-black dark:fill-primary-dark"
                />
              </svg>
            </Link>
          </div>
          <div
            id="navLinksContainer"
            className="flex flex-row gap-4 font-archivo"
          >
            <NavLinks />
          </div>
          <DarkTheme />
        </div>
        {children}
        <SpeedInsights />
      </div>
    </div>
  );
}

