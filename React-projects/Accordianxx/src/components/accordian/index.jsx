import { useState } from "react"
import data from "./data.js"

export default function Accordian() {
    const [selected, setSelected] = useState("");

    function handleSignalChange(getCurrentId){
        setSelected(getCurrentId);
    }


    return ( 
        <div className="wrapper">
            <div className="accordian">
            {data && data.length >0 ? (   
                    data.map((dataItem)=> {
                        return (
                            <div key={dataItem.id} className="item">
                                <div onClick={() => handleSignalChange(dataItem.id)}   className="title">
                                    <h3>{ dataItem.question }</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id ? (
                                        <div className="content">
                                            <p>{ dataItem.answer }</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                        )
                    })
                ): (
                <div>No data Found!</div>
            )}
            </div>
        </div>)
}