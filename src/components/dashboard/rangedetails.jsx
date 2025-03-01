import { useTranslations } from "next-intl";

export const RangeDetails = props => {
  const textDetails = useTranslations("ChartsParameters");

  return (
    <div className="w-full h-fit mt-4">
      <div
        id="textDescripcionContainer"
        className="w-full h-full p-4 rounded-2xl bg-surface-container text-on-surface dark:bg-surface-container-dark dark:text-on-surface-dark"
      >
        <h3
          className="text-2xl font-clash font-semibold"
        >
          {textDetails(`${props.parameter}Title`)}
        </h3>
        <p className="font-archivo text-base mt-2 leading-relaxed">
          {textDetails(`${props.parameter}Description`)}
        </p>
      </div>
      <div id="analyticsContainer" />
    </div>
  );
};
