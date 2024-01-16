import { useEffect } from "react"
import { useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill }from "react-icons/bs"
import "./styles.css"

// eslint-disable-next-line react/prop-types
export default function ImageSlider({url,page=1, limit=5 }){
    const [images, setImages] = useState([])
    const [slider,setSlider] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading,setLoading] = useState(false)


    async function fetchImages(getUrl){
        // catching errors
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)

            const data = await response.json()

            if(data) {
                setImages(data)
                setLoading(false)
            }

        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    function handlePrevious(){
        setSlider(slider === 0 ? images.length -1 : slider -1);
    }

    function handleNext(){
        setSlider(slider === images.length -1 ? 0 : slider +1);
    }


    useEffect(() => {
        if(url !== "") fetchImages(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])

    console.log(images)

    if(loading){
        return <div>Loading Please wait...</div>
    }

    if(errorMsg !== null){
        return <div>Error occured! {errorMsg}</div>
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={()=>handlePrevious()} className="arrow arrow-left" />
            {
                images && images.length ? images.map((imageItem, index)=>(
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={slider === index? "current-image" : "current-image hide-current-image"}
                    ></img>
                )): null 
            }
            <BsArrowRightCircleFill onClick={()=>handleNext()} className="arrow arrow-right"/>
            <span className="circle-indicator">
                {
                    images && images.length ? 
                        images.map((_,index)=> <button
                            key={index}
                            className={slider === index ? "current-indicator": "current-indicator hide-current-indicator"}
                            onClick={()=> setSlider(index)}
                            ></button>)
                    :null
            }
            </span>
        </div>
    )
}