import React from "react";
import moment from "moment";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer
} from "recharts";

export const RangeChart = ({ rawData, selectedTable, parameter }) => {
  const determineChartColor = () => {
    switch (selectedTable) {
      case "data171":
        return "#3b82f6";
      case "data195":
        return "#22c55e";
      case "data284":
        return "#eab308";
      case "data304":
        return "#ef4444";
      case "datahmiigr":
        return "#f97316";
      case "datahmimag":
        return "#6b7280";
      default:
        return "#3b82f6";
    }
  };

  const graphColor = determineChartColor();

  const dataFixer = (data, table, parameter) => {
    let fixedData = [];
    if (data && data[table]) {
      fixedData = data[table].rows.map(element => ({
        date: moment(element.date).format("YYYY-MM-DD"),
        [parameter]: element[parameter]
      }));
    }
    return fixedData;
  };

  const fixedData = dataFixer(rawData, selectedTable, parameter);

  const statistics = {
    avg:
      fixedData.reduce((acc, val) => acc + val[parameter], 0) /
      fixedData.length,
    max: Math.max(...fixedData.map(item => item[parameter])),
    min: Math.min(...fixedData.map(item => item[parameter])),
    stdDev: Math.sqrt(
      fixedData.reduce(
        (acc, val) =>
          acc +
          Math.pow(
            val[parameter] -
              fixedData.reduce((a, v) => a + v[parameter], 0) /
                fixedData.length,
            2
          ),
        0
      ) / fixedData.length
    )
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white p-2 border border-gray-300 rounded shadow">
          <p className="label">{`${moment(label).format("MMM D, YYYY")}`}</p>
          <p className="value">{`${parameter}: ${payload[0].value.toFixed(
            2
          )}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[60vh] mt-3 bg-background">
      <div className="w-full flex flex-row items-center justify-between border-b">
        <div>
          <h2 className="text-xl font-semibold font-clash">{`${selectedTable} - ${parameter.replace('_', ' ')}`}</h2>
          <p className="text-sm text-gray-500">Data visualization over time</p>
        </div>
        <div>
          {/* Statistics */}
          <div className="flex flex-row gap-8 justify-end bg-surface dark:bg-surface-container-high-dark mb-4">
            <div id="maxContainer">
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">
                Month maximum
              </p>
              <p className="text-on-surface dark:text-on-surface-dark text-base font-clash font-semibold text-right">
                {statistics.max.toFixed(2)}
              </p>
            </div>
            <div id="minContainer">
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">
                Month minimum
              </p>
              <p className="text-on-surface dark:text-on-surface-dark text-base font-clash font-semibold text-right">
                {statistics.min.toFixed(2)}
              </p>
            </div>
            <div id="averageContainer">
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">
                Month average
              </p>
              <p className="text-on-surface dark:text-on-surface-dark text-base font-clash font-semibold text-right">
                {statistics.avg.toFixed(2)}
              </p>
            </div>
            <div id="stdDevContainer">
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">
                Month standard deviation
              </p>
              <p className="text-on-surface dark:text-on-surface-dark text-base font-clash font-semibold text-right">
                {statistics.stdDev.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-5rem)] p-4">
        {/* Gráfico */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={fixedData}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={graphColor} stopOpacity={0.8} />
                <stop offset="100%" stopColor={graphColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={value => {
                return moment(value).format("MMM D");
              }}
            />
            <YAxis
              type="number"
              domain={["auto", "dataMax"]}
              tickFormatter={value => value.toFixed(2)}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={statistics.avg}
              stroke="#ba1a1a"
              label={{ value: "Average", position: "insideTopRight" }}
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
  );
};
