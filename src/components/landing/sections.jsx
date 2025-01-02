"use client";

import Image from "next/image";
import Link from "next/link";

const chartData = [
  { date: "Apr 1", value: 50 },
  { date: "Apr 15", value: 55 },
  { date: "Apr 30", value: 48 },
  { date: "May 17", value: 60 },
];

export default function SolarDashboard() {
  return (
    <div className="min-h-screen bg-[#0F1417] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-clash text-3xl sm:text-4xl lg:text-5xl text-[#DFE3E7] font-semibold mb-4 leading-tight">
              Facilitando la comprensión del Sol a través de la tecnología
            </h1>
            <p className="font-archivo text-base sm:text-lg text-gray-300 leading-relaxed">
              Diseñado para ser intuitivo y accesible, este dashboard facilita
              el estudio de la actividad solar, democratizando el acceso a datos
              complejos y transformándolos en conocimiento comprensible para
              todos.
            </p>
          </div>
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]">
            <Image
              src="/images/landing.png"
              alt="Dashboard Preview"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#171C1F] border border-gray-800 rounded-lg p-6 flex flex-col">
            <h2 className="font-clash text-2xl sm:text-3xl text-[#DFE3E7] font-semibold mb-4">
              Visualización de imágenes solares en tiempo real
            </h2>
            <p className="font-archivo text-base text-gray-300 mb-4 flex-grow">
              Con imágenes capturadas por el observatorio espacial SOHO, este
              dashboard permite explorar la imagen del Sol en distintas capas de
              ultravioleta. Observa fenómenos solares desde múltiples
              perspectivas y comprende su dinámica como nunca antes.
            </p>

            <Image
              src="/images/sunGallery/eit304.jpg"
              alt="Solar Image"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <Link
              href="/soho-images"
              className="font-archivo text-base text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Conoce más sobre las imágenes del SOHO →
            </Link>
          </div>

          {/* Feature 2 - Temporal Analysis */}
          <div className="bg-[#171C1F] border border-gray-800 rounded-lg p-6 flex flex-col">
            <h2 className="font-clash text-2xl sm:text-3xl text-[#DFE3E7] font-semibold mb-4">
              Métricas de Análisis Temporal
            </h2>
            <p className="font-archivo text-base text-gray-300 mb-4">
              Analiza la evolución de parámetros solares críticos a lo largo del
              tiempo con métricas detalladas como entropía, dimensión fractal y
              análisis espectral. Estas herramientas proporcionan una
              comprensión profunda de la actividad solar y su impacto en
              fenómenos a largo plazo.
            </p>
            <div className="mt-4 mb-6 w-full h-[200px] bg-[#0F1417] rounded-lg p-4">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <polyline
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  points="0,150 133,75 266,100 400,0"
                />
                {chartData.map((point, index) => (
                  <g key={index}>
                    <circle
                      cx={index * 133}
                      cy={200 - point.value * 2}
                      r="4"
                      fill="#2563eb"
                    />
                    <text
                      x={index * 133}
                      y="180"
                      fill="#9CA3AF"
                      fontSize="12"
                      textAnchor="middle"
                      className="font-archivo"
                    >
                      {point.date}
                    </text>
                    <text
                      x="-10"
                      y={200 - point.value * 2}
                      fill="#9CA3AF"
                      fontSize="12"
                      textAnchor="end"
                      className="font-archivo"
                    >
                      {point.value}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <Link
              href="/temporal-analysis"
              className="font-archivo text-base text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
            >
              Descubre el análisis temporal solar →
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#171C1F] border border-gray-800 rounded-lg p-6 flex flex-col">
            <h2 className="font-clash text-2xl sm:text-3xl text-[#DFE3E7] font-semibold mb-4">
              Recursos Educativos Interactivos
            </h2>
            <p className="font-archivo text-base text-gray-300 mb-4 flex-grow">
              Descubre un espacio educativo diseñado para estudiantes y
              profesores. Este dashboard ofrece simulaciones, visualizaciones
              didácticas y lecciones sobre fenómenos solares, facilitando el
              aprendizaje sobre temas como ciclos solares, manchas solares y
              tormentas geomagnéticas.
            </p>
            <Link
              href="/educational-resources"
              className="font-archivo text-base text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Accede a nuestros recursos educativos interactivos →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
