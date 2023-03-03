import "./Item.css"
import React from "react"

function Header(props){
console.log(props);
return(
    <div className="block" >
        {props.data.map((item)=>{
            return(
                <h1>
                    <div>{item.name}</div>
                    <div>{item.surname}</div>
                    <div>{item.age}</div>
                    <div>{item.car}</div>
                </h1>
            )
})}
    </div>
)

}

export default Header;