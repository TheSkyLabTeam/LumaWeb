import {useTranslations} from "next-intl";
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
import {OverTooltip} from "./OverTooltip";
import SunSpotCounter from "@/components/dashboard/Charts/SunSpotCounter";
import { useMemo } from "react";

export default function OverChart(props) {
    const t = useTranslations("ChartsParameters");
    let statistics = props.statistics;

    const colors = [
        "#3b82f6",
        "#22c55e",
        "#eab308",
        "#ef4444",
        "#f97316",
        "#6b7280"
    ];

    // Procesar los datos fuera de la lógica condicional
    const processedData = useMemo(() => {
        if (
            !props.data ||
            props.data.length === 0 ||
            !props.data[0] ||
            (Object.keys(props.data[0]).length === 1 &&
                props.data[0].hasOwnProperty("name"))
        ) {
            return null;
        }

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
        return data.filter(item => item.entropy !== 0);
    }, [props.data]);

    const maxValue = useMemo(() => {
        if (!processedData) return 0;
        return Math.max(...processedData.map(item => item.entropy), 0);
    }, [processedData]);

    const yAxisWidth = useMemo(() => {
        const digitCount = Math.floor(Math.log10(maxValue > 0 ? maxValue : 1)) + 1;
        return Math.max(30, 10 + (digitCount * 8));
    }, [maxValue]);

    // Renderizar el placeholder si no hay datos
    if (!processedData) {
        return <div className="w-full h-96 p-4 bg-surface animate-pulse"/>;
    }

    return (
        <div
            className="w-full h-fit rounded-2xl border border-surface bg-background dark:bg-background-dark dark:border-surface-dark mt-2">
            <div id="chartTitlesContainer" className="w-fit min-h-[9vh] overflow-hidden">
                <h2 className="font-clash font-semibold text-xl text-on-background dark:text-on-background-dark">
                    {t(`${props.parameter}Title`)}
                </h2>
                <p className="font-archivo mt-3 text-base text-on-background/70 dark:text-on-background-dark/70 overflow-hidden">
                    {t(`${props.parameter}Description`)}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row mt-6 w-full h-fit">
                <div className="flex flex-col flex-grow lg:w-2/3">
                    <div className="h-[40vh] md:h-[45vh] lg:h-[50vh]">
                        <ResponsiveContainer width="100%" height="100%" className="dark:bg-surface-container-dark">
                            <BarChart data={processedData} className="font-archivo" margin={{ left: 5 }}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis
                                    width={yAxisWidth}
                                    tickMargin={5}
                                    tickFormatter={(value) => value.toLocaleString()}
                                />
                                <Tooltip cursor={false}
                                         content={<OverTooltip active={false} payload={[]} label={""}/>}/>
                                <Bar dataKey="entropy" fill="#191c1e">
                                    {processedData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]}
                                              radius={[10, 10, 0, 0]}/>
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-0">
                        <OneAnalytics statistics={statistics}/>
                    </div>
                </div>

                <div className="mt-4 lg:mt-0 lg:ml-4 lg:w-1/3 lg:h-full">
                    <SunSpotCounter date={props.date}/>
                </div>
            </div>
        </div>
    );
}