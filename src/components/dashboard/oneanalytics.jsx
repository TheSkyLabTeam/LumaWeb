export default function OneAnalytics(props) {
  let statistics = props.statistics;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-end bg-surface dark:bg-background-dark">
      <div id="maxContainer" className='flex flex-col justify-between h-14 md:p-0'>
        <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">
          Month maximum
        </p>
        <p className="text-on-surface dark:text-on-surface-dark text-xl font-clash font-semibold text-right">
          {statistics.max.toFixed(2)}
        </p>
      </div>
      <div id="minContainer" className='flex flex-col justify-between h-14 md:p-0'>
        <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">
          Month minimum
        </p>
        <p className="text-on-surface dark:text-on-surface-dark text-xl font-clash font-semibold text-right">
          {statistics.min.toFixed(2)}
        </p>
      </div>
      <div id="averageContiner" className='flex flex-col justify-between h-14 md:p-0'>
        <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">
          Month average
        </p>
        <p className="text-on-surface dark:text-on-surface-dark text-xl font-clash font-semibold text-right">
          {statistics.avg.toFixed(2)}
        </p>
      </div>
      <div id="stdDevContainer" className='flex flex-col justify-between h-14 md:p-0'>
        <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-sm">
          Month standard deviation
        </p>
        <p className="text-on-surface dark:text-on-surface-dark text-xl font-clash font-semibold text-right">
          {statistics.stdDev.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
