export default function OneAnalytics(props) {
  let statistics = props.statistics;
  return (
    <div className="flex flex-row gap-8 justify-end bg-surface dark:bg-background-dark">
          <div id="maxContainer">
            <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">Month maximum</p>
            <p className="text-on-surface dark:text-on-surface-dark text-base font-clash font-semibold text-right">{statistics.max.toFixed(2)}</p>
          </div>
          <div id="minContainer">
            <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">Month minimum</p>
            <p className="text-on-surface dark:text-on-surface-dark text-base font-clash font-semibold text-right">{statistics.min.toFixed(2)}</p>
          </div>
          <div id="averageContiner">
            <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">Month average</p>
            <p className="text-on-surface dark:text-on-surface-dark text-base font-clash font-semibold text-right">{statistics.avg.toFixed(2)}</p>
          </div>
          <div id="stdDevContainer">
            <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">Month standard deviation</p>
            <p className="text-on-surface dark:text-on-surface-dark text-base font-clash font-semibold text-right">{statistics.stdDev.toFixed(2)}</p>
          </div>
        </div>
  );
}
