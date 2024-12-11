
export const RangeTooltip = ({ active, payload, label, chartColor }) => {
  if (active && payload.length) {
    return (
      <div className="bg-surface p-3">
        <div className="flex flex-row items-center gap-3">
          <div
            id="labelColorIndicator"
            className="w-4 h-4"
            style={{ backgroundColor: chartColor
             }}
          />
          <span className="font-clash font-semibold">
            {label}
          </span>
        </div>
        {payload.map((item, index) =>
          <div key={index}>
            <span className="font-archivo">
              {item.name}: {item.value.toFixed(4)}
            </span>
          </div>
        )}
      </div>
    );
  }

  return null;
};
