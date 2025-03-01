export default function SunSkeleton() {
    return (
        <div
            id={'sunSpotInfoContainerSkeleton'}
            className={`flex flex-col h-[40svh] md:h-[30svh] lg:h-[63vh] bg-surface-container dark:bg-surface-container-dark animate-pulse`}
        >
            <div className={`w-full h-[15%] flex p-3`}>
                <div className={`h-full w-1/2 bg-surface-container-high dark:bg-surface-container-high-dark`}></div>
            </div>
            <div className={`w-full h-[70%] flex flex-col justify-center items-center`}>
                <div className={`w-3/6 h-20 bg-surface-container-high dark:bg-surface-container-high-dark`}></div>
                <div className={`w-3/6 h-9 mt-2 bg-surface-container-high dark:bg-surface-container-high-dark`}></div>
            </div>
            <div
                className={`w-full h-fit xl:h-[15%] flex flex-row bg-surface-container dark:bg-surface-container-low-dark p-2 gap-2`}>
                <div className={`w-1/2 h-full flex flex-col text-center justify-center items-center`}>
                    <div className={`bg-surface-container-high dark:bg-surface-container-high-dark w-full h-full`}></div>
                </div>
                <div className={`w-1/2 h-full flex flex-col text-center justify-center items-center`}>
                    <div className={`bg-surface-container-high dark:bg-surface-container-high-dark w-full h-full`}></div>
                </div>
            </div>
        </div>
    )
}