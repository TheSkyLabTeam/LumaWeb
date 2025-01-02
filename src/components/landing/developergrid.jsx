import DeveloperCard from "./developercard";
import { developers } from "@/components/landing/landing-data/developers";

export default function DeveloperGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
      {developers.map((developer, index) => (
        <DeveloperCard key={index} developer={developer} />
      ))}
    </div>
  );
}
