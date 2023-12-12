
import Image from "next/image"

export default function SunImage(props){
    return(
        <div className="w-44 h-64">
            <div id="imageContainer" className="w-fit h-fit">
                <Image
                    src={'https://soho.nascom.nasa.gov/data/synoptic/sunspots/sunspots_1024_20231201.jpg'}
                    alt="Sun image"
                    width={1024}
                    height={1024}
                    className="w-44 h-44 rounded-md"
                />
            </div>
            <div id="nameContainer" className="w-full border-2 border-surface text-secondary/80 flex p-2 rounded-md mt-2 place-center">
                <h4 className="" style={{fontFamily: 'clash'}}>{props.table.toUpperCase()}</h4>
            </div>
        </div>
    )
}