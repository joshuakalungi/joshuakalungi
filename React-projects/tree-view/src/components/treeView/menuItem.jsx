import MenuList from "./menuList"

/* eslint-disable react/prop-types */
export  default function MenuItem({ listItem = {} }){
    return <li>
        <p>{listItem.label}</p>
        {
            listItem && listItem.children && listItem.children.length ?
                <MenuList list={ listItem.children }/>
            :null
        }
    </li>
}