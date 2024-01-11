export default function RandomColor() {

    return (
        <div className="wrapper">
            <button style={{ 
                marginRight: '20px' 
            }} >Create Hex Color</button>
            
            <button style= {{
                marginRight: '20px'
            }}>Create rgb Color</button>
            
            <button>Create Random Color</button>

            <div style={{
                marginTop: '40px',
                fontWeight: 'bold',
            }}>Output</div>
        </div>
    )
}