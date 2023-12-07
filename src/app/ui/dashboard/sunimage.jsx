
import Image from "next/image"

export function SunImage(){
    return(
        <div className="w-44 h-64">
            <div id="imageContainer" className="w-fit h-fit">
                <div className="w-44 h-44 bg-secondary rounded-md"></div>
            </div>
            <div id="nameContainer" className="w-full border-2 border-surface text-secondary flex p-2 rounded-md mt-2 place-center">
                <h4 className="" style={{fontFamily: 'clash'}}>Sun image</h4>
            </div>
        </div>
    )
}
