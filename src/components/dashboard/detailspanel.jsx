 "use client";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TriangleRightIcon } from '@radix-ui/react-icons'
import OverChart from "./Charts/OverviewChart";

 function generateDataArray(data, parameter, date) {
   if (!data) {
     return [];
   }

   let paramValues = {};

   Object.keys(data).forEach(key => {
     if (data[key].rows && data[key].rows.length > 0) {
       let rowsWithSameDate = data[key].rows.filter(row => row.date.split(" ")[0] === date);
       if (rowsWithSameDate.length > 0) {
         let sum = rowsWithSameDate.reduce((acc, row) => acc + row[parameter], 0);
         let average = sum / rowsWithSameDate.length;
         let newKey = key.toUpperCase().replace('DATA', 'EIT');
         if (newKey.endsWith('HMIIGR') || newKey.endsWith('HMIMAG')) {
           newKey = newKey.replace('DATA', '');
         }
         paramValues[newKey] = average;
       }
     }
   });

   return [{ name: parameter, ...paramValues }];
 }


const generateDataAnalytics = (data, parameter) => {
  if (!data) {
    return {};
  }

  let analytics = [];

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      data[key].rows.forEach(row => {
        if (row.hasOwnProperty(parameter)) {
          analytics.push(row[parameter]);
        }
      });
    }
  }

  let minimum = Math.min(...analytics);
  let maximum = Math.max(...analytics);
  let average = analytics.reduce((a, b) => a + b, 0) / analytics.length;

  let variance = analytics.reduce((acc, val) => acc + (val - average) ** 2, 0) / analytics.length;
  let standardDeviation = Math.sqrt(variance);

  return {
    min: minimum,
    max: maximum,
    avg: average,
    stdDev: standardDeviation
  };
};

