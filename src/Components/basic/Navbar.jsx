import Menu from "./MenuApi";
import React from "react";

const Navbar = ({filterData,menuList}) =>{
    console.log(menuList)
    return(
        <>
            <div className="navbar">
                <div className="btn-group">
                    {
menuList.map((curElem) =>{
    return(
        <button className="btn-group__item" onClick={() => filterData(curElem)}>{curElem}</button>

    )
})
                    }

                    {/*<button className="btn-group__item" onClick={() => filterData("lunch")}>lunch</button>*/}
                    {/*<button className="btn-group__item" onClick={() => filterData("evening")}>evening</button>*/}
                    {/*<button className="btn-group__item" onClick={() => filterData("dinner")}>dinner</button>*/}
                    {/*<button className="btn-group__item"onClick={() =>setMenuData(Menu)}>all</button>*/}
                </div>
            </div>

        </>
    )

}
export default Navbar