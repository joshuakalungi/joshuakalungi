import { useState } from "react"
import data from "./data.js"

export default function Accordian() {
    const [selected, setSelected] = useState("");


    return ( 
        <div className="wrapper">
            <div className="accordian">
                {
                    data.map((dataItem)=> {
                        return (
                            <div className="item">
                                <div className="title">
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