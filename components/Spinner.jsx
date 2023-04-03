import React from "react";
import Image from 'next/image'
import spinner from "../public/Spinner-1s-200px.gif";

const Spinner = ({data}) => {
    return (
        <div>
            <Image
                alt="Loading..."
                src={spinner}
                fill
                className="w-[200px] m-auto block relative"
            />
        </div>
    )
}

export default Spinner