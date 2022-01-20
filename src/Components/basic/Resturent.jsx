import React, {useState} from "react";
import './style.css'
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((currElem) => {
    return currElem.category
}))
,
    "all",
]

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu)
const [menuList,setMenuList] = useState(uniqueList)
    console.log(menuList,"menulist new")
    const filterData = (filterElem) => {

        if (filterElem==="all")
        {
            setMenuData(Menu)
            return;

        }
        const updatedData = Menu.filter((curElem) => {
            return (
                curElem.category === filterElem
            )
        })
        setMenuData(updatedData);
    }
    return (
        <>
            <Navbar filterData={filterData} menuList={menuList} />
            <MenuCard menuData={menuData}/>
        </>
    )

}
export default Resturant