import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor () {
       super ();
       console.log("Parent Constructor")
    }

    async componentDidMount () {
        console.log("Parent componentDidMount is called")
    }

    render () {
        console.log("Parent Render")
        return (
            <div className="about">
            <h1>This is About Page</h1>
            <UserClass name={"Child 1"} roll={"20BEC032"}/>
            {/* <UserClass name={"Child 2"} roll={"20BEC056"}/> */}
            {/* <User name={"Dharmesh Patel Function"} roll={"20BEC032"}/> */}
            <h1>Hii</h1>
            </div>
        )
    }
}


// const About = () => {
//     return (
//         <div className="about">
//         <h1>This is About Page </h1>
//         {/* <User name={"Dharmesh Patel Function"} roll={"20BEC032"}/> */}
//         <UserClass name={"Dharmesh Patel Class"} roll={"20BEC032"}/>
//         </div>
//     )
// }


export default About ;