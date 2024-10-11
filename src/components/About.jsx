import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor () {
       super ();
    }

    async componentDidMount () {
    }

    render () {
        return (
            <div className="about">
            <h1>This is About Page</h1>
            <UserClass name={"Child 1"} roll={"20BEC032"}/>
            <h1>Hii</h1>
            </div>
        )
    }
}

export default About ;