"use client"
import {useState, useEffect, useRef, useCallback} from "react"
import {useTranslations} from "next-intl"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {TriangleRightIcon} from "@radix-ui/react-icons"
import {TablePicker} from "@/components/dashboard/tablepicker"
import {RangeChart} from "@/components/dashboard/Charts/RangeChart"
import DateRangePicker from "@/components/dashboard/daterangepicker"
import {RangeDetails} from "@/components/dashboard/rangedetails"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {TextPlugin} from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin, useGSAP)

const Page = () => {
    const t = useTranslations("DateRange")
    const tOverview = useTranslations("ChartsParameters")
    const [selectedRange, setSelectedRange] = useState({from: "2024-04-01", to: "2024-05-30"})
    const [selectedTable, setSelectedTable] = useState("data171")
    const [rawData, setRawData] = useState(null)
    const tabList = useRef(null)
    const scrollToEndButton = useRef(null)
    const scrollToStartButton = useRef(null)

    const scrollToEnd = () => {
        if (tabList.current) {
            tabList.current.scrollTo({
                left: tabList.current.scrollWidth,
                behavior: "smooth",
            })
        }
    }

    const scrollToStart = () => {
        if (tabList.current) {
            tabList.current.scrollTo({
                left: 0,
                behavior: "smooth",
            })
        }
    }

    const updateButtonVisibility = useCallback(() => {
        if (tabList.current) {
            const {scrollLeft, scrollWidth, clientWidth} = tabList.current
            if (scrollToStartButton.current) {
                scrollToStartButton.current.style.display = scrollLeft === 0 ? "none" : "flex"
            }
            if (scrollToEndButton.current) {
                scrollToEndButton.current.style.display = scrollLeft + clientWidth >= scrollWidth ? "none" : "flex"
            }
        }
    }, [])

    useEffect(() => {
        updateButtonVisibility()
        const currentTabList = tabList.current
        if (currentTabList) {
            currentTabList.addEventListener("scroll", updateButtonVisibility)
            window.addEventListener("resize", updateButtonVisibility)
        }
        return () => {
            if (currentTabList) {
                currentTabList.removeEventListener("scroll", updateButtonVisibility)
                window.removeEventListener("resize", updateButtonVisibility)
            }
        }
    }, [updateButtonVisibility])

    const handleRangeChange = useCallback((date) => setSelectedRange(date), [])

    const handleTableChange = useCallback((table) => {
        setSelectedTable(table)
    }, [])

    const getData = useCallback(() => {
        fetch(`/api/get-range?startDate=${selectedRange?.from}&endDate=${selectedRange?.to}`)
            .then((res) => res.json())
            .then((data) => {
                setRawData(data)
            })
            .catch((err) => console.error("Error fetching data:", err))
    }, [selectedRange])

    useEffect(() => {
        getData()
    }, [getData]) //Corrected dependency array

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to("#titleRangeDate", {text: t("title"), duration: 0.6})
    })

    const parameters = [
        "entropy",
        "mean_intensity",
        "standard_deviation",
        "fractal_dimension",
        "skewness",
        "kurtosis",
        "uniformity",
        "relative_smoothness",
        "taruma_contrast",
        "taruma_directionality",
        "taruma_coarseness",
        "taruma_linelikeness",
        "taruma_regularity",
        "taruma_roughness",
    ]

    return (
        <div className="w-full h-fit flex flex-col md:p-2 mt-3">
            <div id="nav" className="w-full h-fit flex flex-col mb-4 md:flex-row md:justify-between md:items-center">
                <div id="titleContainer" className="font-clash font-semibold">
                    <h1
                        id="titleRangeDate"
                        className="max-w-lg text-3xl font-semibold text-on-background dark:text-on-background-dark"
                    />
                </div>
                <div id="dateRangeContainer" className="flex flex-col md:flex-row mt-2 md:mt-0 gap-4">
                    <TablePicker onTableChange={handleTableChange}/>
                    <DateRangePicker onRangeChange={handleRangeChange}/>
                </div>
            </div>

            <Tabs defaultValue="entropy" className="w-full mt-4">
                <div className="flex relative justify-center items-center">
                    <div className="w-full scrollable overflow-x-scroll" ref={tabList}>
                        <TabsList className="font-clash font-semibold">
                            {parameters.map((param) => (
                                <TabsTrigger key={param} value={param}>
                                    {tOverview(`${param}Title`)}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    <div
                        ref={scrollToEndButton}
                        id="ScrollToEndButton"
                        className="cursor-pointer flex justify-center items-center absolute w-10 h-10 right-[0.4rem] bg-surface-container-lowest hover:bg-tertiary-container dark:bg-surface-container-highest-dark dark:hover:bg-tertiary-container-dark rounded-full transition-all"
                        onClick={scrollToEnd}
                    >
                        <TriangleRightIcon
                            className="h-5 w-5 text-on-tertiary-container dark:text-on-tertiary-container-dark"/>
                    </div>
                    <div
                        ref={scrollToStartButton}
                        id="ScrollToStartButton"
                        className="cursor-pointer flex justify-center items-center absolute w-10 h-10 left-[0.4rem] bg-surface-container-lowest hover:bg-tertiary-container dark:bg-surface-container-highest-dark dark:hover:bg-tertiary-container-dark rounded-full transition-all"
                        onClick={scrollToStart}
                    >
                        <TriangleRightIcon
                            className="h-5 w-5 text-on-tertiary-container dark:text-on-tertiary-container-dark rotate-180"/>
                    </div>
                </div>
                {parameters.map((param) => (
                    <TabsContent key={param} value={param}>
                        <div>
                            <div className={"w-full h-[100vh]"}>
                                <RangeChart rawData={rawData} selectedTable={selectedTable} parameter={param}/>
                            </div>
                            <div>
                                <RangeDetails parameter={param}/>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default Page

