import React, { useState } from "react";
import {data} from "./data"

const Accordian=({data}:any)=> {

    const [expand,setExpand]=useState(false);

    console.log(data);
    if(data.isFolder){
        return(<>

            <h2 onClick={()=>setExpand(!expand)}>+{data.name}</h2>
            <div>
                {
                    data.items.map((item:any)=>(<Accordian data={item}/>))
                }
            </div>
        </>);

    }
    else{
        return(<h2>{data.name}</h2>)
}
    
}

export const AppAccordin=()=>{
    return<Accordian data={data}/>
}
