import DeveloperCard from "./developercard";
import { developers } from "@/components/landing/landing-data/developers";

export default function DeveloperGrid() {
  const topRow = developers.slice(0, 3);
  const bottomRow = developers.slice(3);

  return (
    <div className="space-y-16">
      {/* Fila superior - 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-[1000px] mx-auto">
        
        {/* Added max-width */}
        {topRow.map((developer, index) => (
          <div key={index} className="max-w-[280px] mx-auto w-full">
            {/* Card wrapper with max-width */}
            <DeveloperCard developer={developer} />
          </div>
        ))}
      </div>

      {/* Fila inferior - 2 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 max-w-[600px] mx-auto">
       
        {/* Adjusted max-width */}
        {bottomRow.map((developer, index) => (
          <div key={index} className="max-w-[280px] mx-auto w-full">
            {/* Card wrapper with max-width */}
            <DeveloperCard developer={developer} />
          </div>
        ))}
      </div>
    </div>
  );
}
