/* eslint-disable react/prop-types */
import MenuItem from "./menuItem"

export default function MenuList({ list = []}){
    return <ul>
        {
            list && list.length ?
                list.map((listItem,index) => 
                    <MenuItem key={index} listItem= { listItem }/>
                    ) : 
                    null
        }
    </ul>
}