import { useTranslations } from "next-intl";
import OneAnalytics from "../oneanalytics";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { OverTooltip } from "./OverTooltip";

export default function OverChart(props) {
  const t = useTranslations("ChartsParameters");
  let statistics = props.statistics;
  console.log(statistics)

  const colors = [
    "#3b82f6",
    "#22c55e",
    "#eab308",
    "#ef4444",
    "#f97316",
    "#6b7280"
  ];

  if (
    !props.data ||
    props.data.length === 0 ||
    !props.data[0] ||
    (Object.keys(props.data[0]).length === 1 &&
      props.data[0].hasOwnProperty("name"))
  ) {
    // Manejar el caso en que los datos no estén disponibles
    return <div className="w-full h-96 p-4 bg-surface animate-pulse" />;
  }
  let categories = Object.keys(props.data[0]).filter(key => key !== "name");

  let data = [
    {
      name: "EIT171",
      entropy: Object.values(props.data[0]).slice(1)[0] || 0
    },
    {
      name: "EIT195",
      entropy: Object.values(props.data[0]).slice(1)[1] || 0
    },
    {
      name: "EIT284",
      entropy: Object.values(props.data[0]).slice(1)[2] || 0
    },
    {
      name: "EIT304",
      entropy: Object.values(props.data[0]).slice(1)[3] || 0
    },
    {
      name: "HMIIGR",
      entropy: Object.values(props.data[0]).slice(1)[4] || 0
    },
    {
      name: "HMIMAG",
      entropy: Object.values(props.data[0]).slice(1)[5] || 0
    }
  ];

  // Filtrar los datos para mostrar solo las barras con valores
  data = data.filter(item => item.entropy !== 0);

  return (
    <div className="w-full h-fit rounded-2xl border border-surface bg-background dark:bg-background-dark dark:border-surface-dark mt-2">
      {/* Text for the chart */}
      <div
        id="chartTitlesContainer"
        className="w-fit min-h-[9vh] overflow-hidden"
      >
        <h2 className="font-clash font-semibold text-xl text-on-background dark:text-on-background-dark">
          {t(`${props.parameter}Title`)}
        </h2>
        <p className="font-archivo mt-3 text-base text-on-background/70 dark:text-on-background-dark/70 overflow-hidden">
          {t(`${props.parameter}Description`)}
        </p>
      </div>

      {/* Chart */}
      <div className="flex flex-col md:flex-col mt-6 gap-2 w-full h-fit">
        <OneAnalytics statistics={statistics} />
        <div
          id={"barChartContainer"}
          className={
            "h-[40svh] md:h-[40svh] lg:min-h-[40svh] xl:w-full xl:h-96 xl:min-h-96"
          }
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              className="font-archivo"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<OverTooltip active={false} payload={[]} label={""}/>}/>
              <Bar dataKey="entropy" fill="#191c1e">
                {data.map((entry, index) =>
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                    radius={[10, 10, 0, 0]}
                  />
                )}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
