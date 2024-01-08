import { useState } from "react"
import data from "./data.js"
import "./styles.css"

export default function Accordian() {
    const [selected, setSelected] = useState("");
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleChange(getCurrentId){
        setSelected(getCurrentId === selected ? "" : getCurrentId);
    }

    function handleMultipleChange(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexofCurrentId);

        if(findIndexofCurrentId === -1){
            cpyMultiple.push(getCurrentId);
        }else cpyMultiple.splice(findIndexofCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    console.log(multiple);

    return ( 
        <div className="wrapper">
            <button onClick= {() => setEnableMultipleSelection(!enableMultipleSelection)}>Enable multiple Selection</button>
            <div className="accordian">
            {data && data.length >0 ? (   
                    data.map((dataItem)=> {
                        return (
                            <div key={dataItem.id} className="item">
                                <div onClick={enableMultipleSelection ? () => handleMultipleChange(dataItem.id): () => handleSingleChange(dataItem.id) }   className="title">
                                    <h3>{ dataItem.question }</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultipleSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="content">
                                            <p>{ dataItem.answer }</p>
                                        </div>) : selected === dataItem.id && (
                                        <div className="content">
                                            <p>{ dataItem.answer }</p>
                                        </div>)
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