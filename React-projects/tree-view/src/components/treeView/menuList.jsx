import MenuItem from "./menuItem"

export default function MenuList({ list = []}){
    return <div>
        {
            list && list.length ?
                list.map((listItem,index) => 
                    <MenuItem key={index} listItem= { listItem }/>
                    ) : 
                    null
        }
    </div>
}