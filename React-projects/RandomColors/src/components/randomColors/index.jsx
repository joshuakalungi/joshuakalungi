import { useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex"); //default type of color is hex
    const [color, setColor] = useState("#ffffff"); //default color is white

    function randomColorUtility(length){
        return Math.floor(Math.random() *length);
    }
    
    function handleCreateRandomHexColor () {
        const hex = [ 1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

        let hexColor = '#';

        for(let i = 0; i <6;i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor);

        setColor(hexColor);
    }

    function handleCreateRandomRgbColor(){
        // const r = 

    }

    return (
        <>
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} className="wrapper">
            <button onClick={() =>setTypeOfColor('hex')} style={{ 
                marginRight: '20px' 
            }} >Create Hex Color</button>
            
            <button onClick={()=>setTypeOfColor('rgb')} style= {{
                marginRight: '20px'
            }}>Create rgb Color</button>
            
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Create Random Color</button>

            
        </div>
        <div style={{
                marginTop: '40px',
                fontWeight: 'bold',
                position: 'absolute',
                bottom: '35%',
                left: '50%',
        }}>Output</div>
        </>
    )
}