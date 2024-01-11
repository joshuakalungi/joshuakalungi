import { useEffect } from "react"
import { useState } from "react"
import { BsArrowLeftCircleFill }from "react-icons/bs"

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
            <BsArrowLeftCircleFill className="arrow arrow-left"/>
            {
                images && images.length ? images.map((imageItem)=>(
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className="current-image"
                    ></img>
                )): null 
            }

        </div>
    )
}