export function DetailsPanel(props) {
  const t = useTranslations("OneDate");
  const tOverview = useTranslations("ChartsParameters");
  const [buttonActive, setButtonActive] = useState("over");
  const tabList = useRef(null);
  const scrollToEndButton = useRef(null);
  const scrollToStartButton = useRef(null);

  let data = props?.data;
  let date = props.date;

  const scrollToEnd = () => {
    if (tabList.current) {
      tabList.current.scrollTo({
        left: tabList.current.scrollWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollToStart = () => {
    if (tabList.current) {
      tabList.current.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  }

  const updateButtonVisibility = () => {
    if (tabList.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabList.current;
      if (scrollLeft === 0) {
        scrollToStartButton.current.style.display = 'none';
      } else {
        scrollToStartButton.current.style.display = 'flex';
      }
      if (scrollLeft + clientWidth >= scrollWidth) {
        scrollToEndButton.current.style.display = 'none';
      } else {
        scrollToEndButton.current.style.display = 'flex';
      }
    }
  };

  useEffect(() => {
    updateButtonVisibility();
    if (tabList.current) {
      tabList.current.addEventListener('scroll', updateButtonVisibility);
      window.addEventListener('resize', updateButtonVisibility);
    }
    return () => {
      if (tabList.current) {
        tabList.current.removeEventListener('scroll', updateButtonVisibility);
        window.removeEventListener('resize', updateButtonVisibility);
      }
    };
  }, []);
  return (
    <div className="w-full h-full mt-4 py-2 flex flex-col dark:border-surface-dark/50 rounded-xl">
      <div className="w-full h-fit">
        <div className="h-fit md:h-10 flex flex-col md:flex-row md:items-center">
          <h1
            className="text-2xl font-clash font-semibold text-on-background dark:text-on-background-dark"
          >
            {t("titleDetails")}
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full min-h-80 h-max">
          <div className="w-full">
            <Tabs defaultValue="entropy" className="w-full mt-4">
              <div className="flex relative justify-center items-center">
                <div className="scrollable w-full overflow-x-scroll" ref={tabList}>
                  <TabsList
                    className="font-clash font-semibold"
                  >
                    <TabsTrigger value="entropy">
                      {tOverview("entropyTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="mean_intensity">
                      {tOverview("meanIntensityTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="standard_deviation">
                      {tOverview("standardDeviationTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="fractal_dimension">
                      {tOverview("fractalDimensionTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="skewness">
                      {tOverview("skewnessTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="kurtosis">
                      {tOverview("kurtosisTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="uniformity">
                      {tOverview("uniformityTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="relative_smoothness">
                      {tOverview("relativeSmoothnessTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="taruma_contrast">
                      {tOverview("tarumaContrastTitle")}
                    </TabsTrigger>
                    <TabsTrigger value="taruma_directionality">
                      {tOverview("tarumaDirectionalityTitle")}
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div
                  ref={scrollToEndButton}
                  id="ScrollToEndButton"
                  className="cursor-pointer flex justify-center items-center absolute w-10 h-10 right-[0.4rem] bg-surface-container-lowest hover:bg-tertiary-container dark:bg-surface-container-highest-dark dark:hover:bg-tertiary-container-dark rounded-full transition-all"
                  onClick={scrollToEnd}
                >
                  <TriangleRightIcon className="h-5 w-5 text-on-tertiary-container dark:text-on-tertiary-container-dark"/>
                </div>
                <div
                  ref={scrollToStartButton}
                  id="ScrollToStartButton"
                  className="cursor-pointer flex justify-center items-center absolute w-10 h-10 left-[0.4rem] bg-surface-container-lowest hover:bg-tertiary-container dark:bg-surface-container-highest-dark dark:hover:bg-tertiary-container-dark rounded-full transition-all"
                  onClick={scrollToStart}
                >
                  <TriangleRightIcon className="h-5 w-5 text-on-tertiary-container dark:text-on-tertiary-container-dark rotate-180"/>
                </div>
              </div>
              
              <TabsContent value="entropy" className="flex">
                <OverChart
                  data={generateDataArray(data, "entropy", date)}
                  parameter={"entropy"}
                  statistics={generateDataAnalytics(data, "entropy")}
                />
              </TabsContent>
              <TabsContent value="mean_intensity" className="">
                <OverChart
                  data={generateDataArray(data, "mean_intensity", date)}
                  parameter={"meanIntensity"}
                  statistics={generateDataAnalytics(data, "mean_intensity")}
                />
              </TabsContent>
              <TabsContent value="standard_deviation" className="">
                <OverChart
                  data={generateDataArray(data, "standard_deviation", date)}
                  parameter={"standardDeviation"}
                  statistics={generateDataAnalytics(data, "standard_deviation")}
                />
              </TabsContent>
              <TabsContent value="fractal_dimension" className="">
                <OverChart
                  data={generateDataArray(data, "fractal_dimension", date)}
                  parameter={"fractalDimension"}
                  statistics={generateDataAnalytics(data, "fractal_dimension")}
                />
              </TabsContent>
              <TabsContent value="skewness" className="">
                <OverChart
                  data={generateDataArray(data, "skewness", date)}
                  parameter={"skewness"}
                  statistics={generateDataAnalytics(data, "skewness")}
                />
              </TabsContent>
              <TabsContent value="kurtosis" className="">
                <OverChart
                  data={generateDataArray(data, "kurtosis", date)}
                  parameter={"kurtosis"}
                  statistics={generateDataAnalytics(data, "kurtosis")}
                />
              </TabsContent>
              <TabsContent value="uniformity" className="">
                <OverChart
                  data={generateDataArray(data, "uniformity", date)}
                  parameter={"uniformity"}
                  statistics={generateDataAnalytics(data, "uniformity")}
                />
              </TabsContent>
              <TabsContent value="relative_smoothness" className="">
                <OverChart
                  data={generateDataArray(data, "relative_smoothness", date)}
                  parameter={"relativeSmoothness"}
                  statistics={generateDataAnalytics(data, "relative_smoothness")}
                />
              </TabsContent>
              <TabsContent value="taruma_contrast" className="">
                <OverChart
                  data={generateDataArray(data, "taruma_contrast", date)}
                  parameter={"tarumaContrast"}
                  statistics={generateDataAnalytics(data, "taruma_contrast")}
                />
              </TabsContent>
              <TabsContent value="taruma_directionality" className="">
                <OverChart
                    data={generateDataArray(data, "taruma_directionality", date)}
                    parameter={"tarumaDirectionality"}
                    statistics={generateDataAnalytics(data, "taruma_directionality")}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
