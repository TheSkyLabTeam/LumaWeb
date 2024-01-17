import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }) {
  return (
    <div className="flex lg:h-screen flex-col lg:flex-row md:overflow-hidden">
      <div className="w-full lg:w-52 xl:w-64 flex-none select-none">
        <SideNav />
      </div>
      <div id="dashboard" className="grow 2xl:justify-center p-4 md:overflow-y-auto md:p-4 bg-background dark:bg-background-dark select-none">{children}</div>
    </div>
  );
}
