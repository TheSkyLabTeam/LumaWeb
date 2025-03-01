export const FeaturesTabs = () => {
  return (
    <div className="w-full h-fit pt-4">
      <div
        id="featureContainer"
        className="w-full h-96 flex flex-col xl:flex-row xl:items-center bg-surface-container-low-dark rounded-xl overflow-hidden"
      >
        <div
          className="w-full xl:w-2/3 h-full flex flex-col p-4 xl:px-14 xl:justify-center"
          id="featureTitles"
        >
          <h3 className="text-on-background-dark font-clash font-semibold text-xl xl:text-3xl xl:max-w-xl">
            Hemos analizado y puesto a disposición datos de más de +1000
            imaganes
          </h3>
          <h4 className="font-archivo text-lg text-on-background-dark/60">
            Quieres conocer como se consiguieron estos datos?
          </h4>
        </div>
        <div
          className="w-full xl:w-1/3 bg-secondary-dark h-full"
          id="featureImage"
        >
          <h1>imagen</h1>
        </div>
      </div>
    </div>
  );
};
