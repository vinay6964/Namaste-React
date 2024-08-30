import { useEffect, useState } from "react";

const User = ({name,roll}) => {
    console.log(name,"function child child component is called")
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    useEffect(()=>{console.log(name,"function didMount is Called")},[])
    return (
        <div className="userDetails">
            <h5>Roll : {roll}</h5>
            <h5>Name : {name}</h5>
            <h6>Count : {count}</h6>
        </div>
    )
}

export default User;