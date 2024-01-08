import { useState } from "react"
import data from "./data.js"

export default function Accordian() {
    const [selected, setSelected] = useState("");

    function handleSignalChange(){
        console.log(dataItem.id);
    }


    return ( 
        <div className="wrapper">
            <div className="accordian">
                {
                    data.map((dataItem)=> {
                        return (
                            <div className="item">
                                <div onClick={() => handleSignalChange(dataItem.id)}   className="title">
                                    <h3>{ dataItem.question }</h3>
                                    <span>+</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>)
}