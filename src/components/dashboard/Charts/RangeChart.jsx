"use client"

import {useMemo} from "react"
import moment from "moment"
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer} from "recharts"
import {RangeTooltip} from "./RangeTooltip"
import {useTranslations} from "next-intl"

export const RangeChart = ({rawData, selectedTable, parameter}) => {
    const analytics = useTranslations("AnalyticsComponent")

    const determineChartColor = () => {
        switch (selectedTable) {
            case "data171":
                return "#3b82f6"
            case "data195":
                return "#22c55e"
            case "data284":
                return "#eab308"
            case "data304":
                return "#ef4444"
            case "datahmiigr":
                return "#f97316"
            case "datahmimag":
                return "#6b7280"
            default:
                return "#3b82f6"
        }
    }

    const graphColor = determineChartColor()

    const fixedData = useMemo(() => {
        if (rawData && rawData[selectedTable]) {
            return rawData[selectedTable].rows.map((element) => ({
                date: moment(element.date).format("YYYY-MM-DD"),
                [parameter]: element[parameter],
            }))
        }
        return []
    }, [rawData, selectedTable, parameter])

    const statistics = useMemo(() => {
        if (fixedData.length === 0) return {avg: 0, max: 0, min: 0, stdDev: 0}

        const values = fixedData.map((item) => item[parameter])
        const sum = values.reduce((acc, val) => acc + val, 0)
        const avg = sum / values.length
        const max = Math.max(...values)
        const min = Math.min(...values)
        const stdDev = Math.sqrt(values.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / values.length)

        return {avg, max, min, stdDev}
    }, [fixedData, parameter])

    const renderXAxis = () => (
        <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value) => moment(value).format("MMM D")}
            className="text-outline-variant dark:text-white"
        />
    )

    const renderYAxis = () => (
        <YAxis
            type="number"
            domain={["auto", "dataMax"]}
            tickFormatter={(value) => value.toFixed(2)}
            className="text-gray-600 dark:text-gray-300"
        />
    )

    return (
        <div className="w-full h-[70vh] mt-3 bg-background dark:bg-surface-dark">
            <div
                className="w-full flex flex-col md:flex-row md:items-center md:justify-between border-b dark:border-outline-variant-dark">
                <div>
                    <h2 className="text-xl font-semibold font-clash text-on-background dark:text-on-background-dark">
                        {`${selectedTable} - ${parameter.replace("_", " ")}`}
                    </h2>
                    <p className="font-archivo text-sm text-on-surface-variant dark:text-on-surface-variant-dark/60">
                        Data visualization over time
                    </p>
                </div>
                <div className="hidden md:grid grid-cols-4 gap-8 justify-end bg-surface dark:bg-surface-dark my-3">
                    {["max", "min", "avg", "stdDev"].map((stat) => (
                        <div key={stat}>
                            <p className="text-on-surface-variant dark:text-on-surface-variant-dark/60 font-archivo text-sm text-right">
                                {analytics(stat)}
                            </p>
                            <p className="text-on-surface dark:text-on-surface-dark text-lg font-clash font-semibold text-right">
                                {statistics[stat].toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col h-[calc(100%-5rem)] p-4">
                <div
                    className="order-2 grid md:hidden grid-cols-2 gap-8 justify-end bg-surface dark:bg-surface-dark my-3">
                    {["max", "min", "avg", "stdDev"].map((stat) => (
                        <div key={stat}>
                            <p className="text-on-surface-variant dark:text-on-surface-variant-dark/60 font-archivo text-sm">
                                {analytics(stat)}
                            </p>
                            <p className="text-on-surface dark:text-on-surface-dark text-lg font-clash font-semibold text-right">
                                {statistics[stat].toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={fixedData} className="font-archivo">
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={graphColor} stopOpacity={0.8}/>
                                <stop offset="100%" stopColor={graphColor} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700"/>
                        {renderXAxis()}
                        {renderYAxis()}
                        <Tooltip
                            content={<RangeTooltip active={false} payload={[]} label={""} chartColor={graphColor}/>}/>
                        <ReferenceLine
                            y={statistics.avg}
                            stroke="#ba1a1a"
                            label={{
                                value: "Average",
                                position: "insideTopRight",
                                className: "fill-red-600 dark:fill-red-400",
                            }}
                        />
                        <Area
                            connectNulls
                            type="monotone"
                            dataKey={parameter}
                            stroke={graphColor}
                            fill="url(#colorGradient)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

